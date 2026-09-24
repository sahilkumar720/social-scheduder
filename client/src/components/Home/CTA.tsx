import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <div className="relative overflow-hidden rounded-[32px] border border-[#eaded8] bg-[linear-gradient(145deg,#f8f3f1_0%,#f2e8e4_100%)] p-14 text-center sm:p-20">
                    <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(74,45,38,0.08)_0%,transparent_70%)]" />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(74,45,38,0.06)_0%,transparent_70%)]" />

                    <div className="relative">
                        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#eaded8] bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#4a2d26]">
                            Ready to grow?
                        </div>
                        <h2 className="font-serif text-4xl font-medium leading-tight text-[#2d201d] sm:text-5xl md:text-6xl">
                            Automate your social
                            <br />
                            <span className="text-[#4a2d26] italic">media today</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-lg text-lg text-[#5a3a34]">
                            Join thousands of creators and marketers who trust Socialflow to grow their audience on autopilot.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link to="/login" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4a2d26] px-10 py-4 text-[15px] font-semibold text-white shadow-[0_18px_32px_rgba(74,45,38,0.18)] transition hover:bg-[#3d261f] sm:w-auto">
                                Get Started Free <ArrowRightIcon className="size-4" />
                            </Link>
                            <a href="#pricing" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#e9dbd6] bg-white px-10 py-4 text-[15px] font-medium text-[#4a2d26] transition hover:border-[#d9c5bf] hover:bg-[#f7f2f0] sm:w-auto">
                                View Pricing
                            </a>
                        </div>

                        <p className="mt-6 text-xs text-[#8c6e66]">No credit card required · Cancel anytime</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
