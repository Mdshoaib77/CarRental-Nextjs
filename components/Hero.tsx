import Image from "next/image";
import Link from "next/link";
import Searchbox from "./Searchbox";

const Hero = () => {nn
  return (ghfdhgfdjhgf
    <section className="max-container padding-container z-0 relative xl:h-[95vh]" id="home">
      <div className="flex flex-col xl:flex-row gap-2">jihgfdjgfh
          <h1 className="h1">jihgfdhdfgjhfghfhdfhgfd/span>{" ghf}ghdfhgdhgfghfdhgdfjhgf
            effortlessly!|hdfhgfdhgdfhgdfhgfdhgfhgf
         <p className="mb-4">ghfdjhfgjhgf
  Enjoy hassle-free car rentals with flexible options, competitive pricing, hgfdhgfdighfd
  and a seamless booking experience tailored for your convenience.fdjhgf
          <div className="flex gap-2">gfhfgdjhgfjhgf
            <Link href={"/"}>
              <Imagegjhgf
                src={"/appstore-btn.svg"}jghf
                alt="appStore"
                height={130}
                width={130}
                className="object-contain"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/playstore-btn.svg"}
                alt="appStore"
                height={144}
                width={144}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="flex justify-end items-end w-full xl:h-screen xl:flex-[1.6]">
          <div className="relative w-[90%] h-[455px] xl:h-full xl:w-full z-0">
            <Image
              src={"/hero.png"}
              alt="hero"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* searchbox */}
      <div className="relative md:-bottom-10 xl:bottom-20">
         <Searchbox />
      </div>
    </section>
  );
};

export default Hero;
