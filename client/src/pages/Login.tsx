import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MailIcon, LockIcon, ArrowRightIcon, User2Icon } from "lucide-react";

export default function Login() {
    const [loginState, setLoginState] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/dashboard");
        }, 1000);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#f8f3f1_0%,#ffffff_45%,#f7f3f1_100%)] p-4">
            <div className="relative w-full max-w-md">
                <div className="rounded-[28px] border border-[#eaded8] bg-white p-8 shadow-[0_28px_80px_rgba(74,45,38,0.08)]">
                    <div className="mb-8 flex flex-col items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="flex size-8 items-center justify-center rounded-xl bg-[#4a2d26] text-sm font-bold text-white">
                                S
                            </div>
                            <h1 className="text-2xl font-medium text-[#2d201d]">Socialflow</h1>
                        </Link>
                        <p className="mt-1 text-sm text-[#5a3a34]">Sign in to your Dashboard</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                        {!loginState && (
                            <div>
                                <label className="mb-1.5 block">Name</label>
                                <div className="relative">
                                    <User2Icon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                                    <input type="text" required placeholder="Enter your name" className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-slate-300" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                        )}
                        <div>
                            <label className="mb-1.5 block">Email</label>
                            <div className="relative">
                                <MailIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                                <input type="email" required placeholder="you@company.com" className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-slate-300" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label className="mb-1.5 block">Password</label>
                            <div className="relative">
                                <LockIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                                <input type="password" required placeholder="********" className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-slate-300" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#4a2d26] px-4 py-2.5 text-sm text-white transition-all hover:bg-[#3d261f] disabled:opacity-60">
                            {loading ? (
                                "Signing in..."
                            ) : (
                                <>
                                    {loginState ? "Sign In" : "Sign Up"} <ArrowRightIcon className="size-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-500">
                        {loginState ? (
                            <>
                                Don't have an account? {" "}
                                <button onClick={() => setLoginState(false)} className="text-[#4a2d26] hover:text-[#3d261f]">
                                    Create one free
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account? {" "}
                                <button onClick={() => setLoginState(true)} className="text-[#4a2d26] hover:text-[#3d261f]">
                                    Sign In
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
