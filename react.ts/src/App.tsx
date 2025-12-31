import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { ChaiList } from './components/ChaiList'
import { OrderForm } from './components/OrderForm.tsx'
import { Counter } from './components/Counter'
import { Card } from './components/Card.tsx'

import type { Chai } from "./types.ts"

const menu: Chai[] = [
  {id: 1, name: "Masala", price: 25},
  {id: 2, name: "Ginger", price: 30},
  {id: 3, name: "Lemon", price: 35},
  {id: 4, name: "Elaichi", price: 40},
]

function App() {

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name="Headphone" price={14999}/>
        <ChaiCard name="iPhone" price={82999} isSpecial={true}/>
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed:" , order.name, order.cups);
          }}
        />
      </div>
      <div>
        <Card
        title="Chai aur Typescript"
        footer={<button>Order Now</button>}
        />
      </div>
    </>
  )
}

export default App
