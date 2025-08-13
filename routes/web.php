<?php

use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Movie routes - public access for generated pages
Route::controller(MovieController::class)->group(function () {
    Route::get('/movies', 'index')->name('movies.index');
    Route::get('/create', 'create')->name('movies.create');
    Route::post('/movies', 'store')->name('movies.store');
    Route::get('/movie/{movie}', 'show')->name('movies.show');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
