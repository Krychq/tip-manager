import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TipEntry } from "../types";

export function TipList({
  entries,
  onRemove,
}: {
  entries: TipEntry[];
  onRemove: (timestamp: string) => void;
}) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <Card
          key={entry.timestamp}
          className="p-4 flex flex-col gap-2 relative"
        >
          <div className="flex justify-between items-center">
            <span className="text-blue-600 text-xs font-semibold">
              {new Date(entry.timestamp).toLocaleDateString("pl-PL", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-red-500 hover:bg-red-100"
              onClick={() => onRemove(entry.timestamp)}
              aria-label="Usuń"
            >
              ✕
            </Button>
          </div>
          <div className="text-base font-medium">
            {entry.type === "ride"
              ? `Przejazd: ${entry.rideAmount?.toFixed(
                  2
                )} zł, napiwek: ${entry.tipAmount.toFixed(2)} zł`
              : `Napiwek: ${entry.tipAmount.toFixed(2)} zł`}
          </div>
        </Card>
      ))}
    </div>
  );
}
