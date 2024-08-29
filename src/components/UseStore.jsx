
import { create } from "zustand";
import DessertsData from "../DessertData/DessertData";

const useStore = create((set,get) => ({
    selectedId: {}, 
    setSelectedId: (item) => set({selectedId:item}), 
    getCartTotal: () =>{
      const { selectedId } = get(); 
      let totalItems = 0;
      Object.entries(selectedId).forEach(([key,value]) =>{
        if(value !== 0){
          totalItems += 1
        }
      })
      return totalItems

    },
    getTotal : () => {
      const { selectedId } = get(); 
      let total = 0;
      DessertsData.map((item) => {
        if (selectedId[item.id]) {
          total += item.price * selectedId[item.id];
        }
      });
      return total;
    },
    isPopupVisible: false,
    showPopup: () => set({ isPopupVisible: true }),
    hidePopup: () => set({ isPopupVisible: false }),
  }));
export default useStore;
