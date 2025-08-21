<?php

namespace App\Listeners;

use App\Mail\LicenseKeyMail;
use App\Services\LicensingService;
use Laravel\Cashier\Events\WebhookReceived;
use Mail;
use Stripe\StripeClient;
use function dump;

class StripeEventListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
    }

    /**
     * Handle received Stripe webhooks.
     */
    public function handle(WebhookReceived $event): void
    {
        if ($event->payload['type'] === 'charge.succeeded') {
            $email = $event->payload['data']['object']['billing_details']['email'];

            // Retrieve the customer from Stripe
            try {
                $licensingService = new LicensingService();
                $newCustomer = $licensingService->initializeNewCustomer($email);
                Mail::to($newCustomer->email)
                    ->send(new LicenseKeyMail($newCustomer));

            } catch (\Stripe\Exception\ApiErrorException $e) {
                // Handle the error, e.g., log it or notify the admin
                \Log::error('Stripe API error: ' . $e->getMessage());
                return;
            }

            // Handle the incoming event...
        }
    }
}
