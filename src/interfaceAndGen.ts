interface Chai {
    flavor: string;
    price: number;
    milk?: boolean;
}

const masala: Chai = {
    flavor: "masala",
    price: 30,
};

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {id: 1, name: "Chaicode Caffe"}

interface DiscountCalulator{
    (price: number): number
}

const apply50: DiscountCalulator = (p) => p * 0.5;

interface TeaMachine{
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start() {
        console.log("Tea machine started");
    },
    stop() {
        console.log("Tea machine stopped");
    }
}

interface ChaiRating {
    [flavor: string]: number
}

const ratings: ChaiRating = {
    masala: 4.5,
    ginger: 3,
}

interface User {
    name: string;
}

interface User {
    age: number;
}

const u: User = {
    name: "Hitaansh",
    age: 22
}


interface A {a: string}
interface B {b: string}

interface C extends A, B {}

