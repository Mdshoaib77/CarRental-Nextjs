import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type CarProps = {
  url: string;
  title: string;
  rent: number;
  luggage: number;
  passenger: number;
  transmission: string;
};

const CarItem = ({
  title,
  url,
  rent,
  transmission,
  luggage,
  passenger,
}: CarProps) => {
  return (
    <div className="flex flex-col p-4 justify-center items-start text-black bg-white hover:shadow-md rounded-2xl group">
      {/* image */}
      <div className="relative bottom-10">
        <Image
          src={url}
          alt="carImg"
          height={400}
          width={500}
          priority
          className="rounded-2xl"
        />
      </div>
      {/* heading */}
      <h4 className="text-xl font-extrabold capitalize relative bottom-3">
        {title}
      </h4>
      {/* rent */}
      <p className="flex mb-2 text-2xl font-extrabold">
        <span className="self-start text-sm font-semibold">$</span>
        {rent}
        <span className="self-end text-sm font-medium">/day</span>
      </p>
      {/* details */}
      <div className="relative w-full flex mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-50">
          <div className="flexCenter flex-col gap-2">
            <Image
              src={"/steering-wheel.svg"}
              alt="icon"
              height={17}
              width={17}
            />
            <p className="text-sm">{transmission}</p>
          </div>
          <div className="flexCenter flex-col gap-2">
            <Image src={"/luggage.svg"} alt="icon" height={17} width={17} />
            <p className="text-sm">{luggage}</p>
          </div>
          <div className="flexCenter flex-col gap-2">
            <Image src={"/person.svg"} alt="icon" height={17} width={17} />
            <p className="text-sm">{passenger}</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute bottom-1 w-full z-10">
          <Button
            variant={"destructive"}
            className={cn("text-[16px] p-6 flex gap-2 mt-3 w-full")}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
