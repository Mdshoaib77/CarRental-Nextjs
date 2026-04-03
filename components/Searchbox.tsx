import { MapPin } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import DatePicker from "./DatePicker";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Searchbox = () => {
  return (
    <div className="max-container padding-container">
      <div className="max-container xl:padding-container flex-col lg:flex-row flexBetween gap-4 bg-white shadow-lg ring-1 ring-slate-10 rounded-lg p-4">
        <div>
          {/* label */}
          <Label htmlFor="destination">Where are you going?</Label>
          {/* input & icon */}
          <div className="relative flex items-center">
            <Input id="destination" placeholder='try "islamabad"' />
            <MapPin size={24} className="text-black absolute right-6" />
          </div>
        </div>
        {/* date picker */}
        <div>
          {/* checkin */}
          <div>
            <Label>Check in:</Label>
            <DatePicker />
          </div>
        </div>
        {/* date picker */}
        <div>
          {/* checkin */}
          <div>
            <Label>Check in:</Label>
            <DatePicker />
          </div>
        </div>
        <Button
          variant={"destructive"}
          className={cn("text-[17px] px-9 flex gap-2 mt-3")}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Searchbox;
