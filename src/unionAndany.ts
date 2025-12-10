let sub: number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

let airlineSeat: 'aisle' | 'window' | 'middle' = 'middle';

const orders = ["12", "20", "28", "42"];

let currentOrder: String | undefined;

for(let order of orders){
    if(order == "28"){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);