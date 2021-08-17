import * as actionTypes from './shoppingTypes'

export const addToCart = (itemID, qty) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
            amount: qty
        }
    }
}

export const takeawayFromCart = (itemID) => {
    return {
        type: actionTypes.TAKEAWAY_FROM_CART,
        payload: {
            id: itemID,
        }
    }
}

export const removeFomCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const signIn = (userId) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT,
    }
}