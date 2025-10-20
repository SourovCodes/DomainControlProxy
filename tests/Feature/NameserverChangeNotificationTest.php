<?php

use App\Models\Domain;
use App\Models\User;
use App\Notifications\NameserverChanged;
use Illuminate\Support\Facades\Notification;

use function Pest\Laravel\actingAs;

it('sends notification when nameservers are changed', function () {
    Notification::fake();

    $user = User::factory()->create();
    $domain = Domain::factory()->create([
        'user_id' => $user->id,
        'nameserver_1' => 'ns1.example.com',
        'nameserver_2' => 'ns2.example.com',
        'nameserver_3' => null,
        'nameserver_4' => null,
    ]);

    actingAs($user)
        ->put(route('domains.update', $domain), [
            'nameserver_1' => 'ns1.newserver.com',
            'nameserver_2' => 'ns2.newserver.com',
            'nameserver_3' => null,
            'nameserver_4' => null,
        ])
        ->assertRedirect(route('domains.index'))
        ->assertSessionHas('success', 'Nameservers updated successfully.');

    Notification::assertSentTo(
        Notification::route('mail', 'sourovcodes@gmail.com'),
        NameserverChanged::class,
        function ($notification) use ($domain) {
            return $notification->domain->id === $domain->id
                && $notification->oldNameservers['nameserver_1'] === 'ns1.example.com'
                && $notification->newNameservers['nameserver_1'] === 'ns1.newserver.com';
        }
    );
});

it('does not send notification when nameservers are not changed', function () {
    Notification::fake();

    $user = User::factory()->create();
    $domain = Domain::factory()->create([
        'user_id' => $user->id,
        'nameserver_1' => 'ns1.example.com',
        'nameserver_2' => 'ns2.example.com',
        'nameserver_3' => null,
        'nameserver_4' => null,
    ]);

    actingAs($user)
        ->put(route('domains.update', $domain), [
            'nameserver_1' => 'ns1.example.com',
            'nameserver_2' => 'ns2.example.com',
            'nameserver_3' => null,
            'nameserver_4' => null,
        ])
        ->assertRedirect(route('domains.index'));

    Notification::assertNothingSent();
});

it('sends notification when optional nameservers are changed', function () {
    Notification::fake();

    $user = User::factory()->create();
    $domain = Domain::factory()->create([
        'user_id' => $user->id,
        'nameserver_1' => 'ns1.example.com',
        'nameserver_2' => 'ns2.example.com',
        'nameserver_3' => null,
        'nameserver_4' => null,
    ]);

    actingAs($user)
        ->put(route('domains.update', $domain), [
            'nameserver_1' => 'ns1.example.com',
            'nameserver_2' => 'ns2.example.com',
            'nameserver_3' => 'ns3.example.com',
            'nameserver_4' => 'ns4.example.com',
        ])
        ->assertRedirect(route('domains.index'));

    Notification::assertSentTo(
        Notification::route('mail', 'sourovcodes@gmail.com'),
        NameserverChanged::class,
        function ($notification) use ($domain) {
            return $notification->domain->id === $domain->id
                && $notification->oldNameservers['nameserver_3'] === null
                && $notification->newNameservers['nameserver_3'] === 'ns3.example.com';
        }
    );
});

it('includes correct domain information in notification', function () {
    $user = User::factory()->create();
    $domain = Domain::factory()->create([
        'user_id' => $user->id,
        'domain_name' => 'example.com',
        'nameserver_1' => 'ns1.old.com',
        'nameserver_2' => 'ns2.old.com',
    ]);

    $oldNameservers = [
        'nameserver_1' => 'ns1.old.com',
        'nameserver_2' => 'ns2.old.com',
        'nameserver_3' => null,
        'nameserver_4' => null,
    ];

    $newNameservers = [
        'nameserver_1' => 'ns1.new.com',
        'nameserver_2' => 'ns2.new.com',
        'nameserver_3' => null,
        'nameserver_4' => null,
    ];

    $notification = new NameserverChanged($domain, $oldNameservers, $newNameservers);
    $mailMessage = $notification->toMail($user);

    expect($mailMessage->subject)->toBe('Nameserver Changed: example.com')
        ->and($mailMessage->actionUrl)->toBe(route('domains.edit', $domain));
});
