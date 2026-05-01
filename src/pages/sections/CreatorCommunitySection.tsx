"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const benefits = [
  "Free Coins to kickstart your journey",
  "Exclusive Welcome Gifts",
  "Priority Access to new feature",
];

const cards = [
  {
    id: "left",
    wrapperClassName:
      "relative z-10 mt-20 w-[250px] shrink-0 -rotate-[16deg] sm:w-[250px]",
    imageWrapperClassName: "relative h-[388px] w-[250px]",
    imageClassName:
      "absolute -left-11 -top-[22px] h-[170px] w-[338px] rounded-[17.24px] object-cover",
    imageSrc: "/figmaAssets/rectangle-24-2.png",
    imageAlt: "Creator content preview",
    iconSrc: "/figmaAssets/fluent-video-clip-16-filled.svg",
    iconAlt: "Video clip",
    iconClassName: "absolute left-2.5 top-[9px] h-10 w-10 rotate-[16deg]",
    badge: {
      label: "New",
      className:
        "absolute left-[175px] top-3.5 flex w-[62px] items-center justify-center rounded-[142.72px] bg-[#ffbd5959] px-[11.42px] py-[5.71px] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]",
      textClassName:
        "mt-[-1.43px] whitespace-nowrap text-center [font-family:'Inter',Helvetica] text-[17.1px] font-normal leading-[28.5px] tracking-[-0.71px] text-white",
    },
    views: {
      className:
        "absolute left-[19px] top-[352px] flex w-[70px] items-center justify-center gap-[2.4px] rounded-[120px] bg-[#ffffff59] px-[9.6px] py-[4.8px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]",
      iconSrc: "/figmaAssets/lsicon-view-outline-6.svg",
      iconAlt: "View count",
      iconClassName: "h-[14.4px] w-[14.4px]",
      text: "24.6k",
      textClassName:
        "mr-[-1.20px] whitespace-nowrap text-center [font-family:'Inter',Helvetica] text-[14.4px] font-normal leading-6 tracking-[-0.60px] text-white",
    },
  },
  {
    id: "center",
    wrapperClassName: "relative z-20 -mt-2 w-[312px] shrink-0",
    imageWrapperClassName: "relative h-[484px] w-[312px]",
    imageClassName: "h-[262.3px] w-[312px] rounded-[21.52px] object-cover",
    imageSrc: "/figmaAssets/rectangle-26-1.png",
    imageAlt: "Featured creator content preview",
    iconSrc: "/figmaAssets/fluent-video-clip-16-filled-1.svg",
    iconAlt: "Video clip",
    iconClassName: "absolute left-3.5 top-[13px] h-10 w-10",
    badge: {
      label: "New",
      className:
        "absolute left-[226px] top-4 flex w-[71px] items-center justify-center rounded-[164.55px] bg-[#ffbd5959] px-[13.16px] py-[6.58px] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]",
      textClassName:
        "mt-[-1.65px] whitespace-nowrap text-center [font-family:'Inter',Helvetica] text-[19.7px] font-normal leading-[32.9px] tracking-[-0.82px] text-white",
    },
    views: {
      className:
        "absolute left-[15px] top-[440px] flex w-[87px] items-center justify-center gap-[3px] rounded-[150px] bg-[#ffffff59] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]",
      iconSrc: "/figmaAssets/lsicon-view-outline-1.svg",
      iconAlt: "View count",
      iconClassName: "h-[18px] w-[18px]",
      text: "24.6k",
      textClassName:
        "mr-[-1.50px] whitespace-nowrap text-center [font-family:'Inter',Helvetica] text-lg font-normal leading-[30px] tracking-[-0.75px] text-white",
    },
  },
  {
    id: "right-center",
    wrapperClassName:
      "relative z-10 mt-10 w-[280px] shrink-0 -rotate-[8deg] sm:w-[280px]",
    imageWrapperClassName: "relative h-[434.48px] w-[280px]",
    imageClassName:
      "absolute -top-3.5 left-[-26px] h-[220px] w-[331px] rounded-[19.31px] object-cover",
    imageSrc: "/figmaAssets/rectangle-29-2.png",
    imageAlt: "Viewed creator content preview",
    iconSrc: "/figmaAssets/solar-copy-bold.svg",
    iconAlt: "Copy",
    iconClassName: "absolute left-0 top-0 h-[27px] w-[27px] rotate-[8deg]",
    badge: {
      label: "Viewed",
      className:
        "absolute left-[200px] top-4 flex h-[25px] w-16 items-center justify-center rounded-[110.29px] bg-[#5a60a67a] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]",
      textClassName:
        "ml-[-1.3px] mt-[-1.3px] flex h-[9px] w-[39px] items-center justify-center whitespace-nowrap text-center [font-family:'Inter',Helvetica] text-[11.8px] font-normal leading-[22.1px] tracking-[-0.55px] text-white",
    },
    views: {
      className:
        "absolute left-4 top-[391px] flex w-[81px] items-center justify-center gap-[2.8px] rounded-[140px] bg-[#ffffff59] px-[11.2px] py-[5.6px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]",
      iconSrc: "/figmaAssets/lsicon-view-outline.svg",
      iconAlt: "View count",
      iconClassName: "h-[16.8px] w-[16.8px]",
      text: "24.6k",
      textClassName:
        "mr-[-1.40px] whitespace-nowrap text-center [font-family:'Inter',Helvetica] text-[16.8px] font-normal leading-7 tracking-[-0.70px] text-white",
    },
  },
  {
    id: "right",
    wrapperClassName:
      "relative z-0 mt-[88px] w-[280px] shrink-0 rotate-[23deg] sm:w-[280px]",
    imageWrapperClassName: "relative h-[434px] w-[280px]",
    imageClassName:
      "absolute left-[-67px] top-[-31px] h-[193px] w-[415px] rounded-[19.31px] object-cover",
    imageSrc: "/figmaAssets/rectangle-25-2.png",
    imageAlt: "Creator content preview",
    iconSrc: "/figmaAssets/fluent-video-clip-16-filled-3.svg",
    iconAlt: "Video clip",
    iconClassName: "absolute left-3 top-3 h-[42px] w-[42px] rotate-[-23deg]",
    badge: {
      label: "New",
      className:
        "absolute left-[197px] top-3.5 flex w-[68px] items-center justify-center rounded-[155.69px] bg-[#ffbd5959] px-[12.46px] py-[6.23px] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]",
      textClassName:
        "mt-[-1.56px] whitespace-nowrap text-center [font-family:'Inter',Helvetica] text-[18.7px] font-normal leading-[31.1px] tracking-[-0.78px] text-white",
    },
    views: {
      className:
        "absolute left-4 top-[392px] flex w-[76px] items-center justify-center gap-[2.6px] rounded-[130px] bg-[#ffffff59] px-[10.4px] py-[5.2px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]",
      iconSrc: "/figmaAssets/lsicon-view-outline-2.svg",
      iconAlt: "View count",
      iconClassName: "h-[15.6px] w-[15.6px]",
      text: "24.6k",
      textClassName:
        "mr-[-0.95px] whitespace-nowrap text-center [font-family:'Inter',Helvetica] text-[15.6px] font-normal leading-[26px] tracking-[-0.65px] text-white",
    },
  },
];

export const CreatorCommunitySection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-6 sm:px-6 lg:px-0">
      <Card className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[32px] border-0 bg-[linear-gradient(90deg,rgba(239,159,34,1)_0%,rgba(222,18,123,1)_100%)] shadow-none">
        <CardContent className="flex flex-col gap-12 px-6 pb-0 pt-10 sm:px-10 sm:pt-14 lg:gap-[60.7px] lg:px-[60px] lg:pt-[100px]">
          <header className="mx-auto flex w-full max-w-[783px] flex-col items-center gap-8">
            <div className="flex w-full flex-col items-center gap-[25px]">
              <h2 className="max-w-[699px] text-center font-heading-h2 text-[40px] font-[number:var(--heading-h2-font-weight)] leading-[44px] tracking-[var(--heading-h2-letter-spacing)] text-white [font-style:var(--heading-h2-font-style)] sm:text-[52px] sm:leading-[56px] lg:text-[length:var(--heading-h2-font-size)] lg:leading-[var(--heading-h2-line-height)]">
                Pre-Register &amp; <br />
                Get Exclusive Rewards!
              </h2>
              <ul className="flex w-full flex-wrap items-start justify-center gap-x-5 gap-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="inline-flex items-center gap-2.5"
                  >
                    <img
                      className="h-6 shrink-0"
                      alt="Benefit icon"
                      src="/figmaAssets/frame-2147225936.svg"
                    />
                    <span className="font-body-body-16-m text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-white [font-style:var(--body-body-16-m-font-style)]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <form className="w-full max-w-[484px]" suppressHydrationWarning>
              <div className="flex h-[60px] items-center rounded-[990px] bg-colorswhite p-2 shadow-none">
                <label htmlFor="creator-community-email" className="sr-only">
                  Email Address
                </label>
                <Input
                  id="creator-community-email"
                  type="email"
                  placeholder="Email Address"
                  suppressHydrationWarning
                  className="h-full flex-1 border-0 bg-transparent px-4 font-body-body-16-m text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black shadow-none placeholder:text-black focus-visible:ring-0 [font-style:var(--body-body-16-m-font-style)]"
                />
                <Button
                  type="submit"
                  className="relative h-auto rounded-[999px] border-0 px-8 py-2.5 font-button-button-16 text-[length:var(--button-button-16-font-size)] font-[number:var(--button-button-16-font-weight)] leading-[var(--button-button-16-line-height)] tracking-[var(--button-button-16-letter-spacing)] text-white shadow-[0px_42px_107px_#ff580057,inset_0px_1px_3px_2px_#ffecda99,inset_0px_1px_14px_2px_#ffecda99] [background:url(/figmaAssets/frame-1618872851-1.png)_50%_50%_/_cover,linear-gradient(95deg,rgba(239,159,34,1)_0%,rgba(222,18,123,1)_100%)] [font-style:var(--button-button-16-font-style)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[999px] before:p-px before:content-[''] before:[background:linear-gradient(180deg,rgba(224,27,115,0.2)_0%,rgba(240,159,51,0.2)_100%)] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]"
                >
                  <span className="relative z-[2]">Submit</span>
                  <img
                    className="pointer-events-none absolute left-1/2 top-0 z-[1] h-11 w-[109px] -translate-x-1/2"
                    alt="Button highlight"
                    src="/figmaAssets/vector-9-2.svg"
                  />
                </Button>
              </div>
            </form>
          </header>
          <div className="relative -mb-10 overflow-hidden sm:-mb-12 lg:-mb-16">
            <div className="mx-auto flex min-h-[280px] w-full max-w-[1030px] items-end justify-center gap-0">
              {cards.map((card) => (
                <article key={card.id} className={card.wrapperClassName}>
                  <div className={card.imageWrapperClassName}>
                    <img
                      className={card.imageClassName}
                      alt={card.imageAlt}
                      src={card.imageSrc}
                    />
                    <div className={card.badge.className}>
                      <span className={card.badge.textClassName}>
                        {card.badge.label}
                      </span>
                    </div>
                    <div className={card.views.className}>
                      <img
                        className={card.views.iconClassName}
                        alt={card.views.iconAlt}
                        src={card.views.iconSrc}
                      />
                      <span className={card.views.textClassName}>
                        {card.views.text}
                      </span>
                    </div>
                    <img
                      className={card.iconClassName}
                      alt={card.iconAlt}
                      src={card.iconSrc}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
