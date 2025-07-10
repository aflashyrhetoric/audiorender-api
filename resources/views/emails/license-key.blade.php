@component('mail::message')
# Thank you for purchasing AudioRender! ❤️

Your license has been associated with the email:

**{{ $customer->email }}**

Your license key is below:

    **{{ $customer->license_key }}**

## To activate your license, follow these steps:
1. Open up AudioRender.
2. Click the Settings button in the top right corner.
3. Type in the e-mail address above.
4. Paste in your license key.
5. Hit the Activate button.


We're grateful for your support and hope that it helps you in your audio projects.
Please reach out out to contact@audiorender.app if you have any questions or need assistance.

{{-- If you want to add a button, uncomment the lines below and set the URL --}}

{{--@component('mail::button', ['url' => ''])--}}
{{--Button Text--}}
{{--@endcomponent--}}
@endcomponent
