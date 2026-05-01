"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    featureLabel: "Feature / 02",
    title: "LIVE & PK Battles",
    description:
      "Real-time creator battles where audiences engage, send gifts, and interact dynamically, creating high-energy entertainment experiences that boost visibility, competition, and engagement.",
    subheading: "Live Competitive Engagement",
    bullets: [
      "Watch creators compete in real-time live battles",
      "Support through gifting and live audience reactions",
      "Interactive entertainment between creators and fans",
    ],
    backgroundClass:
      "bg-[url(/figmaAssets/union-2.svg)] bg-[100%_100%] bg-no-repeat",
    accentLabel: "Creator Battles",
    accentLabelClass: "text-white",
    accentIcon: "/figmaAssets/icon-1.svg",
    accentDecoration: "/figmaAssets/image-272.png",
    decorationTop: "/figmaAssets/image-1347.png",
    mockup: (
      <div className="relative flex h-full w-full items-center justify-end pr-6 sm:pr-10">
        <div className="relative h-[360px] w-[320px] sm:h-[430px] sm:w-[420px]">
          <img
            className="absolute left-[22px] top-[24px] h-[360px] w-[176px] -rotate-6 rounded-[28px] object-cover shadow-[0_22px_60px_rgba(0,0,0,0.26)] sm:h-[430px] sm:w-[210px]"
            alt="Live battle mockup"
            src="/figmaAssets/mockup-6.png"
          />
          <img
            className="absolute right-[12px] top-[18px] h-[330px] w-[162px] rotate-[4deg] rounded-[28px] object-cover shadow-[0_22px_60px_rgba(0,0,0,0.3)] sm:h-[400px] sm:w-[194px]"
            alt="Live battle mockup"
            src="/figmaAssets/mockup-6.png"
          />
        </div>
      </div>
    ),
  },
  {
    featureLabel: "Feature / 03",
    title: "Suuvo Shops",
    description:
      "Multi-screen live selling platform for interactive shopping, real-time engagement, and seamless storefront experiences for creators and brands.",
    subheading: "Real-Time Shopping Experience",
    bullets: [
      "Host live product showcases with real-time engagement",
      "Sell products directly during live streaming sessions",
      "Integrated checkout for seamless purchase experience",
    ],
    backgroundClass:
      "bg-[url(/figmaAssets/union.svg)] bg-[100%_100%] bg-no-repeat",
    accentLabel: "Live Commerce",
    accentLabelClass: "text-black",
    accentIcon: "/figmaAssets/icon-2.svg",
    accentDecoration: "/figmaAssets/image-823.png",
    decorationTop: "/figmaAssets/image-325.png",
    mockup: (
      <div className="relative flex h-full w-full items-center justify-end pr-6 sm:pr-10">
        <div className="relative h-[360px] w-[320px] sm:h-[430px] sm:w-[420px]">
          <img
            className="absolute left-[20px] top-[22px] h-[360px] w-[176px] -rotate-6 rounded-[28px] object-cover shadow-[0_22px_60px_rgba(0,0,0,0.22)] sm:h-[430px] sm:w-[210px]"
            alt="Live commerce mockup"
            src="/figmaAssets/mockup-6.png"
          />
          <img
            className="absolute right-[12px] top-[18px] h-[330px] w-[162px] rotate-[4deg] rounded-[28px] object-cover shadow-[0_22px_60px_rgba(0,0,0,0.28)] sm:h-[400px] sm:w-[194px]"
            alt="Live commerce mockup"
            src="/figmaAssets/mockup-6.png"
          />
        </div>
      </div>
    ),
  },
  {
    featureLabel: "Feature / 04",
    title: "Competitions & Games",
    description:
      "Global skill-based competitions where users compete, play, and earn rewards through engaging challenges, rankings, and real-time interactive gameplay experiences.",
    subheading: "Competitive Experience",
    bullets: [
      "Join global tournaments and competitive skill-based challenges",
      "Compete in real-time interactive gaming experiences",
      "Earn rewards based on performance and rankings",
    ],
    backgroundClass:
      "bg-[url(/figmaAssets/union-3.svg)] bg-[100%_100%] bg-no-repeat",
    accentLabel: "Skill Contests",
    accentLabelClass: "text-white",
    accentIcon: "/figmaAssets/icon-4.svg",
    accentDecoration: "/figmaAssets/image-1294.png",
    decorationTop: "/figmaAssets/image-372.png",
    mockup: (
      <div className="relative flex h-full w-full items-center justify-end pr-6 sm:pr-10">
        <div className="relative h-[360px] w-[320px] sm:h-[430px] sm:w-[420px]">
          <img
            className="absolute left-[22px] top-[24px] h-[360px] w-[176px] -rotate-6 rounded-[28px] object-cover shadow-[0_22px_60px_rgba(0,0,0,0.25)] sm:h-[430px] sm:w-[210px]"
            alt="Games mockup"
            src="/figmaAssets/mockup-6.png"
          />
          <img
            className="absolute right-[12px] top-[18px] h-[330px] w-[162px] rotate-[4deg] rounded-[28px] object-cover shadow-[0_22px_60px_rgba(0,0,0,0.3)] sm:h-[400px] sm:w-[194px]"
            alt="Games mockup"
            src="/figmaAssets/mockup-6.png"
          />
        </div>
      </div>
    ),
  },
];

const bulletIcon = "/figmaAssets/frame-2147225936.svg";

export default function SocialPromiseSection (): JSX.Element {
  return (
    <section className="relative w-full px-4 py-12 sm:px-6 lg:px-0">
      <div className="mx-auto flex w-full max-w-[1070px] flex-col items-center gap-[60px]">
        <header className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-5">
            <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] leading-[var(--heading-h2-line-height)] tracking-[var(--heading-h2-letter-spacing)] text-black [font-style:var(--heading-h2-font-style)]">
              Core Features for <br />
              Modern Social
            </h2>
            <p className="max-w-[760px] font-body-body-16-m text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black [font-style:var(--body-body-16-m-font-style)]">
              A modern platform to share, explore, and interact freely with a
              simple, fast, and enjoyable experience without overwhelming users.
            </p>
          </div>
          <Button
            type="button"
            className="relative h-auto min-w-[200px] overflow-hidden rounded-full border-0 px-10 py-4 font-button-button-16 text-[length:var(--button-button-16-font-size)] font-[number:var(--button-button-16-font-weight)] leading-[var(--button-button-16-line-height)] tracking-[var(--button-button-16-letter-spacing)] text-white shadow-[0px_3.71px_4.85px_#ff580027,0px_10.27px_13.4px_#ff580038,0px_24.72px_32.26px_#ff580030,0px_42px_107px_#ff580057,inset_0px_1px_3px_2px_#ffecda99,inset_0px_1px_14px_2px_#ffecda99] [background:url(/figmaAssets/frame-1618872851-1.png)_50%_50%_/_cover,linear-gradient(95deg,rgba(239,159,34,1)_0%,rgba(222,18,123,1)_100%)] [font-style:var(--button-button-16-font-style)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[999px] before:p-px before:[background:linear-gradient(180deg,rgba(224,27,115,0.2)_0%,rgba(240,159,51,0.2)_100%)] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]"
          >
            <span className="relative z-[2]">Join Waitlist</span>
            <img
              className="pointer-events-none absolute left-1/2 top-0 h-14 w-[109px] -translate-x-1/2"
              alt="Vector"
              src="/figmaAssets/vector-9.svg"
            />
          </Button>
        </header>
        <div className="flex w-full flex-col gap-10">
          <img
            className="h-auto w-full"
            alt="Container"
            src="/figmaAssets/container.png"
          />
          {features.map((feature) => (
            <Card
              key={feature.featureLabel}
              className={`relative overflow-hidden rounded-none border-0 shadow-none ${feature.backgroundClass}`}
            >
              <CardContent className="relative min-h-[642px] p-0">
                <div className="grid min-h-[642px] grid-cols-1 lg:grid-cols-[1fr_452px]">
                  <article className="relative flex flex-col justify-start px-8 py-16 sm:px-10 lg:px-10">
                    <span className="mb-8 font-body-body-12 text-[length:var(--body-body-12-font-size)] font-[number:var(--body-body-12-font-weight)] leading-[var(--body-body-12-line-height)] tracking-[var(--body-body-12-letter-spacing)] text-black [font-style:var(--body-body-12-font-style)]">
                      {feature.featureLabel}
                    </span>
                    <div className="flex max-w-[499px] flex-col gap-8">
                      <div className="flex flex-col gap-5">
                        <h3 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] font-[number:var(--heading-h3-font-weight)] leading-[var(--heading-h3-line-height)] tracking-[var(--heading-h3-letter-spacing)] text-black [font-style:var(--heading-h3-font-style)]">
                          {feature.title}
                        </h3>
                        <p className="max-w-[460px] font-body-body-16-m text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black [font-style:var(--body-body-16-m-font-style)]">
                          {feature.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4">
                        <h4 className="font-heading-h5 text-[length:var(--heading-h5-font-size)] font-[number:var(--heading-h5-font-weight)] leading-[var(--heading-h5-line-height)] tracking-[var(--heading-h5-letter-spacing)] text-black [font-style:var(--heading-h5-font-style)]">
                          {feature.subheading}
                        </h4>
                        <ul className="flex flex-col gap-3">
                          {feature.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2.5"
                            >
                              <img
                                className="h-6 w-auto shrink-0"
                                alt="Bullet icon"
                                src={bulletIcon}
                              />
                              <span className="font-body-body-16-m text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black [font-style:var(--body-body-16-m-font-style)]">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute bottom-10 left-8 flex items-center gap-3 sm:left-16">
                      <img
                        className="h-10 w-10 sm:h-[45px] sm:w-[45px]"
                        alt="Icon"
                        src={feature.accentIcon}
                      />
                      <span
                        className={`[font-family:'Shadows_Into_Light_Two',Helvetica] text-[22px] leading-[26px] tracking-[-0.44px] ${feature.accentLabelClass}`}
                      >
                        {feature.accentLabel}
                      </span>
                    </div>
                    <img
                      className="pointer-events-none absolute bottom-[92px] left-[290px] hidden h-14 w-14 object-cover lg:block"
                      alt="Decoration"
                      src={feature.accentDecoration}
                    />
                    <img
                      className="pointer-events-none absolute left-[428px] top-[124px] hidden h-[66px] w-[66px] object-cover lg:block"
                      alt="Decoration"
                      src={feature.decorationTop}
                    />
                  </article>
                  <aside className="relative hidden lg:block">
                    {feature.mockup}
                  </aside>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
