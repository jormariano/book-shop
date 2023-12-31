import { createContext, useContext, useState } from "react"

const AppContext = createContext({
    items: [],
    createItem: (item) => { },
    getItem: (id) => { },
    updateItem: (item) => { },
});

const Store = ({ children }) => {

    const [items, setItems] = useState([]);

    const createItem = (item) => {

        setItems((prevItems) => [...prevItems, item]);
    }

    const getItem = (id) => {
        const item = items.find((item) => item.id === id);

        return item;
    }

    const updateItem = (item) => {
        const index = items.findIndex((i) => i.id === item.id);

        const temp = [...items];

        temp[index] = { ...item };

        return true;
    }


    return (
        <AppContext.Provider value={{
            items,
            createItem,
            getItem,
            updateItem,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default Store

export const useAppContext = () => {
    return useContext(AppContext);
  }