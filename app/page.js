// import { EmblaCarousel } from "@/components/emblaCarousel";
// import Image from "next/image";

import AnotherComponenet from "@/components/anotherComponent";
import EmblaCarousel from "@/components/emblaCarousel";

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function Home() {
  return (
    <div className="text-center text-5xl text-black font-extrabold">
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="mt-20">
        <AnotherComponenet slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}
