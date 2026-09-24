import { StarIcon } from "lucide-react";

const testimonials = [
    {
        name: "Sarah K.",
        role: "Marketing Manager",
        avatar: "S",
        avatarBg: "from-[#4a2d26] to-[#7f534b]",
        text: "Socialflow has saved our team 10+ hours a week. The AI composer is genuinely impressive — it writes content that sounds like us.",
    },
    {
        name: "Marcus L.",
        role: "Indie Creator",
        avatar: "M",
        avatarBg: "from-[#5f3a31] to-[#8d655d]",
        text: "I used to dread posting. Now I queue up a whole week of content in 20 minutes. The smart scheduling feature alone is worth it.",
    },
    {
        name: "Priya D.",
        role: "Startup Founder",
        avatar: "P",
        avatarBg: "from-[#4a2d26] to-[#a37d74]",
        text: "Finally a scheduler that's beautiful AND powerful. The dashboard makes it easy to see exactly what's going out and when.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#f9f5f2] py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mb-14 text-center">
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#e8dad5] bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#4a2d26]">
                        <StarIcon className="size-3" />
                        Testimonials
                    </div>
                    <h2 className="font-serif text-4xl font-medium leading-tight text-[#2d201d] sm:text-5xl">
                        Loved by <span className="text-[#4a2d26]">creators &amp; teams</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-md text-[#5a3a34]">Join thousands of people who automate their social media with Socialflow.</p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div key={i} className="flex flex-col gap-4 rounded-2xl border border-[#f0e3df] bg-white p-6 shadow-[0_18px_40px_rgba(74,45,38,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(74,45,38,0.06)]">
                            <p className="flex-1 text-sm leading-relaxed text-[#2d201d]">“{t.text}”</p>
                            <div className="flex items-center gap-3 border-t border-[#f3eae7] pt-3">
                                <div className={`flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarBg} text-sm font-bold text-white`}>{t.avatar}</div>
                                <div>
                                    <div className="text-sm font-medium text-[#2d201d]">{t.name}</div>
                                    <div className="text-xs text-[#8c6e66]">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
