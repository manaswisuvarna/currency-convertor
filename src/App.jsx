import { useState } from 'react'
import Inputbox from './components/Inputbox'
import  useCurrencyhook from './hooks/useCurrencyhook'


function App() {


  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertamt, setconvertamt] = useState(0)

  const currencyinfo = useCurrencyhook(from)


  const options = currencyinfo ? Object.keys(currencyinfo) : [];

  const swap = () => {
    setfrom(to)
  setto(from)
  setamount(convertamt)
  setconvertamt(amount)
  }

  const convert = () => {
    setconvertamt(amount * currencyinfo[to])
  }





  return (

    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"

      style={{ backgroundImage: `url('https://tse1.mm.bing.net/th?id=OIP.BiEWKMSFW1Akh1dxYKZYOQHaE8&pid=Api&P=0&h=180')` }}>

      <div className="w-full">

        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">

              <Inputbox
                label="From"
                amount={amount}
                currencyoption={options}
                oncurrencychange={(currency) => setfrom(currency)}
                selectcurrency={from}
               onchangeanount={(amount)=>setamount(amount)}
              />

            </div>

            <div className="relative w-full h-0.5">

              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>

            </div>


            <div className="w-full mt-1 mb-4">

              <Inputbox
                label="To"
              
                amount={convertamt}
                currencyoption={options}
                oncurrencychange={(currency) => setto(currency)}
                selectcurrency={to}
                amountdisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default App
