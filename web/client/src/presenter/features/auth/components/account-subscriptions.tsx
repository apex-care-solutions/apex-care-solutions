import { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SubscriptionSettings() {
    const [newsletters, setNewsletters] = useState(true);
    const [specialOffers, setSpecialOffers] = useState(false);
    const [productUpdates, setProductUpdates] = useState(true);

    return (
        <Card className="w-full bg-neutral-100 h-full">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Subscription Settings</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={newsletters}
                            onChange={() => setNewsletters(!newsletters)}
                            className="mr-2"
                        />
                        Subscribe to Newsletters
                    </label>
                    <p className="text-gray-500 text-sm mt-1">
                        Receive our newsletters with the latest updates and insights.
                    </p>
                </div>

                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={specialOffers}
                            onChange={() => setSpecialOffers(!specialOffers)}
                            className="mr-2"
                        />
                        Get Special Offers
                    </label>
                    <p className="text-gray-500 text-sm mt-1">
                        Be the first to know about exclusive offers and promotions.
                    </p>
                </div>

                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={productUpdates}
                            onChange={() => setProductUpdates(!productUpdates)}
                            className="mr-2"
                        />
                        Receive Product Updates
                    </label>
                    <p className="text-gray-500 text-sm mt-1">
                        Stay updated on the latest product features and enhancements.
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    size="default"
                    className="w-full bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground mt-5"
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
}
