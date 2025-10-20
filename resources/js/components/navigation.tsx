import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export default function Navigation() {
    const { name } = usePage<SharedData>().props;

    return (
        <nav className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
                            {name}
                        </Link>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <Link 
                            href="/" 
                            className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/contact" 
                            className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
