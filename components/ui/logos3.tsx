"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  {
    id: "logo-1",
    description: "Astro",
    image: "https://www.shadcnblocks.com/images/block/logos/astro.svg",
    className: "h-7 w-auto"
  },
  {
    id: "logo-2",
    description: "Figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-7 w-auto"
  },
  {
    id: "logo-3",
    description: "Next.js",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-7 w-auto"
  },
  {
    id: "logo-4",
    description: "React",
    image: "https://www.shadcnblocks.com/images/block/logos/react.png",
    className: "h-7 w-auto"
  },
  {
    id: "logo-5",
    description: "shadcn/ui",
    image: "https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg",
    className: "h-7 w-auto"
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-7 w-auto"
  },
  {
    id: "logo-7",
    description: "Tailwind CSS",
    image: "https://www.shadcnblocks.com/images/block/logos/tailwind.svg",
    className: "h-4 w-auto"
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
    className: "h-7 w-auto"
  }
];

function Logos3({ heading = "Trusted by these companies", logos = defaultLogos, className }: Logos3Props) {
  return (
    <section className={className ? className : "py-24"}>
      <div className="container mx-auto flex flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">{heading}</h2>
      </div>
      <div className="pt-10 md:pt-12 lg:pt-16">
        <div className="relative mx-auto flex w-full max-w-full items-center justify-center overflow-hidden lg:max-w-5xl">
          <Carousel className="w-full" opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true, stopOnInteraction: false })]}>
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center sm:mx-10">
                    <Image src={logo.image} alt={logo.description} className={logo.className} width={140} height={28} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}

export { Logos3 };
