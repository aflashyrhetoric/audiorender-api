<?php
// app/Http/Controllers/WebhookController.php

// app/Http/Controllers/WebhookController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    public function handleCheckoutSuccess(Request $request)
    {
        // Actual EVENT is handled in StripeEventListener.php

        // This is just to direct the user towards something indicating success!
        return response()->json(['status' => 'success'], 200);
    }
}
