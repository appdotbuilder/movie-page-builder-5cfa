import { Head, Link, usePage } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

interface MovieFormData {
    title: string;
    description: string;
    poster_url: string;
    download_links_input: string;
    streaming_link: string;
    trailer_link: string;
    banner_300x250: string;
    banner_728x90: string;
    banner_320x50: string;
    banner_160x600: string;
    banner_300x600: string;
    pop_under_code: string;
    direct_link_code: string;
    [key: string]: string;
}

export default function Welcome() {
    const { auth } = usePage<{ auth: { user?: unknown }; [key: string]: unknown }>().props;
    const [showBuilder, setShowBuilder] = useState(false);

    const { data, setData, post, processing, errors } = useForm<MovieFormData>({
        title: '',
        description: '',
        poster_url: '',
        download_links_input: '',
        streaming_link: '',
        trailer_link: '',
        banner_300x250: '',
        banner_728x90: '',
        banner_320x50: '',
        banner_160x600: '',
        banner_300x600: '',
        pop_under_code: '',
        direct_link_code: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('movies.store'), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="🎬 Movie Page Builder - Create Monetized Movie Pages">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
                {/* Header */}
                <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="text-2xl">🎬</div>
                                <h1 className="text-xl font-bold">MovieBuilder</h1>
                            </div>
                            <div className="flex items-center gap-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-lg border border-white/20 px-4 py-2 text-sm transition-colors hover:bg-white/10"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/10"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-lg bg-purple-600 px-4 py-2 text-sm transition-colors hover:bg-purple-700"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </div>
                </header>

                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    {!showBuilder ? (
                        // Landing Section
                        <div className="text-center">
                            <div className="mb-8">
                                <div className="mb-4 text-6xl">🎬✨</div>
                                <h1 className="mb-4 text-5xl font-bold">
                                    Movie Page Builder
                                </h1>
                                <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300">
                                    Create stunning, monetized movie detail pages in minutes. Build responsive pages with integrated Adstera ad units that look professional and maximize your revenue.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="mb-12 grid gap-6 md:grid-cols-3">
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                                    <div className="mb-3 text-3xl">📱</div>
                                    <h3 className="mb-2 text-lg font-semibold">Fully Responsive</h3>
                                    <p className="text-sm text-gray-400">
                                        Pages look perfect on desktop, tablet, and mobile devices
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                                    <div className="mb-3 text-3xl">💰</div>
                                    <h3 className="mb-2 text-lg font-semibold">Ad Integration</h3>
                                    <p className="text-sm text-gray-400">
                                        Strategic Adstera ad placement for maximum revenue
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                                    <div className="mb-3 text-3xl">⚡</div>
                                    <h3 className="mb-2 text-lg font-semibold">Quick Setup</h3>
                                    <p className="text-sm text-gray-400">
                                        Generate professional pages in under 5 minutes
                                    </p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                                <button
                                    onClick={() => setShowBuilder(true)}
                                    className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold transition-transform hover:scale-105"
                                >
                                    🚀 Start Building Now
                                </button>
                                <Link
                                    href={route('movies.index')}
                                    className="rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold transition-colors hover:bg-white/10"
                                >
                                    📚 View Examples
                                </Link>
                            </div>
                        </div>
                    ) : (
                        // Movie Builder Form
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-8 text-center">
                                <button
                                    onClick={() => setShowBuilder(false)}
                                    className="mb-4 text-purple-400 hover:text-purple-300"
                                >
                                    ← Back to Home
                                </button>
                                <h2 className="mb-2 text-3xl font-bold">🎬 Create Your Movie Page</h2>
                                <p className="text-gray-300">Fill in the details below to generate your monetized movie page</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Basic Movie Info */}
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                                    <h3 className="mb-4 text-xl font-semibold">📝 Movie Information</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Movie Title *</label>
                                            <input
                                                type="text"
                                                value={data.title}
                                                onChange={(e) => setData('title', e.target.value)}
                                                className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                placeholder="Enter movie title..."
                                                required
                                            />
                                            {errors.title && <p className="mt-1 text-sm text-red-400">{errors.title}</p>}
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Description *</label>
                                            <textarea
                                                value={data.description}
                                                onChange={(e) => setData('description', e.target.value)}
                                                rows={4}
                                                className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                placeholder="Enter movie description..."
                                                required
                                            />
                                            {errors.description && <p className="mt-1 text-sm text-red-400">{errors.description}</p>}
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Poster Image URL</label>
                                            <input
                                                type="url"
                                                value={data.poster_url}
                                                onChange={(e) => setData('poster_url', e.target.value)}
                                                className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                placeholder="https://example.com/poster.jpg"
                                            />
                                            {errors.poster_url && <p className="mt-1 text-sm text-red-400">{errors.poster_url}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                                    <h3 className="mb-4 text-xl font-semibold">🔗 Movie Links</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Download Links (one per line)</label>
                                            <textarea
                                                value={data.download_links_input}
                                                onChange={(e) => setData('download_links_input', e.target.value)}
                                                rows={4}
                                                className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                placeholder="https://example.com/download1&#10;https://example.com/download2&#10;https://example.com/download3"
                                            />
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">Streaming Link</label>
                                                <input
                                                    type="url"
                                                    value={data.streaming_link}
                                                    onChange={(e) => setData('streaming_link', e.target.value)}
                                                    className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                    placeholder="https://streaming-site.com/movie"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">Trailer Link</label>
                                                <input
                                                    type="url"
                                                    value={data.trailer_link}
                                                    onChange={(e) => setData('trailer_link', e.target.value)}
                                                    className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                    placeholder="https://youtube.com/watch?v=..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Adstera Ad Codes */}
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                                    <h3 className="mb-4 text-xl font-semibold">💰 Adstera Ad Units</h3>
                                    <div className="space-y-4">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">Banner 300x250</label>
                                                <textarea
                                                    value={data.banner_300x250}
                                                    onChange={(e) => setData('banner_300x250', e.target.value)}
                                                    rows={3}
                                                    className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                    placeholder="<script>/* Your 300x250 banner code */</script>"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">Banner 728x90</label>
                                                <textarea
                                                    value={data.banner_728x90}
                                                    onChange={(e) => setData('banner_728x90', e.target.value)}
                                                    rows={3}
                                                    className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                    placeholder="<script>/* Your 728x90 banner code */</script>"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">Banner 320x50</label>
                                                <textarea
                                                    value={data.banner_320x50}
                                                    onChange={(e) => setData('banner_320x50', e.target.value)}
                                                    rows={3}
                                                    className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                    placeholder="<script>/* Your 320x50 banner code */</script>"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">Banner 160x600</label>
                                                <textarea
                                                    value={data.banner_160x600}
                                                    onChange={(e) => setData('banner_160x600', e.target.value)}
                                                    rows={3}
                                                    className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                    placeholder="<script>/* Your 160x600 banner code */</script>"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">Banner 300x600</label>
                                                <textarea
                                                    value={data.banner_300x600}
                                                    onChange={(e) => setData('banner_300x600', e.target.value)}
                                                    rows={3}
                                                    className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                    placeholder="<script>/* Your 300x600 banner code */</script>"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">Pop-under Code</label>
                                                <textarea
                                                    value={data.pop_under_code}
                                                    onChange={(e) => setData('pop_under_code', e.target.value)}
                                                    rows={3}
                                                    className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                    placeholder="<script>/* Your pop-under code */</script>"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Direct Link Code</label>
                                            <textarea
                                                value={data.direct_link_code}
                                                onChange={(e) => setData('direct_link_code', e.target.value)}
                                                rows={3}
                                                className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                                placeholder="<script>/* Your direct link code */</script>"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                                    >
                                        {processing ? '⏳ Creating Page...' : '🚀 Generate Movie Page'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <footer className="mt-16 border-t border-white/10 py-8 text-center text-sm text-gray-400">
                    Built with ❤️ by{' '}
                    <a href="https://app.build" target="_blank" className="text-purple-400 hover:underline">
                        app.build
                    </a>
                </footer>
            </div>
        </>
    );
}