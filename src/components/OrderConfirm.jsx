
import { CiCircleCheck } from "react-icons/ci";
import DessertsData from "../DessertData/DessertData";
import useStore from "./UseStore";
import OrderPlaced from "./OrderPlaced";

function OrderConfirm() {

    const { selectedId, setSelectedId, getTotal } = useStore();

    return (
        <>
            <div className=" min-h-56 max-h-[400px] w-[400px] p-5 bg-Rose_50  overflow-y-auto">
                <CiCircleCheck className=" text-Green text-[3em]" />
                <h1 className=" font-[700] text-[2em] text-Rose_900">Order confirmed</h1>
                <span className=" text-Rose_400">We hope you enjoy your food!</span>
                <div className="bg-Rose_100">
                    {
                        DessertsData.map((item) => {
                            if (selectedId[item.id]) {
                                return <OrderPlaced data={item} key={item.id} />;
                            }
                            return null;
                        })
                    }
                    <div className=" flex justify-between items-center px-5">
                        <span className=" font-[500] text-Rose_500">Total Order</span>
                        <span className=" font-bold text-[1.4em]">${getTotal()}</span>
                    </div>

                </div>  
                <div className=" pt-6">
                    <button type="reset" className=" bg-Red text-white w-full py-2 rounded-[35px] font-[600]" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = window.location.href;
                    }}  >Start New Order</button>
                </div>
            </div>
        </>
    )
}

export default OrderConfirm
