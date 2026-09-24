import { CheckIcon, CircleCheckBigIcon } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
    {
        name: "Starter",
        price: "Free",
        period: "",
        description: "Perfect for creators just getting started with social media automation.",
        features: ["2 social accounts", "10 scheduled posts/month", "AI content (5 credits/mo)", "Basic dashboard"],
        cta: "Get Started Free",
        highlight: false,
    },
    {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "Everything you need to grow and automate your social presence.",
        features: ["Unlimited accounts", "Unlimited scheduling", "AI content (200 credits/mo)", "Priority support"],
        cta: "Start 14-day Free Trial",
        highlight: true,
    },
    {
        name: "Agency",
        price: "$79",
        period: "/month",
        description: "For teams and agencies managing multiple brands at scale.",
        features: ["Everything in Pro", "5 team members", "Unlimited AI credits", "Custom AI personas", "Dedicated support"],
        cta: "Contact Sales",
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="bg-white py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border
                     border-[#dfeaff] bg-[#edf4ff] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#1e5eff]">
                        <CircleCheckBigIcon className="size-3" />
                        Simple pricing
                    </div>
                    <h2 className="font-serif text-4xl font-medium leading-tight text-gray-900 sm:text-5xl">
                        Plans for every stage
                        <br />
                        <span className="text-[#2d201d] italic">of growth</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-md text-gray-500">Start free, upgrade when you're ready. Cancel anytime — no hidden fees.</p>
                </div>

                <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <div key={plan.name} className={`group relative flex flex-col gap-6 rounded-2xl border p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#4a2d26] hover:shadow-[0_24px_50px_rgba(74,45,38,0.12)] ${plan.highlight ? "border-[#4a2d26] bg-[#4a2d26] text-white shadow-[0_25px_60px_rgba(74,45,38,0.15)]" : "border-[#f0e3df] bg-white text-[#2d201d]"}`}>
                            {plan.highlight && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#6e4037] px-3.5 py-1.5 text-xs font-bold text-white">Most Popular</div>}

                            <div>
                                <div className={`mb-1 text-sm font-semibold ${plan.highlight ? "text-[#f1e1dc]" : "text-[#4a2d26]"}`}>{plan.name}</div>
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className={`mb-1.5 text-sm ${plan.highlight ? "text-[#f1e1dc]" : "text-[#8c6e66]"}`}>{plan.period}</span>
                                </div>
                                <p className={`mt-2 text-sm leading-relaxed ${plan.highlight ? "text-[#f1e1dc]" : "text-[#5a3a34]"}`}>{plan.description}</p>
                            </div>

                            <ul className="space-y-2.5">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2.5 text-sm">
                                        <div className={`flex size-4 shrink-0 items-center justify-center rounded-full ${plan.highlight ? "bg-[#ffffff1a]" : "bg-[#f5ebea]"}`}>
                                            <CheckIcon className={`h-2.5 w-2.5 ${plan.highlight ? "text-white" : "text-[#4a2d26]"}`} />
                                        </div>
                                        <span className={plan.highlight ? "text-[#f8f3f1]" : "text-[#5a3a34]"}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/#" className={`mt-auto rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 ${plan.highlight ? "bg-white text-[#4a2d26] hover:bg-[#f9f5f2]" : "bg-[#4a2d26] text-white hover:bg-[#3d261f]"} group-hover:scale-[1.01]`}>
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
