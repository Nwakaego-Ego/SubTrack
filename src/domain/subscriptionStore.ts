import type {Subscription} from "./subscription";

export type SubscriptionStore = {
    addSubscription:( subscription: Subscription) => void
    removeSubscription: (id:string) => void
    updateSubscription: (id:string, subscription: Subscription) => void
    getAllSubscriptions: ()=> Subscription[]
}