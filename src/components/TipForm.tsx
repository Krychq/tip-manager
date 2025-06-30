import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TipEntry } from "../types";
import { Trash } from "lucide-react";

export function TipForm({
  onSubmit,
  clearAllEntries,
}: {
  onSubmit: (entry: TipEntry) => void;
  clearAllEntries: () => void;
}) {
  const [mode, setMode] = useState<"ride" | "tip">("ride");
  const [rideAmount, setRideAmount] = useState("");
  const [totalPaid, setTotalPaid] = useState("");
  const [tipOnlyAmount, setTipOnlyAmount] = useState("");
  const popularAmounts = [5, 10, 20, 30, 50];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let entry: TipEntry;
    if (mode === "ride") {
      const ride = parseFloat(rideAmount);
      const paid = parseFloat(totalPaid);
      const tip = Math.max(0, paid - ride);
      entry = {
        type: "ride",
        rideAmount: ride,
        tipAmount: tip,
        timestamp: new Date().toISOString(),
      };
    } else {
      entry = {
        type: "tip",
        tipAmount: parseFloat(tipOnlyAmount),
        timestamp: new Date().toISOString(),
      };
    }
    onSubmit(entry);
    setRideAmount("");
    setTotalPaid("");
    setTipOnlyAmount("");
  }

  function renderQuickButtons(setValue: (val: string) => void) {
    return (
      <div className="flex flex-wrap gap-2 my-2">
        {popularAmounts.map((amt) => (
          <Button
            type="button"
            key={amt}
            variant="secondary"
            className="rounded-full px-4 py-1"
            onClick={() => setValue(amt.toString())}
          >
            {amt} zł
          </Button>
        ))}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2 mb-2">
        <Button
          type="button"
          variant={mode === "ride" ? "default" : "outline"}
          onClick={() => setMode("ride")}
        >
          Przejazd + napiwek
        </Button>
        <Button
          type="button"
          variant={mode === "tip" ? "default" : "outline"}
          onClick={() => setMode("tip")}
        >
          Tylko napiwek
        </Button>
        <div className="flex justify-end w-full">
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={clearAllEntries}
            aria-label="Wyczyść wszystko"
            className=""
          >
            <Trash />
          </Button>
        </div>
      </div>
      {mode === "ride" ? (
        <>
          <Input
            placeholder="Cena przejazdu"
            type="number"
            value={rideAmount}
            onChange={(e) => setRideAmount(e.target.value)}
          />
          {renderQuickButtons(setRideAmount)}
          <Input
            placeholder="Ile klient zapłacił (razem)"
            type="number"
            value={totalPaid}
            onChange={(e) => setTotalPaid(e.target.value)}
          />
          {renderQuickButtons(setTotalPaid)}
        </>
      ) : (
        <>
          <Input
            placeholder="Napiwek"
            type="number"
            value={tipOnlyAmount}
            onChange={(e) => setTipOnlyAmount(e.target.value)}
          />
          {renderQuickButtons(setTipOnlyAmount)}
        </>
      )}
      <Button type="submit" className="w-full">
        Dodaj
      </Button>
    </form>
  );
}
