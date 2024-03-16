import storeLogo from "./images/storeLogo.webp"

const Navbar = ({ showCart, hideCart }) => {
    return (
        <nav
            className="
        h-[80px]
        w-[1200px]
        flex
        items-center
        justify-between
        pl-[50px]
        pr-[50px]
        phone:max-w-[100%]
      "
        >

            <img
                src={storeLogo}
                alt="Store"
                className=" w-[80px] phone:w-[40px] "
            />

            <div
                className=" flex gap-[40px] "
            >
                <button
                    onClick={showCart}
                    className=" 
            fa-solid fa-cart-shopping
            text-orange-500
            text-[30px]
            animate-bounce
            phone:text-[15px]
          "
                ></button>
                <button>
                    <button
                        onClick={hideCart}
                        className="
              bg-blue-500
              w-[120px]
              h-[45px]
              rounded-[10px]
              text-white
              font-semibold
              text-[17px]
              animate-bounce
              fas fa-backward
              phone:text-[15px]
              phone:w-[35px]
              phone:h-[35px]
            "
                    > 
                        <span className="phone:hidden">
                        Back
                        </span>
                    </button>
                </button>
            </div>

        </nav>
    )
}

export default Navbar