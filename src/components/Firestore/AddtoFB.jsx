
function AddtoFB({ cart, price, db }) {


    const createValue = () => {
        db.collection("purchaseOrders")
            .doc()
            .set({ price: price, cart: cart })
            .then(() => { getValue() })

    }
    createValue()

    const getValue = () => {
        db.collection("purchaseOrders").getDoc().doc()
    }

    let counter = 0



    return (
        <>
            <div className="text-center text-2xl text-white">Thank you for your purchase!</div><br />
            <div className="overflow-x-auto mx-20">
                <table className="table table-compact w-full">
                    <thead className='text-center'>
                        <tr>
                            <th></th>
                            <th className='text-xl'>Name</th>
                            <th className='text-xl'>Price</th>
                            <th className='text-xl'>Discounted Price</th>
                            <th className='text-xl'>Quantity</th>
                            <th className='text-xl'>Total</th>

                        </tr>
                    </thead>
                    {cart.map((item) => <tbody className='text-center' key={item.id}>
                        <tr>
                            <th className='text-lg'>{counter += 1}</th>
                            <td className='text-lg'>{item.title}</td>
                            <td className='text-lg'>{item.price}</td>
                            <td className='text-lg'>{item.dprice}</td>
                            <td className='text-lg'>{item.amount}</td>
                            <td className='text-lg'>{item.dprice * item.amount}</td>

                        </tr>

                    </tbody>)}
                </table>
                <br />
                <div className="text-center text-2xl text-white">Total of your purchase: ${price} USD</div>
                <br />
            </div>
        </>
    )
}
export default AddtoFB