export function Footer() {
    return (
        <div className="bg-black mt-4 rounded-lg">
            <div className="flex justify-between p-20">
                <img src="/apex-logo.svg" alt="Apex logo" className="h-20" />
                <div className="flex gap-10">
                    <div className="text-white">
                        <h1 className="font-bold">Account</h1>
                        <ul className=" flex flex-col text-sm gap-2">
                            <li>My Account</li>
                            <li>Purchases</li>
                            <li>Billing</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h1 className="font-bold">Company</h1>
                        <ul className=" flex flex-col text-sm gap-2">
                            <li>About</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h1 className="font-bold">Help</h1>
                        <ul className=" flex flex-col text-sm gap-2">
                            <li>Accessability</li>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>Contact</li>
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
