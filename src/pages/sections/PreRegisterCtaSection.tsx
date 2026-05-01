"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigationLinks = [
  "Home",
  "Momentz",
  "Live",
  "PK Battles",
  "Shop",
  "Love Notes",
  "AI Features",
];

const legalLinks = [
  "Privacy Policy",
  "Terms & condition",
  "Community Guidelines",
  "Creator Policies",
];

const supportLinks = ["Help Center", "Contact Support", "Report a Problem"];

const contactItems = [
  {
    icon: "/figmaAssets/mail-01.svg",
    alt: "Mail",
    text: "info@suuvo.com",
  },
  {
    icon: "/figmaAssets/location-10.svg",
    alt: "Location",
    text: "Worldwide",
  },
];

const footerColumns = [
  { title: "Navigation", items: navigationLinks },
  { title: "Legal", items: legalLinks },
  { title: "Support", items: supportLinks },
];

export default function PreRegisterCtaSection (): JSX.Element {
  return (
    <section className="w-full px-6 pb-8 sm:px-8 lg:px-[100px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-16">
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-5">
              <img
                className="h-12 w-[185.56px]"
                alt="Logo"
                src="/figmaAssets/logo.svg"
              />
              <p className="font-body-body-16-m text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black [font-style:var(--body-body-16-m-font-style)]">
                Create. Go live. Connect. Sell. Grow.
                <br />
                All in one place.
              </p>
            </div>
            <Button
              type="button"
              className="relative h-auto w-full overflow-hidden rounded-[999px] border-none px-10 py-4 font-button-button-16 text-[length:var(--button-button-16-font-size)] font-[number:var(--button-button-16-font-weight)] leading-[var(--button-button-16-line-height)] tracking-[var(--button-button-16-letter-spacing)] text-white shadow-[0px_3.71px_4.85px_#ff580027,0px_10.27px_13.4px_#ff580038,0px_24.72px_32.26px_#ff580030,0px_42px_107px_#ff580057,inset_0px_1px_3px_2px_#ffecda99,inset_0px_1px_14px_2px_#ffecda99] [background:url(/figmaAssets/frame-1618872851-1.png)_50%_50%_/_cover,linear-gradient(95deg,rgba(239,159,34,1)_0%,rgba(222,18,123,1)_100%)] [font-style:var(--button-button-16-font-style)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[999px] before:bg-[linear-gradient(180deg,rgba(224,27,115,0.2)_0%,rgba(240,159,51,0.2)_100%)] before:p-px before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]"
            >
              <span className="relative z-[2] whitespace-nowrap text-[#ffffff]">
                Join Waitlist
              </span>
              <img
                className="pointer-events-none absolute left-1/2 top-0 h-14 w-[109px] -translate-x-1/2"
                alt="Vector"
                src="/figmaAssets/vector-9-3.svg"
              />
            </Button>
          </div>
          <nav
            aria-label="Footer navigation"
            className="grid w-full grid-cols-2 gap-10 sm:grid-cols-2 lg:w-auto lg:grid-cols-4 lg:gap-x-[100px] lg:gap-y-0"
          >
            {footerColumns.map((column) => (
              <section
                key={column.title}
                className="flex flex-col items-start gap-4"
              >
                <h2 className="[font-family:'Mona_Sans',Helvetica] text-base font-semibold leading-6 tracking-[-0.48px] text-black">
                  {column.title}
                </h2>
                <ul className="flex flex-col items-start justify-center gap-3">
                  {column.items.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="font-body-body-16-m h-auto whitespace-nowrap text-left text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black [font-style:var(--body-body-16-m-font-style)]"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section className="flex flex-col items-start gap-4">
              <h2 className="[font-family:'Mona_Sans',Helvetica] text-base font-semibold leading-6 tracking-[-0.48px] text-black">
                Contact
              </h2>
              <address className="not-italic">
                <ul className="flex flex-col items-start justify-center gap-3">
                  {contactItems.map((item) => (
                    <li key={item.text} className="flex items-center gap-1.5">
                      <img className="h-5 w-5" alt={item.alt} src={item.icon} />
                      <span className="font-body-body-16-m whitespace-nowrap text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black [font-style:var(--body-body-16-m-font-style)]">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </address>
            </section>
          </nav>
        </div>
        <div className="flex w-full flex-col items-start gap-8">
          <Separator className="h-px w-full bg-transparent p-0" />
          <img
            className="-mt-px h-px w-full"
            alt="Line"
            src="/figmaAssets/line-4.svg"
          />
          <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body-body-16-m whitespace-nowrap text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black [font-style:var(--body-body-16-m-font-style)]">
              © 2026 Suuvo. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="font-body-body-16-m whitespace-nowrap text-[length:var(--body-body-16-m-font-size)] font-[number:var(--body-body-16-m-font-weight)] leading-[var(--body-body-16-m-line-height)] tracking-[var(--body-body-16-m-letter-spacing)] text-black [font-style:var(--body-body-16-m-font-style)]">
                Follow Us
              </span>
              <img
                className="mt-[-1.00px] mr-[-12.25px] mb-[-16.75px] shrink-0"
                alt="Frame"
                src="/figmaAssets/frame-2147226111.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
