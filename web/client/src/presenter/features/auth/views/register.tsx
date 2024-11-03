import { Link, useNavigate } from "react-router-dom";
import "/src/globals.css";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { RegisterData } from "@/domain/data/services/apex-care-api/routes/auth-route";
import { UserRepository } from "@/domain/repository";
import { apexCareApi } from "@/domain/data/services/apex-care-api/apex-care-api";

const registerSchema = z
    .object({
        username: z.string().min(1, "Username is required"),
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().min(1, "Phone number is required"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z
            .string()
            .min(6, "Confirm password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterData>({
        resolver: zodResolver(registerSchema),
    });

    const navigate = useNavigate();

    const userRepository = new UserRepository(apexCareApi);

    const onSubmit = async (data: RegisterData) => {
        try {
            let res = await userRepository.register(data);
            if (res.redirect) navigate(res.redirect);
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };
    return (
        <div className="h-full w-full grid grid-rows-3">
            <div className="w-full flex justify-end p-5">
                <Link
                    to="/auth/login"
                    className="w-min h-min flex gap-1 items-center"
                >
                    Login <ArrowRight className="h-5" />
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <Card className="flex flex-col w-min h-min">
                    <CardHeader>
                        <CardTitle>Getting Started</CardTitle>
                        <CardDescription>
                            Sign up for your account to get started.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            className="flex flex-col gap-4 w-96"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <Input
                                        type="text"
                                        placeholder="Enter username"
                                        className={`bg-white-muted border p-2 ${
                                            errors.username
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        {...register("username")}
                                    />
                                    {errors.username && (
                                        <span className="text-red-500 text-sm">
                                            {String(errors.username.message)}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Enter first name"
                                        className={`bg-white-muted border p-2 ${
                                            errors.firstName
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        {...register("firstName")}
                                    />
                                    {errors.firstName && (
                                        <span className="text-red-500 text-sm">
                                            {String(errors.firstName.message)}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Enter last name"
                                        className={`bg-white-muted border p-2 ${
                                            errors.lastName
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        {...register("lastName")}
                                    />
                                    {errors.lastName && (
                                        <span className="text-red-500 text-sm">
                                            {String(errors.lastName.message)}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Enter Email Address"
                                        className={`bg-white-muted border p-2 ${
                                            errors.email ? "border-red-500" : ""
                                        }`}
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <span className="text-red-500 text-sm">
                                            {String(errors.email.message)}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Enter Phone Number"
                                        className={`bg-white-muted border p-2 ${
                                            errors.phone ? "border-red-500" : ""
                                        }`}
                                        {...register("phone")}
                                    />
                                    {errors.phone && (
                                        <span className="text-red-500 text-sm">
                                            {String(errors.phone.message)}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        type="password"
                                        placeholder="Enter password"
                                        className={`bg-white-muted border p-2 ${
                                            errors.password
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        {...register("password")}
                                    />
                                    {errors.password && (
                                        <span className="text-red-500 text-sm">
                                            {String(errors.password.message)}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        type="password"
                                        placeholder="Confirm password"
                                        className={`bg-white-muted border p-2 ${
                                            errors.confirmPassword
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        {...register("confirmPassword")}
                                    />
                                    {errors.confirmPassword && (
                                        <span className="text-red-500 text-sm">
                                            {String(
                                                errors.confirmPassword.message,
                                            )}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <Button
                                type="submit"
                                variant="default"
                                size="default"
                            >
                                Register
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
