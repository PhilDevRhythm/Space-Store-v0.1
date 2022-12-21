import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  items: [],
  addToCart: () => {},
  clearCart: () => {}
})

const useCart = () => {
  return useContext( CartContext )
}

const CartContextProvider = ( { children } ) => {

  const [items, setItems] = useState( [] )

  const addToCart = ( item ) => {
    // setItems( items => [...items, item])
    setItems( items => items.concat(item) )
  }

  const clearCart = () => {
    setItems( [] )
  }

  const context = {
    items: items,
    addToCart: addToCart,
    clearCart: clearCart
  }

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider, useCart }