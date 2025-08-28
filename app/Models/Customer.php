<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Customer extends Model
{
    protected $fillable = [
        'stripe_customer_id',
        'email',
        'license_key',
        'device_name',
        'device_activation_count',
        'status',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function licenseActivations(): HasMany
    {
        return $this->hasMany(LicenseActivation::class);
    }

//    public function subscriptions(): HasMany
//    {
//        return $this->hasMany(Subscription::class);
//    }
}
