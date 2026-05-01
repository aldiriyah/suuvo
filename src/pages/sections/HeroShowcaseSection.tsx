"use client";
import { Card, CardContent } from "@/components/ui/card";

const showcaseCards = [
  {
    title: "Creator Subscriptions",
    description: "Tiered recurring monetization",
    iconSrc: "/figmaAssets/frame-1686556813-1.svg",
    iconAlt: "Creator subscriptions icon",
    textColor: "text-pink-text",
    gradientClass:
      "bg-[linear-gradient(180deg,rgba(255,153,203,1)_0%,rgba(255,61,156,1)_100%)]",
    rotateClass: "-rotate-6",
    contentPositionClass: "justify-end",
    iconRotateClass: "rotate-6",
    decorative: (
      <img
        className="absolute left-[-77.12%] top-[-18.07%] h-[148.65%] w-[245.51%] rotate-6 object-cover"
        alt=""
        src="/figmaAssets/vector-2.svg"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "VIP Rooms",
    description: "Premium gated experiences",
    iconSrc: "/figmaAssets/frame-1686556813-2.svg",
    iconAlt: "VIP rooms icon",
    textColor: "text-yellow-text",
    gradientClass:
      "bg-[linear-gradient(180deg,rgba(255,214,143,1)_0%,rgba(255,183,61,1)_100%)]",
    rotateClass: "rotate-[5deg]",
    contentPositionClass: "justify-start",
    iconRotateClass: "rotate-[-5deg]",
    media: (
      <div className="mt-auto h-[199px] w-full overflow-hidden rounded-[20px] bg-black">
        <img
          className="ml-[-8.1px] mt-[-12.9px] h-[224.74px] w-[320.19px] rotate-[-5deg] object-cover"
          alt="VIP rooms preview"
          src="/figmaAssets/rectangle-29-2.png"
        />
      </div>
    ),
  },
  {
    title: "Wallet & Rewards System",
    description: "Transparent earnings & rewards.",
    iconSrc: "/figmaAssets/frame-1686556828.svg",
    iconAlt: "Wallet and rewards icon",
    textColor: "text-blue-text",
    gradientClass:
      "bg-[linear-gradient(180deg,rgba(166,163,255,1)_0%,rgba(100,95,254,1)_100%)]",
    rotateClass: "rotate-[3.5deg]",
    contentPositionClass: "justify-end",
    iconRotateClass: "rotate-[-3.5deg]",
    decorative: (
      <img
        className="absolute bottom-[-61px] right-[-91px] h-[832px] w-[371px] rotate-[-3.5deg] object-cover"
        alt=""
        src="/figmaAssets/vector.svg"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Business Tools",
    description: "Creator business tool, analytics",
    iconSrc: "/figmaAssets/frame-1686556813.svg",
    iconAlt: "Business tools icon",
    textColor: "text-blue-text",
    gradientClass:
      "bg-[linear-gradient(0deg,rgba(31,136,255,1)_0%,rgba(112,180,255,1)_100%)]",
    rotateClass: "-rotate-6",
    contentPositionClass: "justify-start",
    iconRotateClass: "rotate-6",
    media: (
      <div
        className="mt-auto h-[199px] w-full rounded-[20px] bg-cover bg-[50%_50%]"
        style={{ backgroundImage: "url(/figmaAssets/container-5.svg)" }}
        aria-hidden="true"
      />
    ),
  },
];

export default function HeroShowcaseSection (): JSX.Element{
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[1316px] items-start justify-center overflow-x-auto px-3 py-4 md:px-4">
        <div className="flex min-w-max items-start gap-0">
          {showcaseCards.map((card) => (
            <Card
              key={card.title}
              className={`relative h-[434px] w-[336px] shrink-0 overflow-hidden rounded-[30px] border-0 shadow-none ${card.gradientClass} ${card.rotateClass}`}
            >
              {card.decorative}
              <CardContent
                className={`relative flex h-full flex-col p-6 ${card.contentPositionClass}`}
              >
                <div className="relative z-10 flex w-full flex-col gap-7">
                  <img
                    className={`h-[65.42px] w-[60.97px] ${card.iconRotateClass}`}
                    alt={card.iconAlt}
                    src={card.iconSrc}
                  />
                  <header className="flex flex-col gap-4">
                    <h3
                      className={`[font-family:'Mona_Sans',Helvetica] text-[32px] font-semibold leading-9 tracking-[-0.64px] ${card.textColor}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`[font-family:'Mona_Sans',Helvetica] text-lg font-medium leading-[23.4px] tracking-[-0.36px] ${card.textColor}`}
                    >
                      {card.description}
                    </p>
                  </header>
                </div>
                {card.media && (
                  <div className="relative z-10 mt-auto">{card.media}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
