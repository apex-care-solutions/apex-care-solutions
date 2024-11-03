"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginData } from "@/domain/data/services/apex-care-api/routes/auth-route";
import { UserRepository } from "@/domain/repository";
import { apexCareApi } from "@/domain/data/services/apex-care-api/apex-care-api";

// Define form data type

// Define form validation schema
const loginSchema = z.object({
    username: z
        .string()
        .min(2, { message: "Username must be at least 2 characters." }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters." }),
});

export function Login() {
    // Set up form with validation
    const form = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const userRepository = new UserRepository(apexCareApi);

    const onSubmit = (data: LoginData) => {
        console.log(data);
        userRepository.signIn(data);
    };

    return (
        <div className="h-full w-full grid grid-rows-3">
            <div className="w-full flex justify-end p-5">
                <Link
                    to="/auth/register"
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
