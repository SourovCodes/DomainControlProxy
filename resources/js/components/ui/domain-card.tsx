import { Link } from '@inertiajs/react';
import { Calendar, ArrowRight } from 'lucide-react';

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

interface DomainCardProps {
    domain: Domain;
}

export function DomainCard({ domain }: DomainCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    const hasNameservers = domain.nameserver_1 || domain.nameserver_2 || domain.nameserver_3 || domain.nameserver_4;

    return (
        <Link href={`/domains/${domain.id}/edit`} prefetch className="block group">
            <div className="relative overflow-hidden border border-slate-200 bg-white hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md h-full hover:-translate-y-0.5 py-4 rounded-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-600">
                <div className="px-4 py-0 relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors break-all flex-1 dark:text-white dark:group-hover:text-blue-400">
                            {domain.domain_name}
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 rounded-md bg-purple-100 text-purple-800 px-2 py-1 text-xs dark:bg-purple-900/30 dark:text-purple-300">
                            <Calendar className="h-3 w-3" />
                            Due: {formatDate(domain.next_due_date)}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-blue-100 text-blue-800 px-2 py-1 text-xs dark:bg-blue-900/30 dark:text-blue-300">
                            ${domain.recurring_amount}/year
                        </span>
                        {hasNameservers && (
                            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 text-emerald-800 px-2 py-1 text-xs dark:bg-emerald-900/30 dark:text-emerald-300">
                                Nameservers Configured
                            </span>
                        )}
                    </div>

                    <div className="mt-auto text-xs sm:text-sm text-slate-600 mb-3 dark:text-slate-400">
                        <span>Registered {formatDate(domain.registration_date)}</span>
                    </div>

                    <div className="absolute bottom-4 right-4 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity dark:bg-blue-900/50">
                        <ArrowRight className="h-3 w-3 text-blue-700 dark:text-blue-400" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
