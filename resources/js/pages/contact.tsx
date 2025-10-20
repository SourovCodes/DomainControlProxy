import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Facebook, Mail } from 'lucide-react';

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact" />

            {/* Header Section */}
            <section className="pt-20 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                            Get in{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
                                Touch
                            </span>
                        </h1>
                        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"></div>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                            Have questions or need support? Feel free to reach out through any of the channels below.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                        {/* Email Card */}
                        <Card className="overflow-hidden border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
                            <CardContent className="p-8">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
                                    <Mail className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Email</h3>
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                    Send us an email and we'll get back to you as soon as possible.
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="mailto:sourovbuzz@gmail.com"
                                        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        sourovbuzz@gmail.com
                                    </a>
                                </div>
                                <div className="mt-4">
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                    >
                                        <a href="mailto:sourovbuzz@gmail.com">Send Email</a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Facebook Card */}
                        <Card className="overflow-hidden border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
                            <CardContent className="p-8">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
                                    <Facebook className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Facebook</h3>
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                    Connect with us on Facebook for updates and quick responses.
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="https://www.facebook.com/itsourov/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        facebook.com/itsourov
                                    </a>
                                </div>
                                <div className="mt-4">
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                    >
                                        <a href="https://www.facebook.com/itsourov/" target="_blank" rel="noopener noreferrer">
                                            Visit Facebook
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="bg-slate-50 py-16 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="mx-auto max-w-4xl overflow-hidden border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Response Time</h2>
                            <p className="mt-4 text-slate-600 dark:text-slate-400">
                                We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please mention
                                "URGENT" in your subject line.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </MainLayout>
    );
}
