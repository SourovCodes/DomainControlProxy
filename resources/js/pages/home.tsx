import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Globe, Shield, Zap } from 'lucide-react';

const features = [
    {
        title: 'Domain Management',
        description: 'Manage all your NameHero domains from a single, intuitive interface with full control over nameservers.',
        icon: Globe,
    },
    {
        title: 'Secure Relay',
        description: 'All communications are routed through a secure relay server for enhanced protection and privacy.',
        icon: Shield,
    },
    {
        title: 'Quick Updates',
        description: 'Update nameserver settings instantly with our streamlined interface and real-time synchronization.',
        icon: Zap,
    },
];

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />

            {/* Hero section */}
            <section className="relative overflow-hidden pt-20 pb-40 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                        <div className="max-w-2xl">
                            <Badge className="mb-5 bg-blue-100 px-3.5 py-1.5 text-sm text-blue-800 transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800">
                                Domain Control Proxy
                            </Badge>

                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
                                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
                                    Manage Your Domains
                                </span>{' '}
                                with Ease
                            </h1>

                            <p className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-300">
                                A minimal domain control panel proxy for NameHero domains. Control your domains securely through a relay server with
                                an intuitive interface.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="min-w-[200px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 font-medium text-white shadow-md transition-all hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600"
                                >
                                    <Link href="/login">
                                        <Globe className="mr-2 h-4 w-4" />
                                        Get Started
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="mt-10 hidden w-full max-w-md md:mt-0 md:block">
                            <div className="relative h-[320px] w-full">
                                <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-900/20 dark:to-cyan-900/20" />

                                {/* Domain Card Visualization */}
                                <div className="relative mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-800">
                                    <div className="absolute -top-8 -right-8 md:-top-10 md:-right-10">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg md:h-20 md:w-20">
                                            <Globe className="h-8 w-8 text-white md:h-10 md:w-10" />
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-6">
                                        <div className="h-6 w-3/4 rounded-full bg-slate-100 dark:bg-slate-700"></div>
                                        <div className="h-4 w-5/6 rounded-full bg-slate-100 dark:bg-slate-700"></div>
                                        <div className="h-4 w-4/6 rounded-full bg-slate-100 dark:bg-slate-700"></div>

                                        <div className="grid grid-cols-2 gap-2 py-2">
                                            <div className="h-8 w-full rounded-lg bg-blue-100 dark:bg-blue-900/50"></div>
                                            <div className="h-8 w-full rounded-lg bg-green-100 dark:bg-green-900/50"></div>
                                        </div>

                                        <div className="space-y-3 pt-2">
                                            <div className="h-10 w-full rounded-lg bg-slate-100 dark:bg-slate-700"></div>
                                            <div className="h-10 w-full rounded-lg bg-slate-100 dark:bg-slate-700"></div>
                                        </div>

                                        <div className="mt-4 h-10 w-full rounded-lg bg-blue-500 dark:bg-blue-700"></div>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute bottom-0 -left-4 h-28 w-28 rounded-lg border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                                    <div className="flex h-full flex-col justify-between">
                                        <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                                            <Shield className="h-3 w-3 text-blue-700 dark:text-blue-400" />
                                        </div>
                                        <div className="h-3 w-2/3 rounded-full bg-slate-100 dark:bg-slate-700"></div>
                                        <div className="h-3 w-5/6 rounded-full bg-slate-100 dark:bg-slate-700"></div>
                                        <div className="h-3 w-3/4 rounded-full bg-blue-100 dark:bg-blue-900/50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section */}
            <section className="bg-slate-50 py-16 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">Everything You Need</h2>
                        <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"></div>
                        <p className="mx-auto max-w-xl text-lg text-slate-600 dark:text-slate-300">
                            Powerful domain management features at your fingertips
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
