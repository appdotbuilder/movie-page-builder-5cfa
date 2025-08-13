<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Movie
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string|null $poster_url
 * @property array $download_links
 * @property string|null $streaming_link
 * @property string|null $trailer_link
 * @property string|null $banner_300x250
 * @property string|null $banner_728x90
 * @property string|null $banner_320x50
 * @property string|null $banner_160x600
 * @property string|null $banner_300x600
 * @property string|null $pop_under_code
 * @property string|null $direct_link_code
 * @property string $slug
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Movie newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Movie newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Movie query()
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereBanner160x600($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereBanner300x250($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereBanner300x600($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereBanner320x50($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereBanner728x90($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereDirectLinkCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereDownloadLinks($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie wherePopUnderCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie wherePosterUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereStreamingLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereTrailerLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereUpdatedAt($value)
 * @method static \Database\Factories\MovieFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Movie extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'poster_url',
        'download_links',
        'streaming_link',
        'trailer_link',
        'banner_300x250',
        'banner_728x90',
        'banner_320x50',
        'banner_160x600',
        'banner_300x600',
        'pop_under_code',
        'direct_link_code',
        'slug',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'download_links' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }
}