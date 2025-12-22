const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}


//Alist Objects
type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}

//Duck Typing
type Cup = {size: string}

let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup


type Brew = {brewTime: number}
const coffee = {brewTime: 5, beam: "Arabica"}
const chaiBrew:Brew = coffee

const User = {
    username: "string",
    password: "123"
}

type User = {
    username: "chaiaurcode",
    password: "123"
}



type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}

type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with", updates);
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})

type ChaiOrder = {
    name?: string;
    quantity: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})


type FreshChai = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type BasicChaiInfo = Pick<FreshChai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

type KadhkChai = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type PublicChai = Omit<KadhkChai, "secretIngredients">;