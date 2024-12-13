import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ActivityModalProps } from "@/types/super-satur-daddy-day";

export function ActivityModal({
  isOpen,
  onClose,
  activity,
  onSave,
}: ActivityModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedKid, setSelectedKid] = useState<string>("");

  const handleSave = () => {
    if (selectedDate && selectedKid) {
      onSave(selectedDate, selectedKid);
      onClose();
    }
  };

  const handleKidSelect = (value: string) => {
    setSelectedKid(value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule {activity}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Select onValueChange={handleKidSelect} value={selectedKid}>
              <SelectTrigger id="kid-select" className="w-full">
                <SelectValue placeholder="Select a kid" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="skylar">Skylar</SelectItem>
                <SelectItem value="graham">Graham</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="date-picker"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select a Date
            </label>
            <Calendar
              id="date-picker"
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} disabled={!selectedDate || !selectedKid}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
