"use client";

import React, { useEffect, useState } from "react";
import { TipForm } from "@/components/TipForm";
import { TipList } from "@/components/TipList";
import { TipEntry } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [entries, setEntries] = useState<TipEntry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("tips");
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  function saveEntries(data: TipEntry[]) {
    localStorage.setItem("tips", JSON.stringify(data));
  }

  function addEntry(entry: TipEntry) {
    const updated = [entry, ...entries];
    setEntries(updated);
    saveEntries(updated);
  }

  function removeEntry(timestamp: string) {
    const updated = entries.filter((e) => e.timestamp !== timestamp);
    setEntries(updated);
    saveEntries(updated);
  }

  function clearAllEntries() {
    setEntries([]);
    saveEntries([]);
  }

  const totalTips = entries.reduce((sum, e) => sum + e.tipAmount, 0);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        💰 Napiwki: {totalTips.toFixed(2)} zł
      </h1>
      <Card className="w-full max-w-md mb-4 p-6">
        <TipForm onSubmit={addEntry} clearAllEntries={clearAllEntries} />
      </Card>

      <div className="w-full max-w-md">
        <TipList entries={entries} onRemove={removeEntry} />
      </div>
    </main>
  );
}
