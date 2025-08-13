import { Head, Link } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';

interface Movie {
    id: number;
    title: string;
    description: string;
    poster_url: string | null;
    slug: string;
    created_at: string;
}

interface Props {
    movies: {
        data: Movie[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
        meta: {
            current_page: number;
            last_page: number;
            total: number;
        };
    };
    [key: string]: unknown;
}

export default function MoviesIndex({ movies }: Props) {
    return (
        <>
            <Head title="🎬 Movie Gallery - Generated Pages" />
            <AppShell>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
                    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="mb-12 text-center">
                            <div className="mb-4 text-5xl">🎬📚</div>
                            <h1 className="mb-4 text-4xl font-bold">Movie Gallery</h1>
                            <p className="mx-auto max-w-2xl text-xl text-gray-300">
                                Browse through our collection of generated movie pages with integrated ad monetization
                            </p>
                            <div className="mt-8">
                                <Link
                                    href={route('home')}
                                    className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold transition-transform hover:scale-105"
                                >
                                    ➕ Create New Movie Page
                                </Link>
                            </div>
                        </div>

                        {/* Movies Grid */}
                        {movies.data.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {movies.data.map((movie) => (
                                    <Link
                                        key={movie.id}
                                        href={route('movies.show', movie.slug)}
                                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/50"
                                    >
                                        {/* Movie Poster */}
                                        <div className="aspect-[2/3] overflow-hidden">
                                            {movie.poster_url ? (
                                                <img
                                                    src={movie.poster_url}
                                                    alt={movie.title}
                                                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 text-6xl">
                                                    🎬
                                                </div>
                                            )}
                                        </div>

                                        {/* Movie Info Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <h3 className="mb-2 text-lg font-bold">{movie.title}</h3>
                                                <p className="line-clamp-2 text-sm text-gray-300">
                                                    {movie.description}
                                                </p>
                                                <div className="mt-3 text-xs text-purple-400">
                                                    Created {new Date(movie.created_at).toLocaleDateString()}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Movie Info Card */}
                                        <div className="p-4">
                                            <h3 className="mb-2 font-bold line-clamp-1">{movie.title}</h3>
                                            <p className="text-sm text-gray-400 line-clamp-2">
                                                {movie.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            // Empty State
                            <div className="text-center">
                                <div className="mb-6 text-6xl opacity-50">🎬</div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-300">No Movies Yet</h2>
                                <p className="mb-8 text-gray-400">
                                    Start creating your first monetized movie page to see it here!
                                </p>
                                <Link
                                    href={route('home')}
                                    className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold transition-transform hover:scale-105"
                                >
                                    🚀 Create Your First Movie Page
                                </Link>
                            </div>
                        )}

                        {/* Pagination */}
                        {movies.links.length > 3 && (
                            <div className="mt-12 flex justify-center">
                                <nav className="flex space-x-2">
                                    {movies.links.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.url || '#'}
                                            className={`rounded-lg px-4 py-2 text-sm transition-colors ${
                                                link.active
                                                    ? 'bg-purple-600 text-white'
                                                    : link.url
                                                    ? 'border border-white/20 text-white hover:bg-white/10'
                                                    : 'cursor-not-allowed text-gray-500'
                                            }`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </AppShell>
        </>
    );
}