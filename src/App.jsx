
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DessertsData from './DessertData/DessertData'
import Desserts from './components/Dessert'
import YourCart from './components/YourCart'
import OrderConfirm from './components/OrderConfirm'
import useStore from './components/UseStore'

function App() {

  const { hidePopup,isPopupVisible,showPopup } = useStore();

  return (
    <>
      <div className=' h-auto bg-Rose_50 2xl:px-56 lg:py-5 md:flex md:justify-center gap-6 font-font_redhot relative'>
        <div className=''>
          <div className="heading">
            <h1 className=' font-font_redhot font-[700] text-[1.9em] py-2 px-7'>Desserts</h1>
          </div>
          <div className="products  md:grid lg:grid-cols-3 md:grid-cols-2 md:place-items-center gap-3 flex flex-col justify-center items-center">
            {
              DessertsData.map((item) => {
                return <Desserts data={item} key={item.id} />
              })
            }
          </div>
        </div>
        <div className="cart 2xl:w-[25%] ">
          <YourCart />
        </div>
      </div>
      <div className=" flex justify-center items-center absolute top-[200px] left-[600px]">
        {
          isPopupVisible && <OrderConfirm />
        }
      </div>
    </>
  )
}

export default App
