import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MainLayout from '@/layouts/main-layout';
import { SharedData } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';

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

interface DomainEditProps extends SharedData {
    domain: Domain;
}

export default function DomainEdit() {
    const { domain } = usePage<DomainEditProps>().props;

    const { data, setData, put, processing, errors } = useForm({
        nameserver_1: domain.nameserver_1 || '',
        nameserver_2: domain.nameserver_2 || '',
        nameserver_3: domain.nameserver_3 || '',
        nameserver_4: domain.nameserver_4 || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/domains/${domain.id}`);
    };

    return (
        <MainLayout>
            <Head title={`Edit ${domain.domain_name}`} />

            {/* Header Section */}
            <section className="pt-20 pb-16">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Button asChild variant="outline" size="sm">
                            <Link href="/domains">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Domains
                            </Link>
                        </Button>
                    </div>

                    <div className="text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                            Edit{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
                                Domain
                            </span>
                        </h1>
                        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"></div>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">Update nameservers for {domain.domain_name}</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-16">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Domain Info Card */}
                    <Card className="mb-6 overflow-hidden border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
                        <CardHeader>
                            <CardTitle>Domain Information</CardTitle>
                            <CardDescription>Read-only domain details</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label className="text-slate-600 dark:text-slate-400">Domain Name</Label>
                                    <Input value={domain.domain_name} disabled className="bg-slate-50 dark:bg-slate-800" />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-slate-600 dark:text-slate-400">Registration Date</Label>
                                    <Input
                                        value={new Date(domain.registration_date).toLocaleDateString()}
                                        disabled
                                        className="bg-slate-50 dark:bg-slate-800"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-slate-600 dark:text-slate-400">Next Due Date</Label>
                                    <Input
                                        value={new Date(domain.next_due_date).toLocaleDateString()}
                                        disabled
                                        className="bg-slate-50 dark:bg-slate-800"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-slate-600 dark:text-slate-400">Recurring Amount</Label>
                                    <Input value={`$${domain.recurring_amount}`} disabled className="bg-slate-50 dark:bg-slate-800" />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-slate-600 dark:text-slate-400">EPP Code</Label>
                                    <Input value={domain.epp_code || 'N/A'} disabled className="bg-slate-50 font-mono dark:bg-slate-800" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Nameservers Edit Form */}
                    <Card className="overflow-hidden border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
                        <CardHeader>
                            <CardTitle>Nameservers</CardTitle>
                            <CardDescription>Update your domain's nameserver settings. Nameservers 1 and 2 are required.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="nameserver_1">
                                            Nameserver 1 <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="nameserver_1"
                                            value={data.nameserver_1}
                                            onChange={(e) => setData('nameserver_1', e.target.value)}
                                            placeholder="ns1.example.com"
                                            className={errors.nameserver_1 ? 'border-red-500' : ''}
                                        />
                                        {errors.nameserver_1 && <p className="text-sm text-red-600 dark:text-red-400">{errors.nameserver_1}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="nameserver_2">
                                            Nameserver 2 <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="nameserver_2"
                                            value={data.nameserver_2}
                                            onChange={(e) => setData('nameserver_2', e.target.value)}
                                            placeholder="ns2.example.com"
                                            className={errors.nameserver_2 ? 'border-red-500' : ''}
                                        />
                                        {errors.nameserver_2 && <p className="text-sm text-red-600 dark:text-red-400">{errors.nameserver_2}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="nameserver_3">Nameserver 3 (Optional)</Label>
                                        <Input
                                            id="nameserver_3"
                                            value={data.nameserver_3}
                                            onChange={(e) => setData('nameserver_3', e.target.value)}
                                            placeholder="ns3.example.com"
                                            className={errors.nameserver_3 ? 'border-red-500' : ''}
                                        />
                                        {errors.nameserver_3 && <p className="text-sm text-red-600 dark:text-red-400">{errors.nameserver_3}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="nameserver_4">Nameserver 4 (Optional)</Label>
                                        <Input
                                            id="nameserver_4"
                                            value={data.nameserver_4}
                                            onChange={(e) => setData('nameserver_4', e.target.value)}
                                            placeholder="ns4.example.com"
                                            className={errors.nameserver_4 ? 'border-red-500' : ''}
                                        />
                                        {errors.nameserver_4 && <p className="text-sm text-red-600 dark:text-red-400">{errors.nameserver_4}</p>}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                    >
                                        <Save className="mr-2 h-4 w-4" />
                                        {processing ? 'Saving...' : 'Save Changes'}
                                    </Button>
                                    <Button asChild type="button" variant="outline">
                                        <Link href="/domains">Cancel</Link>
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </MainLayout>
    );
}
