<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Movie title');
            $table->text('description')->comment('Movie description');
            $table->string('poster_url')->nullable()->comment('Movie poster image URL');
            $table->json('download_links')->nullable()->comment('Array of download links');
            $table->string('streaming_link')->nullable()->comment('Streaming/watch online link');
            $table->string('trailer_link')->nullable()->comment('Movie trailer link');
            $table->text('banner_300x250')->nullable()->comment('Adstera 300x250 banner code');
            $table->text('banner_728x90')->nullable()->comment('Adstera 728x90 banner code');
            $table->text('banner_320x50')->nullable()->comment('Adstera 320x50 banner code');
            $table->text('banner_160x600')->nullable()->comment('Adstera 160x600 banner code');
            $table->text('banner_300x600')->nullable()->comment('Adstera 300x600 banner code');
            $table->text('pop_under_code')->nullable()->comment('Adstera pop-under code');
            $table->text('direct_link_code')->nullable()->comment('Adstera direct link code');
            $table->string('slug')->unique()->comment('SEO-friendly URL slug');
            $table->timestamps();
            
            // Add indexes for performance
            $table->index('title');
            $table->index('slug');
            $table->index(['created_at', 'title']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};