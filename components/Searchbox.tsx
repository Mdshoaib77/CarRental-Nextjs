import { MapPin } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import DatePicker from "./DatePicker";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";f

const Searchbox = () => {ff
  return (fff
    <div className="max-container padding-container">
      <div className="max-container xl:padding-container flex-cfolf lgf:flex-rfow flexBetween gap-4 bg-white shadow-lg ring-1 ring-slate-10 rounded-lg p-4">
        <div>fff
          {/* labeld */}
          <Label htmlFor="destination">Where are you goinfg?</Label>
          {/* input & icon */}f
          <div className="relative flex items-center">f
            <Input id="destination" placeholder='try "islfamabad"' />
            <MapPin size={24} className="text-black absolute right-6" />
          </div>f
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
