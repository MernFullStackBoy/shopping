import React from 'react'
import { useCart } from 'react-use-cart'

const Card = ({ image, title, desc, price, item, noprice, added }) => {

    return (
        <div
            className="
                font-semibold
                w-[290px]
                h-[500px]
                flex
                flex-col
                items-center
                rounded-[20px]
                p-[20px]
                hover:bg-slate-200
                gap-[20px]
            "
        >
            <div className=" h-[250px] ">
                <img
                    src={image}
                    alt="Stores"
                />
            </div>

            <div>
                <h1
                    className="
                        text-[20px]
                    "
                >{title}</h1>
                <p className=" mt-1 ">{desc}</p> <br />
                <i>${price}.00</i>
            </div>
            <button
                className="
                    w-[200px]
                    h-[50px]
                    bg-blue-500
                    rounded-[20px]
                    text-white
                    mt-[10px]
                "
                onClick={added}
            >Add to Cart</button>
        </div>
    )
}

export default Card