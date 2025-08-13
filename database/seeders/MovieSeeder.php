<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Movie::factory(12)->create();
        
        // Create a specific example movie
        Movie::create([
            'title' => 'The Matrix Reloaded',
            'description' => 'Neo and the rebel leaders estimate that they have 72 hours until Zion falls under siege to the Machine Army. During this, Neo must decide how he can save Trinity from a dark fate in his dreams.',
            'poster_url' => 'https://picsum.photos/400/600?random=matrix',
            'download_links' => [
                'https://example.com/matrix-reloaded-4k.mkv',
                'https://example.com/matrix-reloaded-1080p.mp4',
                'https://example.com/matrix-reloaded-720p.mp4',
                'https://example.com/matrix-reloaded-480p.mp4',
            ],
            'streaming_link' => 'https://example.com/stream/matrix-reloaded',
            'trailer_link' => 'https://www.youtube.com/watch?v=kYzz0FSgpSU',
            'banner_300x250' => '<div style="width:300px;height:250px;background:linear-gradient(45deg,#ff6b6b,#4ecdc4);display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">300x250 Adstera Banner</div>',
            'banner_728x90' => '<div style="width:728px;height:90px;background:linear-gradient(45deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">728x90 Adstera Banner</div>',
            'banner_320x50' => '<div style="width:320px;height:50px;background:linear-gradient(45deg,#f093fb,#f5576c);display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">320x50 Adstera Banner</div>',
            'banner_160x600' => '<div style="width:160px;height:600px;background:linear-gradient(45deg,#4facfe,#00f2fe);display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;writing-mode:vertical-rl;">160x600 Adstera Banner</div>',
            'banner_300x600' => '<div style="width:300px;height:600px;background:linear-gradient(45deg,#43e97b,#38f9d7);display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;writing-mode:vertical-rl;">300x600 Adstera Banner</div>',
            'pop_under_code' => '<!-- Adstera Pop-under Code Example -->',
            'direct_link_code' => '<!-- Adstera Direct Link Code Example -->',
            'slug' => 'the-matrix-reloaded-demo',
        ]);
    }
}