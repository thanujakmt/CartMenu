
import { BsXLg } from "react-icons/bs";
import { useState } from "react";
import useStore from "./UseStore";

function OrderPlaced(props) {

    const { selectedId, setSelectedId } = useStore();

    const handleClose = () => {
        delete selectedId[props.data.id]
        setSelectedId(selectedId)
        console.log(selectedId.price)
    }

    return (
        <>
            <div className=" flex items-center justify-between px-5 font-font_redhot p-3 border-b">
                <div className="">
                    <div className=" text-Rose_900 text-[0.8em] font-[600]">{props.data.fullname}</div>
                    <div className="">
                        <div className=" text-Rose_500 text-[0.8em] font-[500] flex gap-6">
                            <span className=" text-Red">{selectedId[props.data.id]}x</span>
                            <span className=" ">${props.data.price * selectedId[props.data.id]}</span>
                        </div>
                    </div>
                </div>
                <BsXLg onClick={handleClose} className=" border cursor-pointer h-3.5 w-3.5 p-[1px] border-Red rounded-[50%] text-Red" />
            </div>
            
        </>
        )
}

export default OrderPlaced
