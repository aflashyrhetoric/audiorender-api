<?php

namespace App\Http\Controllers;

use App\Models\LicenseActivation;
use Illuminate\Http\Request;

class LicenseActivationController extends Controller
{
    public function index()
    {
        return LicenseActivation::all();
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
}
