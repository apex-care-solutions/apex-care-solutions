import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQList() {
    return (
        <div>
            <p className="text-4xl font-bold max-w-96">
                Frequently Asked <b>Questions</b>
                <span className="text-accent">.</span>
            </p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        What services does ApexCare Solutions provide?
                    </AccordionTrigger>
                    <AccordionContent>
                        ApexCare Solutions provides a range of services
                        including home health care, nursing services, and
                        personal support. For more details, please visit our{" "}
                        <a
                            href="/services"
                            className="text-blue-600 hover:underline"
                        >
                            Services Page
                        </a>
                        .
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        How do I request a service from ApexCare Solutions?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can request a service by visiting our website and
                        filling out the service request form. For further
                        assistance, check our{" "}
                        <a
                            href="/contact"
                            className="text-blue-600 hover:underline"
                        >
                            Contact Page
                        </a>
                        .
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Can I track the progress of my service request?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, once your service request is submitted, you will
                        receive a confirmation email with a tracking link. If
                        you have any questions, please visit our{" "}
                        <a
                            href="/tracking"
                            className="text-blue-600 hover:underline"
                        >
                            Tracking Information Page
                        </a>
                        .
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        How do I provide feedback on the service provided?
                    </AccordionTrigger>
                    <AccordionContent>
                        We value your feedback! You can provide feedback through
                        our website using the{" "}
                        <a
                            href="/feedback"
                            className="text-blue-600 hover:underline"
                        >
                            Feedback Form
                        </a>
                        , or you can contact our customer service team directly
                        via phone or email.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        Can I set up a recurring subscription?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, we offer flexible subscription plans that can be
                        customized to meet your needs. For more information,
                        please refer to our{" "}
                        <a
                            href="/subscriptions"
                            className="text-blue-600 hover:underline"
                        >
                            Subscriptions Page
                        </a>
                        .
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
