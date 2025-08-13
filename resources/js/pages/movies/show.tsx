import { Head, Link } from '@inertiajs/react';

interface Movie {
    id: number;
    title: string;
    description: string;
    poster_url: string | null;
    download_links: string[];
    streaming_link: string | null;
    trailer_link: string | null;
    banner_300x250: string | null;
    banner_728x90: string | null;
    banner_320x50: string | null;
    banner_160x600: string | null;
    banner_300x600: string | null;
    pop_under_code: string | null;
    direct_link_code: string | null;
    slug: string;
    created_at: string;
}

interface Props {
    movie: Movie;
    [key: string]: unknown;
}

export default function MovieShow({ movie }: Props) {
    const AdUnit = ({ code, className = '' }: { code: string | null; className?: string }) => {
        if (!code) return null;
        return (
            <div 
                className={`ad-unit ${className}`} 
                dangerouslySetInnerHTML={{ __html: code }}
            />
        );
    };

    return (
        <>
            <Head title={`${movie.title} - Watch & Download`}>
                <meta name="description" content={movie.description.substring(0, 160)} />
            </Head>
            
            {/* Pop-under and Direct Link Codes */}
            <AdUnit code={movie.pop_under_code} />
            <AdUnit code={movie.direct_link_code} />

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
                {/* Header with navigation */}
                <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center justify-between">
                            <Link href={route('home')} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300">
                                <span>🎬</span>
                                <span className="font-semibold">MovieBuilder</span>
                            </Link>
                            <div className="flex items-center gap-4">
                                <Link
                                    href={route('movies.index')}
                                    className="rounded-lg border border-white/20 px-4 py-2 text-sm transition-colors hover:bg-white/10"
                                >
                                    📚 Browse Movies
                                </Link>
                                <Link
                                    href={route('home')}
                                    className="rounded-lg bg-purple-600 px-4 py-2 text-sm transition-colors hover:bg-purple-700"
                                >
                                    ➕ Create Page
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>

                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    {/* Top Banner Ad - 728x90 (Desktop) / 320x50 (Mobile) */}
                    <div className="mb-8 text-center">
                        <div className="hidden sm:block">
                            <AdUnit code={movie.banner_728x90} className="mx-auto" />
                        </div>
                        <div className="sm:hidden">
                            <AdUnit code={movie.banner_320x50} className="mx-auto" />
                        </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        {/* Left Sidebar Ad - 160x600 (Desktop only) */}
                        <div className="hidden lg:block lg:col-span-2">
                            <div className="sticky top-8">
                                <AdUnit code={movie.banner_160x600} />
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <div className="mb-8">
                                <div className="grid gap-8 md:grid-cols-3">
                                    {/* Movie Poster */}
                                    <div className="md:col-span-1">
                                        {movie.poster_url ? (
                                            <img
                                                src={movie.poster_url}
                                                alt={movie.title}
                                                className="w-full rounded-2xl border border-white/10 shadow-2xl"
                                            />
                                        ) : (
                                            <div className="flex aspect-[2/3] w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 text-6xl">
                                                🎬
                                            </div>
                                        )}
                                    </div>

                                    {/* Movie Details */}
                                    <div className="md:col-span-2">
                                        <h1 className="mb-4 text-4xl font-bold">{movie.title}</h1>
                                        
                                        {/* Action Buttons */}
                                        <div className="mb-6 flex flex-wrap gap-3">
                                            {movie.streaming_link && (
                                                <a
                                                    href={movie.streaming_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-semibold transition-transform hover:scale-105"
                                                >
                                                    ▶️ Watch Online
                                                </a>
                                            )}
                                            {movie.trailer_link && (
                                                <a
                                                    href={movie.trailer_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition-colors hover:bg-white/10"
                                                >
                                                    🎥 Trailer
                                                </a>
                                            )}
                                        </div>

                                        {/* Movie Description */}
                                        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                                            <h2 className="mb-3 text-xl font-semibold">📝 Synopsis</h2>
                                            <p className="leading-relaxed text-gray-300">
                                                {movie.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Ad - 300x250 */}
                            <div className="mb-8 text-center">
                                <AdUnit code={movie.banner_300x250} className="mx-auto" />
                            </div>

                            {/* Download Links */}
                            {movie.download_links && movie.download_links.length > 0 && (
                                <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                                    <h2 className="mb-4 text-2xl font-semibold">📥 Download Links</h2>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {movie.download_links.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between rounded-xl border border-white/20 bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 transition-all hover:scale-105 hover:border-green-500/50"
                                            >
                                                <span className="flex items-center">
                                                    <span className="mr-2 text-xl">⬇️</span>
                                                    <span className="font-semibold">
                                                        Download Option {index + 1}
                                                    </span>
                                                </span>
                                                <span className="text-sm text-gray-400">
                                                    Click to download
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Bottom Ad - 728x90 (Desktop) / 320x50 (Mobile) */}
                            <div className="mb-8 text-center">
                                <div className="hidden sm:block">
                                    <AdUnit code={movie.banner_728x90} className="mx-auto" />
                                </div>
                                <div className="sm:hidden">
                                    <AdUnit code={movie.banner_320x50} className="mx-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar Ad - 300x600 (Desktop only) */}
                        <div className="hidden lg:block lg:col-span-2">
                            <div className="sticky top-8">
                                <AdUnit code={movie.banner_300x600} />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Bottom Ad - 320x50 */}
                    <div className="mt-8 text-center lg:hidden">
                        <AdUnit code={movie.banner_320x50} className="mx-auto" />
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-16 border-t border-white/10 py-8 text-center">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-6 text-center">
                            <AdUnit code={movie.banner_300x250} className="mx-auto" />
                        </div>
                        <p className="text-sm text-gray-400">
                            Generated by{' '}
                            <Link href={route('home')} className="text-purple-400 hover:underline">
                                MovieBuilder
                            </Link>{' '}
                            - Create your own monetized movie pages
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}