<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateNameserversRequest;
use App\Models\Domain;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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

        $domain->update($request->validated());

        return redirect()->route('domains.index')->with('success', 'Nameservers updated successfully.');
    }
}
