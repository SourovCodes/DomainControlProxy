import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Mail, Facebook } from 'lucide-react';

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact" />
            
            <main className="flex-1">
                <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                            Get in Touch
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                            Have questions or need support? Feel free to reach out through any of the channels below.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="mt-16 grid gap-8 sm:grid-cols-2">
                        {/* Email Card */}
                        <div className="rounded-lg border bg-white p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                Email
                            </h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                Send us an email and we'll get back to you as soon as possible.
                            </p>
                            <div className="mt-6">
                                <a 
                                    href="mailto:sourovbuzz@gmail.com"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                >
                                    sourovbuzz@gmail.com
                                </a>
                            </div>
                            <div className="mt-4">
                                <Button asChild className="w-full">
                                    <a href="mailto:sourovbuzz@gmail.com">
                                        Send Email
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Facebook Card */}
                        <div className="rounded-lg border bg-white p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                <Facebook className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                Facebook
                            </h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                Connect with us on Facebook for updates and quick responses.
                            </p>
                            <div className="mt-6">
                                <a 
                                    href="https://www.facebook.com/itsourov/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                >
                                    facebook.com/itsourov
                                </a>
                            </div>
                            <div className="mt-4">
                                <Button asChild className="w-full">
                                    <a 
                                        href="https://www.facebook.com/itsourov/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit Facebook
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-16 rounded-lg border bg-slate-50 p-8 dark:bg-slate-800/50 dark:border-slate-700">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                            Response Time
                        </h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">
                            We typically respond to all inquiries within 24-48 hours during business days. 
                            For urgent matters, please mention "URGENT" in your subject line.
                        </p>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}
