import type {Recurrence} from "../domain/recurrence"
import type {Money} from "../domain/money"

export type Subscription = {
    id: string;
    name: string;
    cost:Money;
    recurrence: Recurrence;
    autoRenew: boolean;
    startDate: string;
    nextRenewalDate: string | null;
    reminderDaysBefore: number;
} 