import { createContext, useReducer } from 'react'

export const CarouselContext = createContext()

export const carouselReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CAROUSEL':
            return {
                carousel: action.payload
            }
    case 'ADD_CAROUSEL_DATA':
      return {
        ...state,
        carousel: [...state.carousel, action.payload],
      };

        case 'CREATE_CAROUSEL_DATA':
            return {
                carousel: [action.payload, ...state.carousel]
            }
        case 'DELETE_CAROUSEL_DATA':
            return {
                carousel: state.carousel.filter((b) => b._id !== action.payload._id)
            }

            case 'UPDATE_CAROUSEL_DATA':
                return {
                  carousel: state.carousel.map((carouselItem) =>
                    carouselItem._id === action.payload._id ? action.payload : carouselItem
                  ),
                };
          
        
        default:
            return state
    }
}

export const CarouselContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(carouselReducer, {
        carousel: []
    })


    return(
        <CarouselContext.Provider value={{...state, dispatch}}>
            { children }
        </CarouselContext.Provider>
    )
}