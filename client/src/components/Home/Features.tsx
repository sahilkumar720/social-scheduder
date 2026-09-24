import { CalendarDaysIcon, Wand2Icon, Share2Icon, ZapIcon, BarChart3Icon, HashIcon } from "lucide-react";

const features = [
    {
        icon: CalendarDaysIcon,
        title: "Smart Scheduling",
        description: "Queue posts across all platforms with a single click. Set it once and let us handle the rest.",
        color: "bg-[#f3ecea] text-[#4a2d26]",
    },
    {
        icon: Wand2Icon,
        title: "AI Content Generator",
        description: "Generate on-brand captions and visuals with built-in AI so your growth never stalls.",
        color: "bg-[#f7f1ee] text-[#4a2d26]",
    },
    {
        icon: BarChart3Icon,
        title: "Activity Dashboard",
        description: "Track every scheduled post, published campaign, and engagement insight in one space.",
        color: "bg-[#f3ecea] text-[#4a2d26]",
    },
    {
        icon: Share2Icon,
        title: "Multi-Platform",
        description: "Connect X, LinkedIn, Facebook, and Instagram. Post everywhere from one unified workspace.",
        color: "bg-[#f7f1ee] text-[#4a2d26]",
    },
    {
        icon: ZapIcon,
        title: "Instant Publishing",
        description: "Launch content instantly or schedule for peak engagement with timezone-aware timing.",
        color: "bg-[#f3ecea] text-[#4a2d26]",
    },
    {
        icon: HashIcon,
        title: "Hashtag Suggestions",
        description: "Get AI-powered tags that put your content in front of the right audience faster.",
        color: "bg-[#f7f1ee] text-[#4a2d26]",
    },
];

export default function Features() {
    return (
        <section id="features" className="bg-[#f9f5f2] py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#e8dad5] bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#4a2d26]">
                        <ZapIcon className="size-3" />
                        Everything you need
                    </div>
                    <h2 className="font-serif text-4xl font-medium leading-tight text-[#2d201d] sm:text-5xl">
                        Automate your entire
                        <br />
                        <span className="text-[#4a2d26] italic">social media workflow</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-[#5a3a34] leading-relaxed">
                        From content creation to scheduling — Socialflow handles it all so you can focus on growth.
                    </p>
                </div>

                <div className="mb-8 rounded-[28px] border border-[#f0e3df] bg-[#fffdfd] p-6 shadow-[0_18px_40px_rgba(74,45,38,0.04)] lg:p-8">
                    <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e7d8d2] bg-[#f9f3f1] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[#4a2d26]">
                                Built for brand consistency
                            </div>
                            <h3 className="font-serif text-3xl text-[#2d201d] sm:text-4xl">
                                One clean system for every campaign, creator, and channel.
                            </h3>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-center">
                            <div className="rounded-2xl border border-[#f0e3df] bg-[#f9f5f2] p-4">
                                <div className="text-2xl font-semibold text-[#2d201d]">12+</div>
                                <div className="mt-1 text-xs text-[#6e4d46]">integrations</div>
                            </div>
                            <div className="rounded-2xl border border-[#f0e3df] bg-[#f9f5f2] p-4">
                                <div className="text-2xl font-semibold text-[#2d201d]">24/7</div>
                                <div className="mt-1 text-xs text-[#6e4d46]">automation</div>
                            </div>
                            <div className="rounded-2xl border border-[#f0e3df] bg-[#f9f5f2] p-4">
                                <div className="text-2xl font-semibold text-[#2d201d]">1.8x</div>
                                <div className="mt-1 text-xs text-[#6e4d46]">engagement</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f) => (
                        <div key={f.title} className="rounded-2xl border border-[#f0e3df] bg-white p-6 shadow-[0_18px_40px_rgba(74,45,38,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(74,45,38,0.06)]">
                            <div className={`mb-4 flex size-11 items-center justify-center rounded-2xl ${f.color}`}>
                                <f.icon className="size-5" />
                            </div>
                            <h3 className="mb-2 text-lg font-medium text-[#2d201d]">{f.title}</h3>
                            <p className="text-sm leading-relaxed text-[#5a3a34]">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
