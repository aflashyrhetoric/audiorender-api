<?php

/**
 * This controller handles the redirection after a successful or canceled checkout process.
 *
 * The actual event handling is done in StripeEventListener.php.
 *
 * The routes that trigger these controller actions are defined in web.php, and the user will be redirected to them through Stripe's configuration.
 *
 *
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use function redirect;

class CheckoutController extends Controller
{
    public function handleCheckoutSuccess(Request $request)
    {
        // Actual EVENT is handled in StripeEventListener.php

        // Redirect to "success" named route afterwards
        return Inertia::render('success');
    }

    public function handleCheckoutCanceled(Request $request)
    {
        // Actual EVENT is handled in StripeEventListener.php

        // Redirect to "success" named route afterwards
        return Inertia::render('canceled');
    }
}
