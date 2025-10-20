import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MainLayout from '@/layouts/main-layout';
import { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Calendar, DollarSign, Edit, Key } from 'lucide-react';

interface Domain {
    id: number;
    domain_name: string;
    registration_date: string;
    next_due_date: string;
    recurring_amount: string;
    nameserver_1: string | null;
    nameserver_2: string | null;
    nameserver_3: string | null;
    nameserver_4: string | null;
    epp_code: string | null;
    created_at: string;
    updated_at: string;
}

interface DomainsIndexProps extends SharedData {
    domains: Domain[];
}

export default function DomainsIndex() {
    const { domains } = usePage<DomainsIndexProps>().props;

    return (
        <MainLayout>
            <Head title="My Domains" />

            {/* Header Section */}
            <section className="pt-20 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                            My{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
                                Domains
                            </span>
                        </h1>
                        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"></div>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">View and manage all your registered domains</p>
                    </div>
                </div>
            </section>

            {/* Domains Grid */}
            <section className="pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {domains.length === 0 ? (
                        <Card className="mx-auto max-w-2xl">
                            <CardContent className="py-16 text-center">
                                <p className="text-lg text-slate-600 dark:text-slate-400">You don't have any domains yet.</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {domains.map((domain) => (
                                <Card
                                    key={domain.id}
                                    className="flex flex-col overflow-hidden border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800"
                                >
                                    <CardHeader>
                                        <CardTitle className="text-xl break-all">{domain.domain_name}</CardTitle>
                                        <CardDescription>Registered {new Date(domain.registration_date).toLocaleDateString()}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 space-y-4">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Calendar className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                                                <span className="text-slate-600 dark:text-slate-400">
                                                    Due: {new Date(domain.next_due_date).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <DollarSign className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                                                <span className="text-slate-600 dark:text-slate-400">${domain.recurring_amount}/year</span>
                                            </div>
                                            {domain.epp_code && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Key className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                                                    <span className="font-mono text-xs text-slate-600 dark:text-slate-400">{domain.epp_code}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-t pt-4 dark:border-slate-700">
                                            <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                                                Nameservers
                                            </p>
                                            <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                                                {domain.nameserver_1 && <div className="truncate">{domain.nameserver_1}</div>}
                                                {domain.nameserver_2 && <div className="truncate">{domain.nameserver_2}</div>}
                                                {domain.nameserver_3 && <div className="truncate">{domain.nameserver_3}</div>}
                                                {domain.nameserver_4 && <div className="truncate">{domain.nameserver_4}</div>}
                                            </div>
                                        </div>

                                        <Button
                                            asChild
                                            className="mt-4 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                        >
                                            <Link href={`/domains/${domain.id}/edit`}>
                                                <Edit className="mr-2 h-4 w-4" />
                                                Edit Nameservers
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
