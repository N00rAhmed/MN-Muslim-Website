import { createContext, useReducer } from 'react'

export const BusinessContext = createContext()

export const businessesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BUSINESSES':
            return {
                businesses: action.payload
            }
    case 'ADD_BUSINESS':
      return {
        ...state,
        businesses: [...state.businesses, action.payload],
      };

        case 'CREATE_BUSINESS':
            return {
                businesses: [action.payload, ...state.businesses]
            }
        case 'DELETE_BUSINESS':
            return {
                businesses: state.businesses.filter((b) => b._id !== action.payload._id)
            }
        
        default:
            return state
    }
}

export const BusinessContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(businessesReducer, {
        businesses: []
    })


    return(
        <BusinessContext.Provider value={{...state, dispatch}}>
            { children }
        </BusinessContext.Provider>
    )
}