
import type {Recurrence} from "../domain/recurrence";
import type {Money} from "../domain/money";
import type {Subscription} from "../domain/subscription";
import {addDays, addWeeks, addMonths, addYears} from "date-fns";


export default function SubscriptionFactory(name: string, cost: Money, recurrence: Recurrence, reminderDaysBefore: number, autoRenew: boolean,) : Subscription {

    const id = crypto.randomUUID();

    const startDate = new Date().toISOString();


  let nextRenewalDate : string;
    switch (recurrence.unit) {
        case "day" : {
            nextRenewalDate = addDays(new Date(startDate), recurrence.interval).toISOString();
               break;
        }
     
        case "week": {
            nextRenewalDate = addWeeks(new Date(startDate), recurrence.interval).toISOString();
              break;
        }
    
          case "month": {
            nextRenewalDate = addMonths(new Date(startDate), recurrence.interval).toISOString();
              break;
        }
    
          case "year": {
            nextRenewalDate = addYears(new Date(startDate), recurrence.interval).toISOString();
              break;
        }
    
          default: {
            const _exhaustive: never = recurrence.unit;

    throw new Error("Invalid recurrence unit");
     }

    }
    
         return  {
id : id,
name : name,
cost : cost,
recurrence: recurrence,
autoRenew: autoRenew,
startDate: startDate,
nextRenewalDate: nextRenewalDate,
reminderDaysBefore: reminderDaysBefore, }


}