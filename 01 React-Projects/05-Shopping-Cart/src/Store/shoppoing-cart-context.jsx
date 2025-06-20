import { createContext } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { useReducer } from "react";

export const CartContext = createContext({
  items: [],
  onAddItemToCart: () => {},
  updateCartItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }
    return {
      items: updatedItems,
    };
  }
  if( action.type === 'UPDATE_ITEM'){
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state ,
        items: updatedItems,
      };
    
  }

   return state ;
}

export default function CartContextProvider({ children }) {
  // cosnt [state , dispatch] = useReducer(call back function  , intial state )
  const [shoppingCartState, shoppingCartStateDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  function handleAddItemToCart(id) {
    shoppingCartStateDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {

    shoppingCartStateDispatch({
      type:'UPDATE_ITEM',
      payload : {
        productId,
        amount
      }
    })
      
  }

  const CtxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };
  return <CartContext value={CtxValue}>{children}</CartContext>;
}
