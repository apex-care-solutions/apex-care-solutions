"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/presenter/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/presenter/components/ui/form";
import { Input } from "@/presenter/components/ui/input";
import { useSession } from "../context/auth-provider";
import { loginUser } from "@/presenter/actions/auth-actions";
import Link from "next/link";

const loginSchema = z.object({
    username: z
        .string()
        .min(2, { message: "Username must be at least 2 characters." }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters." }),
});

export function LoginView() {
    const [_, setUser] = useSession();
    const form = useForm<{ username: string; password: string }>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = async (data: { username: string; password: string }) => {
        let res = await loginUser(data);
        if (res.data && res.success) setUser(res.data);
        if (res.redirect) window.location.pathname = res.redirect;
    };

    return (
        <div className="h-full w-full grid grid-rows-3">
            <div className="w-full flex justify-end p-5">
                <Link
                    href="/auth/register"
                    className="w-min h-min flex gap-1 items-center"
                >
                    Register <ArrowRight className="h-5" />
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <Card className="flex flex-col w-min h-min">
                    <CardHeader>
                        <CardTitle>Welcome Back</CardTitle>
                        <CardDescription>
                            Sign in to your account to pick up where you left
                            off.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="flex flex-col gap-4 w-96"
                            >
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter username"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Enter password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <p className="text-blue-500 cursor-pointer">
                                    Forgot password?
                                </p>
                                <Button
                                    type="submit"
                                    variant="default"
                                    size="default"
                                >
                                    Sign In
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
