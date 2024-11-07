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
    address: z.string().min(1, {
        message: "Address is required.",
    }),
});

export function LocationCard() {
    const [user, setUser] = useSession();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            address: "",
        },
    });

    React.useEffect(() => {
        if (user) {
            form.reset({
                address: String(user.address),
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
            console.error("Error updating location:", error);
        }
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
