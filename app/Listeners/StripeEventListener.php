<?php

namespace App\Listeners;

use Laravel\Cashier\Events\WebhookReceived;

class StripeEventListener
{
    /**
     * Create the event listener.
     */
    public function __construct() {}

    /**
     * Handle received Stripe webhooks.
     */
    public function handle(WebhookReceived $event): void
    {
        if ($event->payload['type'] === 'charge.succeeded') {
            dump($event->payload);
            // Handle the incoming event...
        }
    }
}
