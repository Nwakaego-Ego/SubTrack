import {useState} from "react";
import type {Subscription} from "../domain/subscription";
import {Store} from "../domain/subscriptionStoreImpl";


function Dashboard() {

    const [allSubscriptions, setAllSubscriptions] = useState(Store.getAllSubscriptions());
    
    return (
        <div></div>
    )
}

export default Dashboard;