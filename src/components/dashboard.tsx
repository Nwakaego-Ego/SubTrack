import {useState} from "react";
import type {Subscription} from "../domain/subscription";
import Store from "../domain/subscriptionStoreImpl";
import SubscriptionFactory from "../domain/subscriptionFactory";
import MoneyFactory from "../domain/moneyFactory";
import type {Recurrence} from "../domain/recurrence"

function Dashboard() {

    const [allSubscriptions, setAllSubscriptions] = useState<Subscription[]>([]);

  
 function handleAddSubscription(name: string, amount: number, recurrence : Recurrence, reminderDaysBefore: number, autoRenew: boolean){
       const money = MoneyFactory(amount, "roundingNearest") 
    const subscription = SubscriptionFactory(name, money, recurrence, reminderDaysBefore, autoRenew)  
      Store.addSubscription(subscription); 
     setAllSubscriptions(Store.getAllSubscriptions()) 
 }
    

    return (
        <div>
           {allSubscriptions.map((sub)=>{
            return <div key={sub.id}>
                <div>{sub.name}</div>
             <div>{sub.cost.amount}</div>
            </div>
           })}
        </div>
    )
}

export default Dashboard;