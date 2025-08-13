<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->words(random_int(2, 4), true);
        
        return [
            'title' => $title,
            'description' => fake()->paragraphs(3, true),
            'poster_url' => 'https://picsum.photos/400/600?random=' . random_int(1, 1000),
            'download_links' => [
                'https://example.com/download/1080p',
                'https://example.com/download/720p',
                'https://example.com/download/480p',
            ],
            'streaming_link' => 'https://example.com/stream/' . Str::random(10),
            'trailer_link' => 'https://www.youtube.com/watch?v=' . Str::random(11),
            'banner_300x250' => '<div>Sample 300x250 Banner Code</div>',
            'banner_728x90' => '<div>Sample 728x90 Banner Code</div>',
            'banner_320x50' => '<div>Sample 320x50 Banner Code</div>',
            'banner_160x600' => '<div>Sample 160x600 Banner Code</div>',
            'banner_300x600' => '<div>Sample 300x600 Banner Code</div>',
            'pop_under_code' => '<script>/* Pop-under code */</script>',
            'direct_link_code' => '<script>/* Direct link code */</script>',
            'slug' => Str::slug($title) . '-' . Str::random(6),
        ];
    }
}