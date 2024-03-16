const Cart = ({ showcart, children }) => {
    return (
        <div
            className={`${showcart}`
            }>
            {children}
        </div>
    )
}

export default Cart