"use client";

import * as React from "react";
import { ArrowLeft, CreditCard, Loader2 } from "lucide-react";

import { Button } from "@/presenter/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/presenter/components/ui/select";
import { Switch } from "@/presenter/components/ui/switch";
import Link from "next/link";

const plans = [
    {
        name: "Basic",
        price: 10,
        features: ["1 user", "10 projects", "5GB storage"],
    },
    {
        name: "Pro",
        price: 20,
        features: [
            "5 users",
            "50 projects",
            "100GB storage",
            "Priority support",
        ],
    },
    {
        name: "Enterprise",
        price: 50,
        features: [
            "Unlimited users",
            "Unlimited projects",
            "1TB storage",
            "24/7 support",
            "Custom integrations",
        ],
    },
];

export function SubscriptionCard() {
    const [currentPlan, setCurrentPlan] = React.useState("Basic");
    const [billingInterval, setBillingInterval] = React.useState("monthly");
    const [isLoading, setIsLoading] = React.useState(false);

    const handleUpgrade = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            alert("Subscription upgraded!");
        }, 2000);
    };

    return (
        <div className="container mx-auto py-10 flex flex-col gap-5">
            <Link href="/account" className="flex gap-2.5">
                <ArrowLeft /> Back to account
            </Link>
            <h1 className="text-3xl font-bold">Manage Subscription</h1>
            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Current Plan</CardTitle>
                        <CardDescription>
                            You are currently on the {currentPlan} plan.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">
                                    $
                                    {plans
                                        .find((p) => p.name === currentPlan)
                                        ?.price.toFixed(2)}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    per{" "}
                                    {billingInterval === "monthly"
                                        ? "month"
                                        : "year"}
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="billing-interval"
                                    checked={billingInterval === "yearly"}
                                    onCheckedChange={(checked) =>
                                        setBillingInterval(
                                            checked ? "yearly" : "monthly",
                                        )
                                    }
                                />
                                <label htmlFor="billing-interval">
                                    Bill yearly (save 10%)
                                </label>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="w-full">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Update payment method
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Upgrade Plan</CardTitle>
                        <CardDescription>
                            Choose a plan that works best for you.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Select
                            value={currentPlan}
                            onValueChange={setCurrentPlan}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a plan" />
                            </SelectTrigger>
                            <SelectContent>
                                {plans.map((plan) => (
                                    <SelectItem
                                        key={plan.name}
                                        value={plan.name}
                                    >
                                        {plan.name} - ${plan.price.toFixed(2)}/
                                        {billingInterval === "monthly"
                                            ? "mo"
                                            : "yr"}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full"
                            onClick={handleUpgrade}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Upgrading...
                                </>
                            ) : (
                                "Upgrade Plan"
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="mt-8">
                <Button variant="outline" className="text-destructive">
                    Cancel Subscription
                </Button>
            </div>
        </div>
    );
}
