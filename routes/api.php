<?php

use App\Http\Controllers\LicenseActivationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('v1')->group(function() {
//    Route::post('/license/register', [LicenseActivationController::class, 'register'])->name('license.register');
    Route::post('/license/validate', [LicenseActivationController::class, 'checkLicense'])->name('license.check');
});
