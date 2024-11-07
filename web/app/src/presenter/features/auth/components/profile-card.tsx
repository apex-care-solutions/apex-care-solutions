"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { UserAuth, useSession } from "../context/auth-provider";
import { updateUserById } from "@/presenter/actions/account-actions";

import { Button } from "@/presenter/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/presenter/components/ui/form";
import { Input } from "@/presenter/components/ui/input";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/presenter/components/ui/avatar";
import { Badge } from "@/presenter/components/ui/badge";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    firstName: z.string().min(1, {
        message: "First name is required.",
    }),
    lastName: z.string().min(1, {
        message: "Last name is required.",
    }),
});

export function ProfileCard() {
    const [user, setUser] = useSession();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            firstName: "",
            lastName: "",
        },
    });

    React.useEffect(() => {
        if (user) {
            form.reset({
                username: String(user.username),
                firstName: String(user.firstName),
                lastName: String(user.lastName),
            });
        }
    }, [user, form]);

    if (!user) {
        return null;
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (user) {
            const updatedUser = await updateUserById(String(user.id), values);
            setUser(updatedUser as UserAuth);
        }
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="flex flex-col items-center gap-2">
                        <Avatar className="h-52 w-52">
                            <AvatarImage
                                src="/accountImage.jpg"
                                alt={user.username}
                            />
                            <AvatarFallback>
                                {user.username.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <Badge className="text-sm w-full items-center flex justify-center font-bold">
                            {user.username}
                        </Badge>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex-1 space-y-4 flex flex-col"
                        >
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="w-full flex justify-end">
                                <Button
                                    type="submit"
                                    className="w-full sm:w-min"
                                >
                                    Confirm
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </CardContent>
        </Card>
    );
}
