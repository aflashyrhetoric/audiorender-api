@component('mail::message')
# Thank you for purchasing AudioRender! ❤️

Your license has been associated with the email:

✉️ **{{ $customer->email }}**

Your License Key is below:

👉 **{{ $customer->license_key }}** 👈

---

## To activate your license, follow these steps:
1. Open AudioRender. 😎
2. Click **Unlock Full Access** on the top bar of the app.
3. Copy & paste the E-mail address above.
4. Copy & paste the License Key address above.
5. Click the **Register License** button.

---

We're grateful for your support and hope that it helps you boost your audio content far and wide!

Please don't hesitate to reach out to contact@audiorender.app if you have any questions or need assistance.

{{-- If you want to add a button, uncomment the lines below and set the URL --}}

{{--@component('mail::button', ['url' => ''])--}}
{{--Button Text--}}
{{--@endcomponent--}}
@endcomponent
