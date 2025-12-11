type ChaiOrder = {
    type: string,
    sugar: number,
    strong: boolean
}

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number
}

// class MasalaChai implements TeaRecipe{
//     water = 100;
//     milk = 50;
// }

interface CupSize{
    size: "small" | "large"
}

class Chai implements CupSize{
    size: "small" | "large" = "large";
}

// type Response = {ok: true} | {ok: false}

// class myRes implements Response{
//     ok: boolean = true;
// }

type TeaType = "Malasa" | "Ginger" | "Lemon"

function orderChai(t: TeaType){
    console.log(t);
}

type BaseChai = {teaLeave: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai = {
    teaLeave: 2,
    masala: 1
}


type User = {
    username: string,
    bio?: string
}

const u1: User ={username: "Hitaansh"}
const u2: User ={username: "Hitaansh", bio: "hitaansh.ai"}

type Config = {
    readonly appName: string,
    version: number
}

const cfg: Config = {
    appName: "MasterJi",
    version: 1
}

// cfg.appName = "ChaiCode"

