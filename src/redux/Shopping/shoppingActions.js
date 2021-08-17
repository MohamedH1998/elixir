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

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_ITEM_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}