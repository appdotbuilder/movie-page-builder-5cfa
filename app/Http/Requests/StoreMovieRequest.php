<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class StoreMovieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        if ($this->has('title') && !$this->has('slug')) {
            $this->merge([
                'slug' => Str::slug($this->title) . '-' . Str::random(6)
            ]);
        }

        if ($this->has('download_links_input') && !empty($this->download_links_input)) {
            $links = array_filter(array_map('trim', explode("\n", $this->download_links_input)));
            $this->merge([
                'download_links' => $links
            ]);
        } else {
            $this->merge([
                'download_links' => []
            ]);
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'poster_url' => 'nullable|url|max:2048',
            'download_links' => 'nullable|array',
            'download_links.*' => 'string|max:2048',
            'streaming_link' => 'nullable|url|max:2048',
            'trailer_link' => 'nullable|url|max:2048',
            'banner_300x250' => 'nullable|string',
            'banner_728x90' => 'nullable|string',
            'banner_320x50' => 'nullable|string',
            'banner_160x600' => 'nullable|string',
            'banner_300x600' => 'nullable|string',
            'pop_under_code' => 'nullable|string',
            'direct_link_code' => 'nullable|string',
            'slug' => 'required|string|unique:movies,slug',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required' => 'Movie title is required.',
            'description.required' => 'Movie description is required.',
            'poster_url.url' => 'Please provide a valid poster image URL.',
            'streaming_link.url' => 'Please provide a valid streaming URL.',
            'trailer_link.url' => 'Please provide a valid trailer URL.',
            'slug.unique' => 'This movie slug is already taken.',
        ];
    }
}