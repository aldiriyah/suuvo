"use client";

import { Card, CardContent } from "@/components/ui/card";

import BenefitsOverviewSection from "./sections/BenefitsOverviewSection";
import HeroShowcaseSection from "./sections/HeroShowcaseSection";
import CoreFeatureGridSection from "./sections/CoreFeatureGridSection";
import SocialPromiseSection from "./sections/SocialPromiseSection";
import FeatureSpotlightSection from "./sections/FeatureSpotlightSection";
import CreatorCommunitySection from "./sections/CreatorCommunitySection";
import PreRegisterCtaSection from "./sections/PreRegisterCtaSection";


export default function WebsiteDesktop(): JSX.Element {
    const floatingDecorations = [
    {
      src: "/figmaAssets/vector-4.svg",
      alt: "Vector",
      className:
        "pointer-events-none absolute left-[-24%] top-[46.5%] hidden w-[71.75%] max-w-none lg:block",
    },
    {
      src: "/figmaAssets/vector-1.svg",
      alt: "Vector",
      className:
        "pointer-events-none absolute right-[-120px] top-[3920px] hidden w-[472px] max-w-none lg:block",
    },
    {
      src: "/figmaAssets/ul3refduj.svg",
      alt: "Re fd uj",
      className:
        "pointer-events-none absolute left-0 top-[69.14%] hidden w-[101.45%] max-w-none lg:block",
    },
    {
      src: "/figmaAssets/group-1686555187.png",
      alt: "Group",
      className:
        "pointer-events-none absolute left-1/2 top-[8334px] hidden w-[1440px] max-w-none -translate-x-1/2 lg:block",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {floatingDecorations.map((item, index) => (
        <img
          key={`decoration-${index}`}
          className={item.className}
          alt={item.alt}
          src={item.src}
        />
      ))}

      <main className="relative z-10 flex flex-col bg-white">
        <HeroShowcaseSection />
        <section className="relative px-4 pb-10 pt-8 sm:px-6 lg:px-0 lg:pb-16 lg:pt-10">
          <div className="mx-auto flex w-full max-w-[1440px] justify-center">
            <div className="relative w-full max-w-[1240px] px-0 lg:px-[100px]">
              <div className="relative max-w-[1120px]">
                <div className="relative max-w-[1060px]">
                  <h2 className="max-w-[924px] font-heading-h2 text-[34px] font-[number:var(--heading-h2-font-weight)] leading-[40px] tracking-[var(--heading-h2-letter-spacing)] text-black [font-style:var(--heading-h2-font-style)] sm:text-[44px] sm:leading-[48px] lg:text-[length:var(--heading-h2-font-size)] lg:leading-[var(--heading-h2-line-height)]">
                    A social platform for
                    <br className="hidden sm:block" /> real connections,
                    meaningful conversations, and privacy-first experiences
                    without noise or distractions.
                  </h2>
                  <img
                    className="pointer-events-none absolute left-[46%] top-0 hidden w-[120px] lg:block"
                    alt="Mask group"
                    src="/figmaAssets/mask-group.png"
                  />
                </div>
                <div className="mt-5 flex items-center justify-start gap-3 lg:absolute lg:right-[82px] lg:top-[82px] lg:mt-0">
                  <img
                    className="h-[60px] w-[60px]"
                    alt="Icon"
                    src="/figmaAssets/icon.svg"
                  />
                  <p className="[font-family:'Dancing_Script',Helvetica] text-center text-2xl font-normal leading-7 tracking-[-0.48px] text-pink whitespace-nowrap">
                    AI Powered Social Media
                  </p>
                </div>
                <div className="pointer-events-none mt-8 hidden lg:absolute lg:left-[428px] lg:top-[150px] lg:block">
                  <Card className="h-[50px] w-[50px] rounded-none border-0 bg-transparent shadow-[inset_4.27px_14.84px_9.76px_1.63px_#ae10c724,inset_0px_-4.88px_6.3px_#f039f470,inset_-2.24px_6.1px_6.3px_#ffc3b0ad] [background:radial-gradient(50%_50%_at_44%_7%,rgba(255,193,34,1)_58%,rgba(255,206,33,1)_100%)]">
                    <CardContent className="relative h-full p-0">
                      <div className="absolute left-[5px] top-5 h-3.5 w-[41px]">
                        <div className="absolute left-0 top-0 h-full w-[35.50%] rounded-[7.22px] bg-[#fd7171] blur-[3.96px]" />
                        <div className="absolute left-[64.50%] top-0 h-full w-[35.50%] rounded-[7.22px] bg-[#fd7171] blur-[3.96px]" />
                      </div>
                      <div className="absolute left-2 top-[13px] h-[7px] w-[34px]">
                        <img
                          className="absolute left-0 top-0 h-full w-[41.57%]"
                          alt="Ellipse"
                          src="/figmaAssets/ellipse-46.svg"
                        />
                        <img
                          className="absolute left-[58.43%] top-0 h-full w-[41.57%]"
                          alt="Ellipse"
                          src="/figmaAssets/ellipse-47.svg"
                        />
                      </div>
                      <img
                        className="absolute left-2.5 top-[23px] h-[15px] w-[30px]"
                        alt="Smiling mouth"
                        src="/figmaAssets/smiling-mouth.svg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HeroShowcaseSection />
        <SocialPromiseSection />
        <CoreFeatureGridSection />
        <FeatureSpotlightSection />
        <section className="relative">
          <div className="pointer-events-none absolute left-1/2 top-[-48px] hidden h-[128px] w-[128px] -translate-x-1/2 rounded-full bg-[#ff5a1f] opacity-60 blur-[60px] lg:block" />
          <BenefitsOverviewSection />
        </section>
        <section className="relative">
          <div className="pointer-events-none absolute left-[71.6%] top-[40px] hidden lg:block">
            <img
              className="h-[82px] w-[82px] object-cover"
              alt="Image"
              src="/figmaAssets/image-31.png"
            />
          </div>
          <div className="pointer-events-none absolute left-[12.57%] top-[561px] hidden lg:flex lg:w-[152px] lg:flex-col lg:gap-[5.4px]">
            <img
              className="ml-[45px] h-[39.6px] w-[39.6px]"
              alt="Icon"
              src="/figmaAssets/icon-1.svg"
            />
            <p className="h-7 w-[150px] [font-family:'Dancing_Script',Helvetica] text-center text-2xl font-normal leading-7 tracking-[-0.48px] text-pink whitespace-nowrap">
              Creator&apos;s Platform
            </p>
          </div>
          <CreatorCommunitySection />
        </section>
        <PreRegisterCtaSection />
      </main>
    </section>
  );
};
