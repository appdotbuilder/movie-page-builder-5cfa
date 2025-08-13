<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMovieRequest;
use App\Models\Movie;
use Inertia\Inertia;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::latest()->paginate(12);
        
        return Inertia::render('movies/index', [
            'movies' => $movies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('movies/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMovieRequest $request)
    {
        $movie = Movie::create($request->validated());

        return redirect()->route('movies.show', $movie)
            ->with('success', 'Movie page created successfully! 🎬');
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        return Inertia::render('movies/show', [
            'movie' => $movie
        ]);
    }
}