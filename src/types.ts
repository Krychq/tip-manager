export type TipEntry = {
  type: "ride" | "tip";
  rideAmount?: number;
  tipAmount: number;
  timestamp: string;
};
