import { AuthContainer } from "../components/auth-container";
import { Button } from "@/components/ui/button";
import "/src/globals.css";

export function Login() {
    function LoginForm() {
        return (
            <form className="flex flex-col gap-4 w-96">
                <input
                    type="text"
                    placeholder="Enter username"
                    className="bg-white-muted border p-2"
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    className="bg-white-muted border p-2"
                />
                <p>Forgot password?</p>
                <Button variant="default" size="default">
                    Sign In
                </Button>
                <div className="flex items-center justify-center">
                    <div className="w-full border-t border-gray-300"></div>
                    <span className="mx-4 text">or</span>
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <Button variant="outline" size="default">
                    <img src="/google.svg" alt="Google"/>
                    Continue with google
                </Button>
            </form>
        );
    }
    return (
        <div>
            <AuthContainer>
                <LoginForm/>
            </AuthContainer>
        </div>
    );
}
