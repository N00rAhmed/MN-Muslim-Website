import { BusinessContext } from "../context/BusinessContext";
import { useContext } from "react";

export const UseBusinessesContext = () => {
    const context = useContext(BusinessContext)

    if (!context) {
        throw Error('UseBusinessesContext must be used inside a BusinessesContextProvider')
    }

    return context
}