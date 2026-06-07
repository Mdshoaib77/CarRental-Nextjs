import Image from "next/image";
import Link from "next/link";
import Searchbox from "./Searchbox";

const Hero = () => {
  return (
    <section className="max-container padding-container z-0 relative xl:h-[95vh]" id="home">
      <div className="flex flex-col xl:flex-row gap-2">
        {/* left */}
        <div className="flex-1 pt-44">
          <h1 className="h1">
            Find, <span className="text-red-500">reserve or hire a car</span>{" "}
            effortlessly!
          </h1>
         <p className="mb-4">
  Enjoy hassle-free car rentals with flexible options, competitive pricing, 
  and a seamless booking experience tailored for your convenience.
</p>
          <div className="flex gap-2">
            <Link href={"/"}>
              <Image
                src={"/appstore-btn.svg"}
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
