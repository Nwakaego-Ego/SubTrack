import type {Subscription} from "./subscription";
import type {SubscriptionStore} from "./subscriptionStore";


let subscriptions : Subscription[] = [];

// It is a function. Specifically it is a method — 
// which is just a function that lives inside an object.

// subscriptions — private array, starts empty, holds all subscription objects
// store — fulfills the SubscriptionStore contract
// addSubscription — takes one subscription object and pushes it into the array

const store: SubscriptionStore = {
    addSubscription: (subscription) => {
        subscriptions.push(subscription)
    },

    // Go through every subscription in the array. Keep
    //  only the ones whose id does not match the id being removed. 
    //  Reassign the array with the result."

    removeSubscription: (id) =>{
      subscriptions = subscriptions.filter(sub => sub.id !== id) 
     },

     updateSubscription: (id, subscription) =>{
        subscriptions = subscriptions.map(sub => sub.id === id  ? subscription : sub)
     },

    //  getAllSubscriptions() {
    //     return subscriptions
    //  }

    getAllSubscriptions: () => subscriptions

    
}



// addSubscription — pushes a new subscription into the array
// removeSubscription — filters out the subscription with the matching id
// updateSubscription — maps through and replaces the matching subscription
// getAllSubscriptions — returns the full array