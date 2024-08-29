
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import useStore from "./UseStore";

function Desserts(props) {

    const { selectedId, setSelectedId } = useStore();

    const handleclick = () => {
        let id = props.data.id
        let newSelectedId = {...selectedId, [id]:selectedId[id]?selectedId[id] +1 : 1}
        setSelectedId(newSelectedId)
    }

    const handleIncrement = () => {
        let id = props.data.id
        let newSelectedId = {...selectedId, [id]:selectedId[id]?selectedId[id] +1 : 1}
        setSelectedId(newSelectedId)
    }

    const handleDecrement = () => {
        let id = props.data.id
        let newSelectedId = {...selectedId, [id]:selectedId[id]?selectedId[id] -1 : 1}
        setSelectedId(newSelectedId)
    }

    return (
        <>
            <div className="dessert md:min-h-64 md:w-52 pt-2 p-5 md:p-0">
                <div className='relative flex flex-col justify-center items-center'>
                    <img className='md:h-44 md:w-52 rounded-[8px]' src={props.data.image} alt="" />
                        <div onClick={ handleclick } className='cursor-pointer bg-white absolute -bottom-3 flex items-center gap-2 justify-center border border-Red w-32 h-8 rounded-[35px]'>
                            <img className=' h-4' src="images/icon-add-to-cart.svg" alt="" />
                            <div className=' font-[600] text-[0.8em] '>Add to Cart</div>
                        </div>
                    {   
                        selectedId[props.data.id] && (
                            <div className='cursor-pointer bg-Red absolute -bottom-3 flex items-center gap-2 justify-evenly border border-Red w-32 h-8 rounded-[35px]'>
                                <AiOutlineMinus onClick={handleDecrement} className=" text-white border rounded-[50%]" />
                                <div className=" text-white">{selectedId[props.data.id]}</div>
                                <AiOutlinePlus onClick={handleIncrement} className=" text-Red rounded-[50%] bg-white" />
                            </div>
                        )
                    }
                </div>
                <div className=' pt-4 px-2 '>
                    <div className=' text-[0.8em] text-Rose_500'>{props.data.name}</div>
                    <div className=' text-[0.9em] font-[600] text-Rose_900'>{props.data.fullname}</div>
                    <div className=' text-[0.9em] text-Red font-[600]'>${props.data.price}</div>
                </div>
            </div>
        </>
    )
}

export default Desserts
