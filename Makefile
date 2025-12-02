.PHONY=all migrate status rollback webhook trigger-charge trigger-fixtures random-code

migrate:
	php artisan migrate

status:
	php artisan migrate:status

random-code:
	@zsh -c 'LC_ALL=C tr -dc "A-Z0-9" < /dev/urandom | head -c 20; echo'

# Rollbacks one migration
rollback:
	php artisan migrate:rollback --step=1

# After you set this you have to change the webhook secret in the .env file
webhook:
	stripe listen --forward-to localhost/stripe/webhook/

# Check these docs for the "shape" of the payment intent https://docs.stripe.com/api/payment_intents/object
# Check these docs for the arguments that the "stripe trigger" cli command actually accepts: https://github.com/stripe/stripe-cli/blob/master/pkg/fixtures/triggers/charge.succeeded.json
# You'll need to pass the thing you want to override as a series of "--override" arguments: https://docs.stripe.com/stripe-cli/triggers#advanced-customization-of-events
trigger-charge:
	stripe trigger charge.succeeded --override payment_intent:"receipt_email"=testuser@gmail.com

trigger-fixtures:
	stripe fixtures ./charge.succeeded.fixtures.json

# stripe-charge-template-do-not-use:
#	stripe trigger charge.succeeded --override billing_details:"address[country]"=FR
