<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            // If the column exists
            if(Schema::hasColumn('customers', 'stripe_customer_id')) {
                // Drop any foreign key constraints first
                $table->dropForeign(['stripe_customer_id']);
                $table->dropColumn('stripe_customer_id');
            }
        });
    }

    public function down(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->string('stripe_customer_id')->nullable()->after('id');
        });
    }
};
