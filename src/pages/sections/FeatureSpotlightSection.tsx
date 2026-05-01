"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featureSpotlightContent = {
  title: ["The Future Belongs", "to Creators"],
  description:
    "Built to empower creators with tools, freedom, and opportunities to grow, monetize content, and build meaningful, lasting digital presence.",
  cta: "Join Waitlist",
  artwork: "/figmaAssets/group-1686555230.png",
  ctaGlow: "/figmaAssets/vector-9-1.svg",
};

export const FeatureSpotlightSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-8 sm:px-6 md:px-8 lg:py-10">
      <div className="mx-auto flex w-full max-w-[1051px] flex-col items-center gap-10 sm:gap-12 md:gap-[60px]">
        <header className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading-h2 text-[40px] font-[number:var(--heading-h2-font-weight)] leading-[44px] tracking-[var(--heading-h2-letter-spacing)] text-black [font-style:var(--heading-h2-font-style)] sm:text-[52px] sm:leading-[56px] md:text-[length:var(--heading-h2-font-size)] md:leading-[var(--heading-h2-line-height)]">
            {featureSpotlightContent.title.map((line, index) => (
              <span key={line} className="block">
                {line}
                {index === 1 ? null : ""}
              </span>
            ))}
          </h2>
        </header>
        <Card className="w-full border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <img
              className="h-auto w-full"
              alt="The Future Belongs to Creators artwork"
              src={featureSpotlightContent.artwork}
            />
          </CardContent>
        </Card>
        <div className="flex w-full max-w-[511px] flex-col items-center gap-8">
          <p className="font-body-body-16-m text-center text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black [font-style:var(--body-body-16-m-font-style)]">
            {featureSpotlightContent.description}
          </p>
          <Button
            type="button"
            className="relative h-auto min-w-[200px] overflow-hidden rounded-[999px] border-0 px-10 py-4 font-button-button-16 text-[length:var(--button-button-16-font-size)] font-[number:var(--button-button-16-font-weight)] leading-[var(--button-button-16-line-height)] tracking-[var(--button-button-16-letter-spacing)] text-white shadow-[0px_3.71px_4.85px_#ff580027,0px_10.27px_13.4px_#ff580038,0px_24.72px_32.26px_#ff580030,0px_42px_107px_#ff580057,inset_0px_1px_3px_2px_#ffecda99,inset_0px_1px_14px_2px_#ffecda99] [background:url(/figmaAssets/frame-1618872851-1.png)_50%_50%_/_cover,linear-gradient(95deg,rgba(239,159,34,1)_0%,rgba(222,18,123,1)_100%)] [font-style:var(--button-button-16-font-style)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[999px] before:p-px before:content-[''] before:[background:linear-gradient(180deg,rgba(224,27,115,0.2)_0%,rgba(240,159,51,0.2)_100%)] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] hover:opacity-95"
          >
            <span className="relative z-[2] whitespace-nowrap text-[#ffffff]">
              {featureSpotlightContent.cta}
            </span>
            <img
              className="pointer-events-none absolute left-1/2 top-0 z-[1] h-14 w-[109px] -translate-x-1/2"
              alt=""
              aria-hidden="true"
              src={featureSpotlightContent.ctaGlow}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
