import { useCart } from "react-use-cart"
import Navbar from "./Navbar"
import { shopData } from "./data"
import Cart from "./Cart"
import Card from "./Card"
import { useState } from "react"

const ShopCard = () => {

    const { addItem,
        items,
        isEmpty,
        emptyCart,
        removeItem,
        updateItemQuantity,
    } = useCart()

    const [show, setShow] = useState(false)

    return (
        <div className=" w-[1200px] mx-auto phone:max-w-[100%]">
            <Navbar
                showCart={() => setShow(true)}
                hideCart={() => setShow(false)}
            />
            <div
                className={`
                    max-w-[75%]
                    w-[75%]
                    mx-auto
                    ${show && "hidden"}
                `}
            >
                <div
                    className="
                    flex
                    flex-wrap
                    justify-center
                    gap-[10px]
                "
                >
                    {shopData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                desc={item.desc}
                                image={item.image}
                                price={item.price}
                                key={item.id}
                                item={item}
                                added={() => addItem(item)}
                            />
                        )
                    })}
                </div>
            </div>

            <Cart showcart={!show && "hidden"}>
                {isEmpty && <h1 className=" 
                    text-center
                    font-semibold 
                    text-[70px]
                    opacity-[0.5]
                    uppercase
                    mt-[70px]
                    phone:text-[30px]
                 ">Your cart is empty</h1>}
                <table className=" mx-auto phone:max-w-[100%] mt-[100px] phone:mt-[0] ">
                    {items.map(item => {
                        return (
                            <tbody key={item.id}>
                                <tr
                                    className="
                                    flex
                                    gap-[100px]
                                    items-center
                                    justify-between
                                    mt-[60px]
                                    phone:flex
                                    phone:flex-col
                                    phone:border-black
                                    phone:border-[2px]
                                "
                                >
                                    <td className=" phone:h-[70px] ">
                                        <img width={230} className="phone:w-[150px]" src={item.image} alt="" />
                                    </td>
                                    <td
                                        className=" 
                                            font-semibold
                                            text-[20px]
                                            phone:h-[0px]
                                        "
                                    >
                                        {item.title} ({item.quantity})
                                    </td>
                                    <td
                                        className="
                                            font-semibold
                                            text-[20px]
                                            phone:h-[0px]
                                        "
                                    >
                                        ${item.price}.00
                                    </td>
                                    <td className=" phone:h-0 ">
                                        <button
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            className="btn btn-success m-[10px]">+</button>
                                        <button
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            className="btn btn-danger">-</button>
                                    </td>
                                    <td className="phone:h-0">
                                        <button onClick={() => removeItem(item.id)} className=" btn btn-primary ">Remove Item</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                    <button
                        onClick={emptyCart}
                        className={`${isEmpty && "hidden"} phone:ml-[0] btn btn-warning ml-[700px] text-white m-[70px]`}>Clear card</button>
                </table>
            </Cart>

        </div>
    )
}

export default ShopCard