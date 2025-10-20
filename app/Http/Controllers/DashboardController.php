<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateNameserversRequest;
use App\Models\Domain;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $domains = Domain::query()
            ->where('user_id', $request->user()->id)
            ->orderBy('domain_name')
            ->get();

        return Inertia::render('dashboard', [
            'domains' => $domains,
        ]);
    }

    public function updateNameservers(UpdateNameserversRequest $request, Domain $domain): RedirectResponse
    {
        // Ensure user owns the domain
        if ($domain->user_id !== $request->user()->id) {
            abort(403, 'Unauthorized action.');
        }

        $domain->update($request->validated());

        return redirect()->back()->with('success', 'Nameservers updated successfully.');
    }
}
