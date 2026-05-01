"use client";
import { Card, CardContent } from "@/components/ui/card";

const featureCards = {
  left: [
    {
      title: "Authentic Connections",
      description: "Build genuine relationships with like-minded individuals.",
      icon: "/figmaAssets/container-2.svg",
    },
    {
      title: "Global Reach",
      description: "Connect with people across 50+ countries effortlessly.",
      icon: "/figmaAssets/container-4.svg",
    },
  ],
  right: [
    {
      title: "Personalized Experience",
      description: "Tailored content and recommendations just for you.",
      icon: "/figmaAssets/container-6.svg",
    },
    {
      title: "Community Support",
      description: "Join thriving communities around your interests.",
      icon: "/figmaAssets/container-3.svg",
    },
  ],
};

const profileStats = [
  { value: "435", label: "Posts" },
  { value: "32", label: "Following" },
  { value: "583", label: "Followers" },
];

const profileTabs = [
  { label: "Posts", active: false },
  { label: "Momentz", active: false },
  { label: "Saved", active: false },
  { label: "Premium  content", active: true },
];

const mediaCards = [
  {
    image: "/figmaAssets/rectangle-24-2.png",
    videoIcon: "/figmaAssets/fluent-video-clip-16-filled-1.svg",
    viewIcon: "/figmaAssets/lsicon-view-outline-5.svg",
    views: "24.6k",
    newBadge: true,
    viewedBadge: false,
  },
  {
    image: "/figmaAssets/rectangle-25-2.png",
    videoIcon: "/figmaAssets/fluent-video-clip-16-filled-1.svg",
    viewIcon: "/figmaAssets/lsicon-view-outline-3.svg",
    views: "24.6k",
    newBadge: true,
    viewedBadge: false,
  },
  {
    image: "/figmaAssets/rectangle-26-1.png",
    videoIcon: "",
    viewIcon: "/figmaAssets/lsicon-view-outline-5.svg",
    views: "24.6k",
    newBadge: false,
    viewedBadge: false,
  },
  {
    image: "/figmaAssets/rectangle-25-2.png",
    videoIcon: "/figmaAssets/fluent-video-clip-16-filled-1.svg",
    viewIcon: "/figmaAssets/lsicon-view-outline-3.svg",
    views: "24.6k",
    newBadge: true,
    viewedBadge: false,
  },
  {
    image: "/figmaAssets/rectangle-24-2.png",
    videoIcon: "/figmaAssets/fluent-video-clip-16-filled-1.svg",
    viewIcon: "/figmaAssets/lsicon-view-outline-5.svg",
    views: "24.6k",
    newBadge: true,
    viewedBadge: false,
  },
  {
    image: "/figmaAssets/rectangle-29-2.png",
    videoIcon: "/figmaAssets/solar-copy-bold-1.svg",
    viewIcon: "/figmaAssets/lsicon-view-outline-3.svg",
    views: "24.6k",
    newBadge: false,
    viewedBadge: true,
  },
];

const quickActions = [
  {
    label: "Find Friends",
    icon: "/figmaAssets/frame-4.svg",
    imageIcon: false,
  },
  {
    label: "Profile Views",
    icon: "/figmaAssets/frame-1000002933.svg",
    imageIcon: false,
  },
  {
    label: "Add School",
    icon: "/figmaAssets/whatsapp-image-2026-03-23-at-7-51-14-pm--1--removebg-preview-1.png",
    imageIcon: true,
  },
  {
    label: "Expired stories",
    icon: "/figmaAssets/image-removebg-preview--3--1.png",
    imageIcon: true,
  },
  {
    label: "Your Orders",
    icon: "/figmaAssets/whatsapp-image-2026-03-23-at-7-51-14-pm-removebg-preview-1.png",
    imageIcon: false,
  },
];

const glassButtonClass =
  "relative flex items-center justify-center gap-[8.5px] rounded-[11.91px] border-[none] bg-[linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%),linear-gradient(0deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.04)_100%)] shadow-[inset_0px_0px_3.4px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[11.91px] before:p-[0.85px] before:content-[''] before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.16)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]";

const quickActionButtonClass =
  "relative flex h-11 w-11 items-center justify-center gap-[8.5px] rounded-[54.43px] border-[none] bg-[linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_100%),linear-gradient(0deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.04)_100%)] shadow-[inset_0px_0px_3.4px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[54.43px] before:p-[0.85px] before:content-[''] before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.16)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]";

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <Card className="w-full rounded-3xl border-0 bg-white shadow-[1px_6px_13px_#0000000a,4px_23px_23px_#00000008,9px_52px_32px_#00000005,17px_92px_38px_#00000003,26px_144px_41px_transparent]">
      <CardContent className="flex min-h-[241px] flex-col items-start px-[30px] py-[30px]">
        <img className="h-[58px] w-[58px]" alt="" src={icon} />
        <div className="mt-[30px] flex flex-col gap-1.5">
          <h3 className="font-heading-h5 text-[length:var(--heading-h5-font-size)] font-[number:var(--heading-h5-font-weight)] leading-[var(--heading-h5-line-height)] tracking-[var(--heading-h5-letter-spacing)] text-black [font-style:var(--heading-h5-font-style)]">
            {title}
          </h3>
          <p className="max-w-[327px] font-body-body-18 text-[length:var(--body-body-18-font-size)] font-[number:var(--body-body-18-font-weight)] leading-[var(--body-body-18-line-height)] tracking-[var(--body-body-18-letter-spacing)] text-black [font-style:var(--body-body-18-font-style)]">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const CoreFeatureGridSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-[59px]">
        <header className="flex max-w-[560px] flex-col items-center gap-[22px] text-center">
          <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] leading-[var(--heading-h2-line-height)] tracking-[var(--heading-h2-letter-spacing)] text-black [font-style:var(--heading-h2-font-style)] max-md:text-[40px] max-md:leading-[46px]">
            Discover Suuvo&apos;s Benefits
          </h2>
          <p className="font-body-body-16-m text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black [font-style:var(--body-body-16-m-font-style)]">
            Unlock a world of meaningful connections, tailored experiences, and
            seamless social interaction.
          </p>
        </header>
        <div className="grid w-full grid-cols-1 items-end justify-center gap-[21px] lg:grid-cols-[minmax(0,1fr)_400px_minmax(0,1fr)]">
          <div className="flex flex-col gap-[21px]">
            {featureCards.left.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
          <div className="relative mx-auto w-full max-w-[400px] overflow-hidden">
            <div className="relative h-[515px] w-full">
              <img
                className="absolute left-0 top-[111px] h-[404px] w-full"
                alt="Image background"
                src="/figmaAssets/image--background-image-.svg"
              />
              <div className="absolute left-1/2 top-3 h-[756px] w-[370px] -translate-x-1/2">
                <div className="absolute left-1/2 top-0 h-[724px] w-[334px] -translate-x-1/2 overflow-hidden rounded-[37.31px] bg-white">
                  <div className="absolute inset-x-0 top-0 h-[182px] overflow-hidden">
                    <img
                      className="h-full w-full"
                      alt="Mask group"
                      src="/figmaAssets/mask-group-4.png"
                    />
                    <div className="absolute left-[17px] top-[38px] inline-flex items-center gap-[13.61px]">
                      <button
                        type="button"
                        aria-label="Go back"
                        className="relative h-[33.17px] w-[33.17px] rounded-[850.49px] border-[none] bg-[#ffffff05] shadow-[inset_0px_1.7px_3.4px_#ffffff66,inset_0px_-1.7px_3.4px_#00000033] backdrop-blur-[4.25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.25px)_brightness(100%)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[850.49px] before:p-[0.43px] before:content-[''] before:[background:linear-gradient(225deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0.05)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]"
                      >
                        <img
                          className="absolute left-1.5 top-[7px] h-5 w-5"
                          alt=""
                          src="/figmaAssets/hicon---outline---left-2-2.svg"
                        />
                      </button>
                    </div>
                    <div className="absolute left-1/2 top-2 h-[21px] w-[289px] -translate-x-1/2">
                      <div className="absolute left-0 top-0 flex h-[91.32%] w-[6.78%] items-center justify-center [font-family:'Lato',Helvetica] text-[10.2px] font-medium leading-[17px] tracking-[-0.43px] text-white">
                        7:11
                      </div>
                      <div className="absolute left-[93.97%] top-[36.38%] flex h-[41.1%] w-[5.34%] bg-[url(/figmaAssets/battery-4.svg)] bg-[100%_100%]">
                        <img
                          className="w-[7.03px] flex-1"
                          alt=""
                          src="/figmaAssets/fill-4.svg"
                        />
                      </div>
                      <img
                        className="absolute left-[89.21%] top-[38.5%] h-[36.53%] w-[3.3%]"
                        alt=""
                        src="/figmaAssets/wifi-3.svg"
                      />
                      <img
                        className="absolute left-[84%] top-[38.83%] h-[36.77%] w-[3.78%]"
                        alt=""
                        src="/figmaAssets/cellular-2.svg"
                      />
                    </div>
                    <img
                      className="absolute left-[255px] top-[38px] h-[33px] w-[62px]"
                      alt=""
                      src="/figmaAssets/group-1104.png"
                    />
                    <button
                      type="button"
                      className={`${glassButtonClass} absolute left-[232px] top-[133px] h-[25px] w-[85px] p-[12.76px]`}
                    >
                      <span className="relative z-[2] mx-[-3.73px] my-[-9.78px] flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-[10.2px] font-semibold leading-[17px] tracking-[-0.43px] text-black">
                        Change Image
                      </span>
                    </button>
                  </div>
                  <div className="absolute left-[17px] top-[138px] flex h-[88px] w-[88px]">
                    <img
                      className="h-[88.45px] w-[88.45px] rounded-[850.49px] border-[0.43px] border-solid border-transparent object-cover backdrop-blur-[4.25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.25px)_brightness(100%)]"
                      alt=""
                      src="/figmaAssets/rectangle-18.png"
                    />
                  </div>
                  <div className="absolute left-[134px] top-[191px] inline-flex items-center gap-[13.61px]">
                    {profileStats.map((stat, index) => (
                      <div
                        key={stat.label}
                        className="inline-flex items-center gap-[13.61px]"
                      >
                        <div className="[font-family:'Inter',Helvetica] text-center text-[11.9px] font-normal leading-[17px] tracking-[-0.43px] text-black">
                          <span className="tracking-[-0.05px]">
                            {stat.value}
                            <br />
                          </span>
                          <span className="font-light tracking-[-0.05px]">
                            {stat.label}
                          </span>
                        </div>
                        {index < profileStats.length - 1 && (
                          <img
                            className="h-[18.71px] w-px"
                            alt=""
                            src="/figmaAssets/line-1.svg"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    aria-label="More options"
                    className="absolute left-[293px] top-12"
                  >
                    <img
                      className="h-[15px] w-[15px]"
                      alt=""
                      src="/figmaAssets/hicon---outline---menu-kebab-1.svg"
                    />
                  </button>
                  <div className="absolute left-[17px] top-[236px] flex w-[300px] flex-col">
                    <div className="flex w-[290.58px] flex-col gap-[10.21px]">
                      <div className="flex w-[156.49px] flex-col gap-[5.1px]">
                        <div className="[font-family:'Inter',Helvetica] text-[11.9px] font-bold leading-[17px] tracking-[-0.43px] text-black">
                          Elizabeth
                        </div>
                        <div className="w-[163px]">
                          <div className="[font-family:'Inter',Helvetica] whitespace-nowrap text-[10.2px] font-normal leading-[17px] tracking-[-0.43px] text-[#000000e6]">
                            I am an innovator
                          </div>
                          <div className="mt-[3px] [font-family:'Inter',Helvetica] text-[10.2px] font-normal leading-[10.2px] tracking-[-0.43px] text-[#000000e6]">
                            <span className="tracking-[-0.04px] leading-[17.5px]">
                              University of California, Los Angeles
                              <br />
                            </span>
                            <span className="text-[10.9px] tracking-[-0.05px] leading-[17.5px]">
                              Los Angeles, CA
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[10.21px]">
                        <button
                          type="button"
                          className={`${glassButtonClass} h-[24.66px] w-[85.05px] p-[12.76px]`}
                        >
                          <img
                            className="relative z-[2] my-[-7.94px] h-[15.02px] w-[15.02px]"
                            alt=""
                            src="/figmaAssets/hicon---outline---send-2.svg"
                          />
                          <span className="relative z-[2] my-[-4.78px] flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-[10.2px] font-semibold leading-[17px] tracking-[-0.43px] text-black">
                            share
                          </span>
                        </button>
                        <button
                          type="button"
                          className={`${glassButtonClass} h-[24.66px] w-[85.05px] px-[14.46px] py-[12.76px]`}
                        >
                          <img
                            className="relative z-[2] ml-[-8.34px] my-[-7.65px] h-[14.46px] w-[14.46px]"
                            alt=""
                            src="/figmaAssets/boxicons-edit.svg"
                          />
                          <span className="relative z-[2] mr-[-8.34px] my-[-9.78px] flex w-fit items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-[10.2px] font-semibold leading-[17px] tracking-[-0.43px] text-black">
                            Edit profile
                          </span>
                        </button>
                      </div>
                    </div>
                    <img
                      className="mt-[13.8px] h-px w-[300.22px]"
                      alt=""
                      src="/figmaAssets/line-3.svg"
                    />
                    <nav className="mt-[111.3px] flex w-[300.22px] flex-col gap-[18.71px]">
                      <img
                        className="h-px w-[300.22px]"
                        alt=""
                        src="/figmaAssets/line-3.svg"
                      />
                      <div className="flex items-start justify-between gap-4">
                        {profileTabs.map((tab) => (
                          <button
                            key={tab.label}
                            type="button"
                            className="flex flex-col items-start gap-[9.36px] text-left"
                          >
                            <span
                              className={`[font-family:'Inter',Helvetica] whitespace-nowrap text-[10.2px] leading-[17px] tracking-[-0.43px] ${
                                tab.active
                                  ? "font-semibold text-black"
                                  : "font-normal text-[#000000cc]"
                              }`}
                            >
                              {tab.label}
                            </span>
                            {tab.active && (
                              <img
                                className="h-px w-[90.15px]"
                                alt=""
                                src="/figmaAssets/line-4-1.svg"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </nav>
                    <div className="mt-[15.1px] ml-[-17px] grid w-[331.6px] grid-cols-3 gap-y-[1.43px] gap-x-[2px]">
                      {mediaCards.map((item, index) => (
                        <article
                          key={`${item.image}-${index}`}
                          className="relative h-[170px] w-[109px] overflow-hidden rounded-[7.54px]"
                        >
                          <img
                            className="h-[169.57px] w-[109.28px] rounded-[7.54px] object-cover"
                            alt=""
                            src={item.image}
                          />
                          {item.videoIcon ? (
                            <img
                              className="absolute left-0 top-0 h-[22.11px] w-[22.11px]"
                              alt=""
                              src={item.videoIcon}
                            />
                          ) : null}

                          {item.viewedBadge && (
                            <div className="absolute right-[5px] top-[5px] flex h-[16.01px] w-[40.86px] items-center justify-center rounded-[70.65px] bg-[#5a60a67a] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]">
                              <span className="[font-family:'Inter',Helvetica] whitespace-nowrap text-center text-[7.5px] font-normal leading-[14.1px] tracking-[-0.35px] text-white">
                                Viewed
                              </span>
                            </div>
                          )}

                          <div className="absolute left-[5px] top-[146px] flex h-[18.84px] items-center justify-center gap-[1.88px] rounded-[94.2px] bg-[#ffffff59] px-[7.54px] py-[3.77px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]">
                            <img
                              className="h-[11.3px] w-[11.3px]"
                              alt=""
                              src={item.viewIcon}
                            />
                            <span className="[font-family:'Inter',Helvetica] whitespace-nowrap text-center text-[11.3px] font-normal leading-[18.8px] tracking-[-0.47px] text-white">
                              {item.views}
                            </span>
                          </div>
                          {item.newBadge && (
                            <div className="absolute right-[3px] top-[4.7px] flex h-[15.54px] min-w-[40.73px] items-center justify-center rounded-[94.2px] bg-[#ffbd5959] px-[7.54px] py-[3.77px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]">
                              <span className="[font-family:'Inter',Helvetica] whitespace-nowrap text-center text-[11.3px] font-normal leading-[18.8px] tracking-[-0.47px] text-white">
                                New
                              </span>
                            </div>
                          )}
                        </article>
                      ))}
                    </div>
                  </div>
                  <div className="absolute left-[-1px] top-[364px] h-[92px] w-[337px]">
                    <div className="absolute inset-0 h-[92px] w-[335px] bg-[#bfbfbf2b]" />
                    <h3 className="absolute left-[18px] top-[5px] [font-family:'Inter',Helvetica] whitespace-nowrap text-[11.9px] font-bold leading-[17px] tracking-[-0.43px] text-black">
                      Quick Actions
                    </h3>
                    <div className="absolute left-[18px] top-[29px] inline-flex items-start gap-[17.01px]">
                      {quickActions.map((action) => (
                        <button
                          key={action.label}
                          type="button"
                          className="flex w-[46.23px] flex-col items-center gap-[5.1px]"
                        >
                          <div className={quickActionButtonClass}>
                            {action.imageIcon ? (
                              <div
                                className="relative z-[2] h-[13.68px] w-[13.68px] bg-cover bg-[50%_50%]"
                                style={{
                                  backgroundImage: `url(${action.icon})`,
                                }}
                              />
                            ) : (
                              <img
                                className={`relative z-[2] ${action.label === "Your Orders" ? "h-[14.46px] w-[14.46px] object-cover" : "h-11 w-11"}`}
                                alt=""
                                src={action.icon}
                              />
                            )}
                          </div>
                          <span className="[font-family:'Inter',Helvetica] text-center text-[6.8px] font-semibold leading-[16.4px] tracking-[-0.41px] text-black">
                            {action.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <img
                  className="absolute left-1/2 top-0 h-[503px] w-[370px] -translate-x-1/2 object-cover"
                  alt="Mockup"
                  src="/figmaAssets/mockup-6.png"
                />
              </div>
              <div className="absolute -bottom-[33px] -left-3 h-16 w-[420px] bg-white blur-lg" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {featureCards.right.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
