// DatePicker.jsx
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react"; // or use any other icon library

export function DatePicker({
  label,
  placeholder = "Pick a date",
  value,
  onChange,
}) {
  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-medium">{label}</label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal flex items-center gap-2 px-4  rounded-full border-none bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.1)] py-1",
              "min-h-[50px] ",
              !value && "text-muted-foreground"
            )}
          >
            {value ? format(value, "PPP") : <span>{placeholder}</span>}
            <div className="flex items-center justify-center w-9 h-9 bg-primary rounded-full ml-auto">
              <CalendarIcon className="text-black w-[21px] h-[21px]" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
