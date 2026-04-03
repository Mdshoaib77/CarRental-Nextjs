'use client'

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { useState } from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { format } from "date-fns"

const DatePicker: React.FC<DatePickerProps> = ({ newDate }) => {
    const [date, setDate] = useState(newDate || null)
  return (
     <Popover>
        <PopoverTrigger asChild>
           <Button
           variant={"secondary"}
           className={cn("w-full justify-between text-left font-medium", !date && "text-black")}
           >
           {date ? format(date, "d MMM") : <span>Pick a date</span>}
           <CalendarIcon className="mr-2 h-5 w-5 text-black"/>
           </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
            <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={(newDate) => setDate(newDate || null)}
            initialFocus
            />
        </PopoverContent>
     </Popover>
  )
}

interface DatePickerProps {
    newDate?: Date; //Making newDate an optional prop of type Date
}

export default DatePicker