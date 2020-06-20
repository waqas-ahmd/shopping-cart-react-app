export default (state, action) => {
    switch (action.type) {
        case 'FIRST_LOADED':
            return {
                ...state,
                firstLoad: false
            }
        case 'ADD_ITEM':
            let prevArray = state.cartItemsUnique;
            let found = 0;
            state.cartItems.forEach(element => {
                if (element.id === action.payload.id) {
                    prevArray = state.cartItemsUnique.filter(a => a.item.id !== element.id);
                    found = found + 1;
                }
            });
            let uniqueItem = {
                cqty: found + 1,
                item: action.payload
            }

            ///
            state.stockItems.forEach(element => {
                if (element.id === action.payload.id) {
                    element.qty = element.qty - 1;
                }
            });
            //console.log("length",state.cartItems.filter(x => x === action.payload).length)
            //console.log(uniqueItem.cqty)
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems],
                cartItemsUnique: [uniqueItem, ...prevArray],
            }
        case 'ADD_STOCK_ITEMS':
            console.log("data added")
            return {
                ...state,
                stockItems: action.payload
            }

        case 'REMOVE_ITEM':
            if (state.cartItemsUnique.filter(a => a.item.id === action.payload)[0].cqty > 0){
                state.cartItemsUnique.filter(a => a.item.id === action.payload)[0].cqty--;
            }
            if (state.cartItemsUnique.filter(a => a.item.id === action.payload)[0].cqty === 0){
                state.cartItemsUnique = state.cartItemsUnique.filter(a => a.item.id !== action.payload)
            }
            let indexToRemove=0;
            let x2342 = true;
            state.cartItems.forEach(element =>{
                if(element.id === action.payload && x2342){
                    state.cartItems.splice(indexToRemove,1);
                    x2342 = false;
                }
                indexToRemove ++;
            })
            
            state.stockItems.forEach(element =>{
                if(element.id === action.payload){
                    element.qty++;
                    
                }
            })
            console.log(state.cartItems)
            return{
                ...state,
                cartItemsUnique: state.cartItemsUnique,
                cartItems: state.cartItems,
                stockItems: state.stockItems
            }
        default: return state;
    }
}