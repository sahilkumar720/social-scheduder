import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export default function Navbar() {
    const { user } = { user: false };

    return (
        <nav className="sticky top-0 z-50 border-b border-[#efe1db] bg-white/85 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <Link to="/" onClick={() => scrollTo(0, 0)} className="flex items-center gap-2">
                    <div >
                    <img src="/logo.svg" className="w-9 h-9"/>
                   </div>
                    <span className="font-serif text-xl font-medium text-[#3d261f] lg:text-2xl">Socialflow</span>
                </Link>

                <div className="hidden items-center gap-8 text-sm text-[#5a3a34] md:flex">
                    <a href="#features" className="group relative inline-flex items-center py-1 transition hover:text-[#4a2d26]">
                        <span>Features</span>
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#4a2d26] transition-all duration-300 group-hover:w-full" />
                    </a>
                    <a href="#how-it-works" className="group relative inline-flex items-center py-1 transition hover:text-[#4a2d26]">
                        <span>How it works</span>
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#4a2d26] transition-all duration-300 group-hover:w-full" />
                    </a>
                    <a href="#pricing" className="group relative inline-flex items-center py-1 transition hover:text-[#4a2d26]">
                        <span>Pricing</span>
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#4a2d26] transition-all duration-300 group-hover:w-full" />
                    </a>
                </div>

                {user ? (
                    <Link to="/dashboard" className="flex items-center gap-1.5 rounded-full bg-[#4a2d26] px-4 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(74,45,38,0.18)] transition hover:bg-[#3a2420]">
                        Go to Dashboard <ArrowRightIcon className="size-3.5" />
                    </Link>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link to="/login" className="hidden text-sm text-[#5a3a34] transition hover:text-[#4a2d26] sm:block">
                            Sign In
                        </Link>
                        <Link to="/login" className="flex items-center gap-1.5 rounded-full bg-[#4a2d26] px-4 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(74,45,38,0.18)] transition hover:bg-[#3a2420]">
                            Get Started <ArrowRightIcon className="size-3.5" />
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
