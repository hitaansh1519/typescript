// class Chai{
//     flavour: string;
//     price: number;

//     constructor(flavour: string, price: number){
//         this.flavour = flavour;
//         this.price = price;
//     }

//     constructor(flavour: string){
//         this.flavour = flavour;
//         console.log(this);
//     }
// }

// const masalaChai = new Chai("Ginger", 20)
// masalaChai.flavour = "masala"

class Chai {
    public flavour: string = "Masala";

    private secretIngredients = "Cardamon"

    revealSecret(){
        return this.secretIngredients
    }
}

class Shop{
    protected shopName = "Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName
    }
}

class Walet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

class Cup{
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}

class MordernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value){
        if(value > 5) throw new Error("Too much sugar")
         this._sugar = value
    }
}

const c = new MordernChai()
c.sugar = 10

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(){
        console.log(EkChai.shopName);
    }
}

console.log(EkChai.shopName)

abstract class Drink {
    abstract make(): void
}

class MyChai implements Drink {
    make(){
        console.log("Brewing chai");
    }
}

class Heater{
    heat(){
        console.log("Heating");
    }
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat();
    }
}