import { CARS } from "@/constants";
import CarItem from "./CarItem";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Listing = () => {
  return (
    <section className="bg-[#f6f5f5] py-12 xl:py-32" id="listing">
      <div className="max-container padding-container !max-w-[1300px]">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black">
          <h3 className="h3 mt-8">Car Catalogue</h3>
          <p className="max-w-[33rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            molestias rerum voluptatem!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  w-full gap-8 pt-14 gap-y-16">
            {CARS.map((car) => (
              <CarItem
                key={car.title}
                url={car.url}
                title={car.title}
                rent={car.rent}
                luggage={car.luggage}
                passenger={car.passenger}
                transmission={car.transmission}
              />
            ))}
          </div>
          <div className="mx-auto max-sm:mb-14 relative -bottom-14">
            <Button
              variant={"destructive"}
              className={cn("text-[16px] p-6 flex gap-2")}
            >
              Show More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
