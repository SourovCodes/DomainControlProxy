import { DomainCard } from '@/components/ui/domain-card';
import MainLayout from '@/layouts/main-layout';
import { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Globe } from 'lucide-react';

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

            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">My Domains</h1>
                </div>

                {/* Domains List */}
                {domains.length === 0 ? (
                    <div className="rounded-lg border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <Globe className="mx-auto mb-4 h-16 w-16 text-slate-300 dark:text-slate-600" />
                        <h3 className="mb-2 text-lg font-medium text-slate-900 dark:text-white">No domains found</h3>
                        <p className="text-slate-600 dark:text-slate-400">You don't have any domains yet.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {domains.map((domain) => (
                            <DomainCard key={domain.id} domain={domain} />
                        ))}
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
