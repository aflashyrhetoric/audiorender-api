<?php

namespace App\Services;

use App\Models\Customer;
use Str;

class LicensingService
{
    public function __construct()
    {
    }

    public function initializeNewCustomer(string $email): Customer
    {
        $newCustomer = Customer::create([
            'email' => $email,
            'license_key' => Str::upper(Str::random(20)),
            'status' => 'active',
        ]);
        $newCustomer->save();

        return $newCustomer;
    }

}
