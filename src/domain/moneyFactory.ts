import type { Money } from "../domain/money";
import type { RoundingMode } from "../domain/roundingMode";

export default function MoneyFactory(raw: number, roundMode: RoundingMode) : Money {
   
     function rounding(rawNumber:number) : number {
       switch (roundMode) {
  case "roundingUp":
    return Math.ceil(rawNumber);
  case "roundingDown":
    return Math.floor(rawNumber);
  case "roundingNearest":
    return Math.round(rawNumber);
  default: {
  const _exhaustive: never = roundMode;

    throw new Error("Invalid rounding mode");
     }
    }
     }
      

     const converted = raw * 100
    const rounded = rounding(converted)
    return {
  amount: rounded,
  currency: "NGN"
}
}



