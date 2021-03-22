const Order = (props) => {
    const setState = props.setState
    return <div>
        <h1>Order</h1>
        <input onChange={event => setState(oldState => ({...oldState, price: event.target.value}) )} />
    </div>
}

export default Order