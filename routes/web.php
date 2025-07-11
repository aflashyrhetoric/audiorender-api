<?php

use App\Http\Controllers\CheckoutController;
use App\Models\Customer;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Cashier\Checkout;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/test-email', function() {
    $test_customer = new Customer();
    $test_customer->email = 'test@gmail.com';
    $test_customer->license_key = Str::upper(Str::random(20));

    return new \App\Mail\LicenseKeyMail($test_customer);
});


Route::get('/product-checkout', function (Request $request) {
    $priceId = 'price_1RgYVI0505pw7M7z2rzb9FWw';
    return Checkout::guest()->create($priceId, [
        'success_url' => route('checkout-success'),
        'cancel_url' => route('checkout-cancel'),
    ]);
})->name('checkout-page');

Route::get('/checkout/success', [CheckoutController::class, 'handleCheckoutSuccess'])->name('checkout-success');
Route::get('/checkout/cancel', [CheckoutController::class, 'handleCheckoutSuccess'])->name('checkout-cancel');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
