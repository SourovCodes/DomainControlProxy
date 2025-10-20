<?php

namespace App\Notifications;

use App\Models\Domain;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NameserverChanged extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(
        public Domain $domain,
        public array $oldNameservers,
        public array $newNameservers,
    ) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $message = (new MailMessage)
            ->subject('Nameserver Changed: '.$this->domain->domain_name)
            ->line('The nameservers for **'.$this->domain->domain_name.'** have been changed.')
            ->line('**Previous Nameservers:**');

        foreach ($this->oldNameservers as $key => $value) {
            if ($value) {
                $message->line('• '.ucfirst(str_replace('_', ' ', $key)).': '.$value);
            }
        }

        $message->line('**New Nameservers:**');

        foreach ($this->newNameservers as $key => $value) {
            if ($value) {
                $message->line('• '.ucfirst(str_replace('_', ' ', $key)).': '.$value);
            }
        }

        return $message
            ->action('View Domain', route('domains.edit', $this->domain))
            ->line('If you did not make this change, please contact support immediately.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'domain_id' => $this->domain->id,
            'domain_name' => $this->domain->domain_name,
            'old_nameservers' => $this->oldNameservers,
            'new_nameservers' => $this->newNameservers,
        ];
    }
}
