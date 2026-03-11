
export type RecurrentUnits = "day" | "week" | "month" | "year" ;

export type Recurrence = {
    interval: number;
    unit: RecurrentUnits
}