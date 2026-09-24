import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";

const steps = [
    { step: "01", title: "Connect Your Accounts", description: "Link your social profiles in seconds. We support X, LinkedIn, Facebook, and Instagram." },
    { step: "02", title: "Create or Generate Content", description: "Write your own post or let our AI create a caption, hook, and image prompt for you." },
    { step: "03", title: "Schedule & Publish", description: "Pick the perfect time, pick your channels, and let Socialflow handle the rest." },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-white py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#e8dad5] bg-[#f9f3f1] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#4a2d26]">
                        <CheckCircleIcon className="size-3" />
                        Simple setup
                    </div>
                    <h2 className="font-serif text-4xl font-medium leading-tight text-[#2d201d] sm:text-5xl">
                        Up and running in <span className="text-[#4a2d26] italic">minutes</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-lg text-[#5a3a34] leading-relaxed">
                        No complicated onboarding, no steep learning curve. Just connect, create, and grow.
                    </p>
                </div>

                <div className="space-y-6">
                    {steps.map((s, i) => (
                        <div key={s.step} className="flex items-start gap-6 rounded-2xl border border-[#f0e3df] bg-[#f9f5f2] p-4 sm:p-5">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[#e9dbd6] bg-[#f6efed]">
                                <span className="text-sm font-medium text-[#4a2d26]">{s.step}</span>
                            </div>
                            <div className="pt-1">
                                <h3 className="mb-1 text-[#2d201d]">{s.title}</h3>
                                <p className="text-sm leading-relaxed text-[#5a3a34]">{s.description}</p>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="ml-auto hidden shrink-0 self-center sm:block">
                                    <ArrowRightIcon className="size-4 text-[#7c5349]" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
