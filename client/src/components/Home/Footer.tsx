import { Link } from "react-router-dom";

const footerLinks = {
    Product: ["Features", "How it works", "Pricing", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
    return (
        <footer className="border-t border-[#f0e3df] bg-[#f9f5f2]">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
                <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <Link to="/" onClick={() => scrollTo(0, 0)} className="mb-5 inline-flex items-center gap-2">
                            <div className="flex size-7 items-center justify-center rounded-lg bg-[#4a2d26] text-sm font-bold text-white">
                                S
                            </div>
                            <span className="font-medium font-serif text-xl text-[#2d201d]">Socialflow</span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-[#5a3a34]">
                            The AI-powered social media scheduler that helps creators and teams grow faster with less effort.
                        </p>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#5a3a34]">{category}</div>
                            <ul className="space-y-1">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-[#6e4d46] transition hover:text-[#4a2d26]">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-[#f0e3df] pt-8 sm:flex-row">
                    <p className="text-xs text-[#8c6e66]">© {new Date().getFullYear()} Socialflow. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-[#8c6e66] transition hover:text-[#4a2d26]">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-[#8c6e66] transition hover:text-[#4a2d26]">
                            Terms of Service
                        </a>
                        <Link to="/login" className="text-xs text-[#8c6e66] transition hover:text-[#4a2d26]">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
