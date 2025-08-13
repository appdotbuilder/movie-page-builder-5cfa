<?php

use App\Models\Movie;
use function Pest\Laravel\{get, post};

test('welcome page displays movie builder', function () {
    get('/')
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('welcome')
        );
});

test('movies index page works', function () {
    Movie::factory(3)->create();
    
    get('/movies')
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('movies/index')
            ->has('movies.data', 3)
        );
});

test('can create a movie', function () {
    $movieData = [
        'title' => 'Test Movie',
        'description' => 'This is a test movie description.',
        'poster_url' => 'https://example.com/poster.jpg',
        'download_links_input' => "https://example.com/download1\nhttps://example.com/download2",
        'streaming_link' => 'https://example.com/stream',
        'trailer_link' => 'https://youtube.com/watch?v=test',
        'banner_300x250' => '<div>Test banner</div>',
    ];

    post('/movies', $movieData)
        ->assertRedirect();

    expect(Movie::where('title', 'Test Movie')->exists())->toBeTrue();
});

test('movie show page displays correctly', function () {
    $movie = Movie::factory()->create([
        'title' => 'Sample Movie',
        'slug' => 'sample-movie-123'
    ]);

    get("/movie/{$movie->slug}")
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('movies/show')
            ->where('movie.title', 'Sample Movie')
        );
});

test('movie validation works', function () {
    post('/movies', [])
        ->assertSessionHasErrors(['title', 'description']);
});

test('movie slug is generated automatically', function () {
    $movieData = [
        'title' => 'Amazing Movie Title',
        'description' => 'Great description with proper length to satisfy validation requirements.',
    ];

    $response = post('/movies', $movieData);
    $response->assertRedirect();
    
    $movie = Movie::where('title', 'Amazing Movie Title')->first();
    expect($movie)->not->toBeNull();
    expect($movie->slug)->toStartWith('amazing-movie-title-');
});