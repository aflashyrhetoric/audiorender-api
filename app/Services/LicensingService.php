<?php

namespace App\Services;

use App\Models\Customer;
use Str;

class LicensingService
{
    public function __construct()
    {
    }

    public function initializeNewCustomer(string $customerId, string $email): Customer
    {
        $newCustomer = Customer::create([
            'stripe_customer_id' => $customerId,
            'email' => $email,
            'license_key' => Str::upper(Str::random(20)),
            'status' => 'active',
        ]);
        $newCustomer->save();

        return $newCustomer;
    }

}
