import { Link } from "react-router-dom";
import { ArrowRightIcon, DotIcon } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pb-12 pt-16 sm:pt-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,45,38,0.08),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(74,45,38,0.06),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(74,45,38,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(74,45,38,0.02)_1px,transparent_1px)] bg-[length:56px_56px]" />

            <div className="relative mx-auto max-w-6xl px-5 pt-8 sm:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="text-left">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e7d8d2] bg-[#f8f3f1] px-3.5 py-1.5 text-sm text-[#4a2d26] shadow-sm">
                            <span className="size-2 rounded-full bg-[#4a2d26]" />
                            AI-powered social media automation
                        </div>

                        <h1 className="max-w-xl font-serif text-5xl leading-[0.95] text-[#2e201d] sm:text-6xl md:text-7xl xl:text-[5.3rem]">
                            Plan smarter.
                            <br />
                            <span className="text-[#4a2d26] italic">Post louder.</span>
                        </h1>

                        <p className="mt-7 max-w-xl text-base text-[#5a3a34] sm:text-lg">
                            Socialflow helps you create, schedule, and publish high-performing content across every channel — without losing time or momentum.
                        </p>

                        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                            <Link to="/login" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#56372f] px-8 py-3.5  text-[15px] font-medium text-white shadow-[0_18px_35px_rgba(74,45,38,0.22)] transition hover:bg-[#3d261f]">
                                Start for free <ArrowRightIcon className="size-4" />
                            </Link>
                            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e9dbd6] bg-white px-8 py-3.5 text-[15px] font-medium text-[#4a2d26] backdrop-blur transition hover:border-[#d9c5bf] hover:bg-light-back">
                                See how it works
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#6e4d46]">
                            <div>
                                <span className="block text-2xl font-semibold text-[#2e201d]">8.4x</span>
                                <span>faster planning</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-semibold text-[#2e201d]">48h</span>
                                <span>ready to publish</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-semibold text-[#2e201d]">4.9/5</span>
                                <span>creator rating</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-[#f4e7e2] blur-3xl" />
                        <div className="absolute -right-4 bottom-6 h-24 w-24 rounded-full bg-[#f0dfd9] blur-3xl" />

                        <div className="relative overflow-hidden rounded-[30px] border border-[#efe2de] bg-white shadow-[0_30px_80px_rgba(74,45,38,0.08)]">
                            <div className="flex items-center gap-2 border-b border-[#efe2de] bg-[#f9f4f2] px-4 py-3">
                                <div className="h-3 w-3 rounded-full bg-[#4a2d26]" />
                                <div className="h-3 w-3 rounded-full bg-[#85716d]" />
                                <div className="h-3 w-3 rounded-full bg-[#bda9a4]" />
                                <div className="mx-4 h-5 max-w-xs flex-1 rounded-md bg-white/80" />
                            </div>

                            <div className="bg-[#fffdfd] p-6">
                                <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {[
                                        { val: "12", label: "Scheduled" },
                                        { val: "48", label: "Published" },
                                        { val: "4", label: "Accounts" },
                                        { val: "3", label: "AI Rules" },
                                    ].map((s) => (
                                        <div key={s.label} className="rounded-2xl border border-[#f0e3df] bg-white p-4 shadow-sm">
                                            <div className="text-2xl font-bold text-[#2e201d] tabular-nums">{s.val}</div>
                                            <div className="mt-1 text-xs text-[#8c6e66]">{s.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="rounded-2xl border border-[#f0e3df] bg-white p-4 shadow-sm">
                                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c6e66]">Recent Activity</div>
                                    {[
                                        { text: "Post published to LinkedIn & X", time: "2m ago" },
                                        { text: "AI replied to 3 comments", time: "15m ago" },
                                        { text: "New post scheduled for tomorrow 9am", time: "1h ago" },
                                    ].map((item) => (
                                        <div key={item.text} className="flex items-center gap-3 py-2">
                                            <DotIcon className="size-5 text-[#4a2d26]" />
                                            <span className="flex-1 text-sm text-[#5a3a34]">{item.text}</span>
                                            <span className="shrink-0 text-xs text-[#b7a29d]">{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
