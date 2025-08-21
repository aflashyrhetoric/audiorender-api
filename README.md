# AudioRender Back-End

## This repository holds 3 components:
- the marketing website
- the licensing api key generation backend
    - as part of above, the handlers for stripe webhooks handlers

## Marketing Site Development

Just install NPM dependencies and `npm run dev`.

## Licensing API Development

The Stripe checkout page is triggered via the `/product-checkout` route.

Stripe webhook routes are configured on the Stripe dashboard.

### Important Pages:
- The AudioRender "Price ID" page: https://dashboard.stripe.com/prices/price_1RjlYx06WIQ2GP7sBbs2w8D5

