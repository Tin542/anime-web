"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function CarouselComponent() {
  return (
    <div className="h-[500px] w-full">
      <Carousel>
        <div className="relative h-full">
          <Image
            src="/banner.jpg"
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="Carousel Image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="Carousel Image 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Carousel>
    </div>
  );
}
