import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            
            <main className="flex-1">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                            Domain Control Panel Proxy
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                            A minimal domain control panel proxy for NameHero domains. 
                            Control your domains here via a secure relay server.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Domain Management
                            </h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                Manage all your NameHero domains from a single, intuitive interface.
                            </p>
                        </div>

                        <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                                <svg className="h-6 w-6 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Secure Relay
                            </h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                All communications are routed through a secure relay server for enhanced protection.
                            </p>
                        </div>

                        <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/30">
                                <svg className="h-6 w-6 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Minimal & Fast
                            </h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                Lightweight design focused on speed and simplicity without unnecessary features.
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="rounded-lg border bg-gradient-to-br from-blue-50 to-cyan-50 p-8 dark:from-slate-900 dark:to-slate-800 dark:border-slate-700">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                Ready to manage your domains?
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
                                Get started by connecting your NameHero account and take control of your domains through our secure proxy.
                            </p>
                            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-900"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}
