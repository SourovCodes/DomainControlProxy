export default function Footer() {
    return (
        <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-8">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            © {new Date().getFullYear()} DomainControlProxy. All rights reserved.
                        </p>
                        
                        <div className="flex gap-6">
                            <a 
                                href="#" 
                                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                            >
                                Privacy Policy
                            </a>
                            <a 
                                href="#" 
                                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
