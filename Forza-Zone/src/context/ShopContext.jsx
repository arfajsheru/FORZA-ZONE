import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";


export const ShopContext = createContext({
    products, 


});


const ShopContextProvider = (props) =>{

    const currency = '$'
    const delivery_fee = 10;
    const[search, setSearch] = useState('');
    const[showSearch,setShowSearch] = useState(false);
    const[cartItems, setCartItems] = useState({}); // object of all items 
    const[cartData, setCartData] = useState([]);
    


    const addToCart = async (itemId, size) => {
        if(!size){ // Agar ham size ko select kiye bina isko add karte hai to vo tostify error show karega
            toast.error('Select Product Size');
            return
        } else{
            toast.success('Item Successfully added')
        }
        //cartItems mere paas object hai
        let cartData = structuredClone(cartItems); // ye ak js fucntion hai jo kisi bhi array ya object ka deep copy karta hai.is ka matlab ye hai ki original data ka ak naya copy create karta hai or agar original data ke nader koi nested object ya array hai to vo bhi copy karta hai

        if(cartData[itemId]){ //Yeh check karta hai ki kya cartData me given itemId already exist karta hai ya nahi.
            if(cartData[itemId][size]){ //Agar itemId already exist karta hai, to next check karta hai ki size key bhi exist karti hai ya nahi (if(cartData[itemId][size]))
                cartData[itemId][size] += 1; // Agar exist karti hai to += 1 kardijiye nahi karti hai to vo size ko add kardijiy
            } else{
                cartData[itemId][size] = 1;
            }
        } else{
            cartData[itemId] = {}; // Agar item id exist nahi karti hai to usko ak naya object banao or ismai add karo 
            cartData[itemId][size] = 1; //Or itemId or size ko add karo 
        }
        setCartItems(cartData); // SetCartItems me add karo jo Structure clone kiya tha vo 
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems) { // ye condition cartItems me itemId ko iterate karega 
            for(const item in cartItems[items]){ // ye condition cartItems me itemId ke size ko iterate karega 
                try {
                    if(cartItems[items][item] > 0){ // cartItem me itemId or size ki length greterthan 0 he to totalcount ko + cartItems me se itemId or size ko count kardo 1
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }



    //Remove quantity
    const updateQuantity = async (itemId,size,quantity) => {  //update Quantity function 3 parameter lega
        let cartData = structuredClone(cartItems); // ye line cartItems ka object or nested object ismai clone karega 
        cartData[itemId] [size] = quantity; //ye cart Quantity ko update karege means jab ye function ko call karenge tab ham function me aruguments denge to arguments me jab ham quantity ko 0 karenge tab vo item delete hojaayegi 
        setCartItems(cartData); // or setCartItems me set ho jaayegi isse hamara object update hojaayega
    }


    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            for(const item in cartItems[items]) {
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }




    const value={
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,addToCart,cartItems,
        getCartCount,updateQuantity,
        getCartAmount,
        cartData,setCartData
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;