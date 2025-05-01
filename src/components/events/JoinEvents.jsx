"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export const PaymentPopup = ({ onClose }) => {
  const [selectedPayment, setSelectedPayment] = useState("bkash");
  const handleContinue = () => {
    console.log("Selected payment method:", selectedPayment);
    onClose();
  };
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-[#34735F] border-none rounded-3xl p-8">
        <DialogHeader>
          <div className="flex justify-center items-center w-full">
            <Image
              src="/assets/payment-logo.svg"
              alt="Payment logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </div>
          <DialogTitle className="text-3xl font-bold text-center text-orange-100 pt-4">
            Choose Payment Method
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <RadioGroup
            value={selectedPayment}
            onValueChange={(value) => setSelectedPayment(value)}
            className="space-y-4"
          >
            {paymentOptions.map((option) => (
              <div key={option.id} className="flex items-start space-x-3">
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="h-[18px] w-[18px] border-2 data-[state=checked]:bg-orange-100 data-[state=checked]:border-orange-100 mt-1.5"
                />
                <Label
                  htmlFor={option.id}
                  className="flex-1 flex-col items-start "
                >
                  <div className="flex items-center justify-start gap-2">
                    <span className="text-xl font-medium text-white">
                      {option.title}
                    </span>
                    {option.badge && (
                      <Image
                        src={option.badge}
                        alt={`${option.title} badge`}
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    )}
                  </div>
                  <p className=" text-base text-[#F6F6F6]">
                    {option.description}
                  </p>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <Button
          onClick={handleContinue}
          className="w-full mt-6 bg-[#2B2B2B] hover:bg-orange-200 text-white rounded-full py-7 text-lg hover:text-[#2B2B2B]"
        >
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
};
