import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    firstLoad : true,
    stockItems :[],
    cartItems: [],
    cartItemsUnique : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function AddItem(item){
        dispatch({
            type: 'ADD_ITEM',
            payload : item
        })
    }

    function RemoveItem(id){
        dispatch({
            type: 'REMOVE_ITEM',
            payload : id
        })
    }

    function AddStockItems(items){
        dispatch({
            type: 'ADD_STOCK_ITEMS',
            payload : items
        })
    }

    function FirstLoaded(){
        dispatch({
            type: 'FIRST_LOADED'
        })
    }

    return (<GlobalContext.Provider value={{
        cartItems: state.cartItems,
        firstLoad: state.firstLoad,
        cartItemsUnique: state.cartItemsUnique,
        AddStockItems,
        stockItems: state.stockItems,
        AddItem,
        FirstLoaded,
        RemoveItem
    }}>
        {children}
    </GlobalContext.Provider> )
}
