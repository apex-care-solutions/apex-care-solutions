import Link from "next/link";

export function Footer() {
    return (
        <div className="bg-black mt-4 rounded-lg">
            <div className="flex justify-between p-20">
                <img src="/apex-logo.svg" alt="Apex logo" className="h-20" />
                <div className="flex gap-10">
                    <div className="text-white flex flex-col gap-5">
                        <h1 className="font-bold text-xl">Account</h1>
                        <ul className=" flex flex-col text-sm gap-2">
                            <Link href="/account">My Account</Link>
                            <Link href="/account/billing">Billing</Link>
                        </ul>
                    </div>
                    <div className="text-white flex flex-col gap-5">
                        <h1 className="font-bold text-xl">Company</h1>
                        <ul className=" flex flex-col text-sm gap-2">
                            <Link href="/about">About</Link>
                            <Link href="/about">Careers</Link>
                            <Link href="/staff/join">Join us</Link>
                        </ul>
                    </div>
                    <div className="text-white flex flex-col gap-5">
                        <h1 className="font-bold text-xl">Help</h1>
                        <ul className=" flex flex-col text-sm gap-2">
                            <Link href="/faq">FAQ</Link>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/contact-us">Contact</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center pb-5">
                <p className="text-white">Your Equipment. Our Care.</p>
                <p className="text-gray-500">Anytime. Every Time</p>
            </div>
        </div>
    );
}
