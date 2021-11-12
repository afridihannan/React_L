import { ADD_TO_CART,REMOVE_FROM_CART } from '../Constanst'

const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer", action);
            return [
                ...state, {cardData: action.data}
            ]
            case REMOVE_FROM_CART:
                console.log("reducer", action);
                state.pop()
                return [
                    ...state
                ]
        default:
            return state
    }
}