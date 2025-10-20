<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateNameserversRequest;
use App\Models\Domain;
use App\Notifications\NameserverChanged;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Inertia\Inertia;
use Inertia\Response;

class DomainController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $domains = Domain::query()
            ->where('user_id', $request->user()->id)
            ->orderBy('domain_name')
            ->get();

        return Inertia::render('Domains/Index', [
            'domains' => $domains,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Domain $domain): Response
    {
        // Ensure user owns the domain
        if ($domain->user_id !== $request->user()->id) {
            abort(403, 'Unauthorized action.');
        }

        return Inertia::render('Domains/Edit', [
            'domain' => $domain,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNameserversRequest $request, Domain $domain): RedirectResponse
    {
        // Ensure user owns the domain
        if ($domain->user_id !== $request->user()->id) {
            abort(403, 'Unauthorized action.');
        }

        // Capture old nameservers before update
        $oldNameservers = [
            'nameserver_1' => $domain->nameserver_1,
            'nameserver_2' => $domain->nameserver_2,
            'nameserver_3' => $domain->nameserver_3,
            'nameserver_4' => $domain->nameserver_4,
        ];

        // Update the domain
        $domain->update($request->validated());

        // Capture new nameservers after update
        $newNameservers = [
            'nameserver_1' => $domain->nameserver_1,
            'nameserver_2' => $domain->nameserver_2,
            'nameserver_3' => $domain->nameserver_3,
            'nameserver_4' => $domain->nameserver_4,
        ];

        // Check if any nameserver has changed
        $hasChanged = false;
        foreach ($oldNameservers as $key => $oldValue) {
            if ($oldValue !== $newNameservers[$key]) {
                $hasChanged = true;
                break;
            }
        }

        // Send notification if nameservers changed
        if ($hasChanged) {
            Notification::route('mail', 'sourovcodes@gmail.com')
                ->notify(new NameserverChanged($domain, $oldNameservers, $newNameservers));
        }

        return redirect()->route('domains.index')->with('success', 'Nameservers updated successfully.');
    }
}
