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

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(1, {
        message: "Phone number is required.",
    }),
});

export function ContactCard() {
    const [user, setUser] = useSession();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            phone: "",
        },
    });

    React.useEffect(() => {
        if (user) {
            form.reset({
                email: String(user.email),
                phone: String(user.phone),
            });
        }
    }, [user, form]);

    if (!user) {
        return null;
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const updatedUser = await updateUserById(String(user?.id), values);
            setUser(updatedUser as UserAuth);
        } catch (error) {
            console.error("Error updating contact:", error);
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input type="tel" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
}
