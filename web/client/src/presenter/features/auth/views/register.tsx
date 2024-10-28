import { AuthContainer } from "../components/auth-container";
import { Button } from "@/presenter/components/ui/button";
import "/src/globals.css";

export function Register() {
    function RegisterForm() {
        return (
            <form className="flex flex-col gap-4 w-96">
                <input
                    type="text"
                    placeholder="Enter first name"
                    className="bg-white-muted border p-2"
                />
                <input
                    type="text"
                    placeholder="Enter last name"
                    className="bg-white-muted border p-2"
                />
                <input
                    type="email"
                    placeholder="Enter last name"
                    className="bg-white-muted border p-2"
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    className="bg-white-muted border p-2"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="bg-white-muted border p-2"
                />
                <Button variant="default" size="default" className="mt-10">
                    Register
                </Button>
            </form>
        );
    }
    return (
        <div>
            <AuthContainer>
                <RegisterForm />
            </AuthContainer>
        </div>
    );
}
