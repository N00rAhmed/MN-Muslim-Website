import { CarouselContext } from "../context/CarouselContext";
import { useContext } from "react";

export const UseCarouselContext = () => {
    const context = useContext(CarouselContext)

    if (!context) {
        throw Error('UseCarouselContext must be used inside a UseCarouselContextProvider')
    }

    return context
}