<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\LicenseActivation;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class LicenseActivationController extends Controller
{
    public function index()
    {
        return LicenseActivation::all();
    }

    // This is called when a user is trying to validate their email
    public function checkLicense(Request $request)
    {
        $data = $request->validate([
            'email' => ['required'],
            'license_key' => ['required', 'string']
        ]);

        // Find a customer where the email matches and "license_key" is not null
        $customerWithLicense = Customer::where('email', $data['email'])
            ->where('license_key', $data['license_key'])
            ->first();

        if ($customerWithLicense) {
            // Update the customer's 'device_activation_count' field
            $customerWithLicense->device_activation_count += 1;
            $customerWithLicense->save();
            return response()->json(['status' => 'active', 'activation' => $customerWithLicense]);
        }

        return response()->json(['status' => 'inactive'], 404);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'customer_id' => ['required', 'integer'],
            'device_uuid' => ['required'],
            'device_name' => ['required'],
        ]);

        return LicenseActivation::create($data);
    }

    public function show(LicenseActivation $licenseActivation)
    {
        return $licenseActivation;
    }

    public function update(Request $request, LicenseActivation $licenseActivation)
    {
        $data = $request->validate([
            'customer_id' => ['required', 'integer'],
            'device_uuid' => ['required'],
            'device_name' => ['required'],
        ]);

        $licenseActivation->update($data);

        return $licenseActivation;
    }

    public function destroy(LicenseActivation $licenseActivation)
    {
        $licenseActivation->delete();

        return response()->json();
    }


// Old method that I'm keeping for posterity, but it probably isn't being used and doesn't match our flow. StripeEventListener.php handles the logic of registering a new customer and creating a license
//    public function register(Request $request)
//    {
//        $data = $request->validate([
//            'email' => ['required', 'email'],
//            'license_key' => ['required', 'string'],
//        ]);
//
//        // Find a customer where the email matches and "license_key" matches
//        $customer = Customer::where('email', $data['email'])
//            ->where('license_key', $data['license_key'])
//            ->first();
//
//        if (!$customer) {
//            return response()->json(['status'=>'error', 'error' => 'Invalid email or license key'], 404);
//        }
//
//        // Check how many license activations the customer already has, if any
//        $existingActivations = $customer->licenseActivations()->count();
//
//        // Create the license activation for the current device, based on UUID
//        $licenseActivation = LicenseActivation::create([
//            'customer_id' => $customer->id,
//            'device_uuid' => Uuid::uuid4()->toString(),
//            'device_name' => "device-" . ($existingActivations + 1),
//        ]);
//
//        return response()->json([
//            'email' => $data['email'],
//            'license_key' => $data['license_key'],
//            'status' => 'active',
//            'activation' => $licenseActivation
//        ]);
//    }
}
