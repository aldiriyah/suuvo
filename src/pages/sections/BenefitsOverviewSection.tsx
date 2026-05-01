"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqItems = [
  {
    id: "item-01",
    number: "01/",
    question: "1. What is this platform about?",
  },
  {
    id: "item-02",
    number: "02/",
    question: "How does it work?",
    answer:
      "We're currently in pre-launch phase. Join the waitlist to get early access, exclusive updates, and be among the first to experience the platform.",
  },
  {
    id: "item-03",
    number: "03/",
    question: "How can I join early?",
  },
  {
    id: "item-04",
    number: "04/",
    question: "Can creators earn on the platform?",
  },
  {
    id: "item-05",
    number: "05/",
    question: "Is the platform free to use?",
  },
  {
    id: "item-06",
    number: "06/",
    question: "Which devices will be supported?",
  },
];

export default function BenefitsOverviewSectio(): JSX.Element {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full max-w-[820px] flex-col items-center gap-12">
        <header className="w-full max-w-[627px]">
          <h2 className="mt-[-1.00px] text-center font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] leading-[var(--heading-h2-line-height)] tracking-[var(--heading-h2-letter-spacing)] text-black [font-style:var(--heading-h2-font-style)] max-md:text-[42px] max-md:leading-[46px] max-md:tracking-[-1.2px]">
            Everything you might be wondering about
          </h2>
        </header>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-02"
          className="flex w-full flex-col gap-6"
        >
          {faqItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden rounded-2xl border-0 bg-[#ffffff] shadow-[0px_8px_17px_#0000000a,0px_32px_32px_#00000008,0px_71px_43px_#00000005,0px_126px_50px_#00000003,0px_197px_55px_transparent]"
            >
              <CardContent className="p-0">
                <AccordionItem value={item.id} className="border-b-0">
                  <AccordionTrigger className="px-5 py-4 hover:no-underline [&>svg]:h-10 [&>svg]:w-10 [&>svg]:shrink-0">
                    <span className="flex min-w-0 items-center gap-2 text-left">
                      <span className="whitespace-nowrap font-body-body-16-m text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-[#787878] [font-style:var(--body-body-16-m-font-style)]">
                        {item.number}
                      </span>
                      <span className="font-body-body-20 text-[length:var(--body-body-20-font-size)] font-[number:var(--body-body-20-font-weight)] leading-[var(--body-body-20-line-height)] tracking-[var(--body-body-20-letter-spacing)] text-black [font-style:var(--body-body-20-font-style)] max-md:whitespace-normal">
                        {item.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  {item.answer ? (
                    <AccordionContent className="px-5 pb-4 pt-0">
                      <p className="w-full max-w-[646px] font-body-body-16-m text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-[#1e1e1eb2] [font-style:var(--body-body-16-m-font-style)]">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  ) : null}
                </AccordionItem>
              </CardContent>
            </Card>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
