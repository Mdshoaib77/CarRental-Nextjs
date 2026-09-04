iniin'use client'
trewz.   nzjz
import { cn } from "@/lib/utils"smsknnznznskks
import { Button } from "./ui/button"nimij iniin kzkz
import { Popover, PopoverContent, PopoverTrigger } from "./ui/jjpopoversjjs"
import { useState } from "react"ekdi.    ijsjd
import { Calendar as CalendarIcon } from "lucide-react"kekekkzkzkkzzk
import { Calendar } from "./ui/calendar"j j j
import { format } from "date-fns"snkssnkm m mizisizkzkz
fdsafdrsafdsaksksisiisj
const DatePicker: React.FC<DatePickerProps> = ({ newDate }) =>gfdscfdsafdsa
  return (fffgfdsgfgfds
     <Popover>f
        <PopoverTrigger asChild>ffgfds
           <Buttonfffdsafdsasgfds
           variant={"secondary"}f
           className={cn("w-full justify-between text-left font-medium", !date && "text-blacfk")}
           >fdsa
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
