
import OrderPlaced from "./OrderPlaced"
import DessertsData from "../DessertData/DessertData"
import useStore from "./UseStore";
import OrderConfirm from "./OrderConfirm";

function YourCart() {

    const { selectedId, setSelectedId, getTotal,showPopup,getCartTotal } = useStore();

    return (
        <>
            <div className=" bg-white min-h-56 max-h-[400px] overflow-y-auto font-font_redhot px-5 pb-5 rounded-[10px]">
                <div className="heading  font-[700] text-Red text-[1.2em] sticky top-0 bg-Rose_100 border p-3">Your Cart ({getCartTotal()}) </div>

                {
                    Object.keys(selectedId).length === 0 ? (
                        <div className="flex justify-center items-center flex-col">
                            <img src="images/illustration-empty-cart.svg" alt="Empty cart illustration" />
                            <div className="text-Rose_500 font-[600]">Your added items will appear here</div>
                        </div>
                    ) : (
                        null
                    )
                }
                {
                    DessertsData.map((item) => {
                        if (selectedId[item.id]) {
                            return <OrderPlaced data={item} key={item.id} />;
                        }
                        return null;
                    })
                }

                {
                    Object.keys(selectedId).length === 0 ? (
                        null
                    ) : (
                        <div>
                            <div className=" flex justify-between items-center px-5">
                                <span className=" font-[500] text-Rose_500">Total Order</span>
                                <span className=" font-bold text-[1.4em]">${getTotal()}</span>
                            </div>
                            <div className=" flex justify-center items-center">
                                <button type="submit" className=" bg-Red text-white px-6 py-2 rounded-[35px] font-[600]" onClick={showPopup} >Confirm Order</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default YourCart
