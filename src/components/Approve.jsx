import './Approve.css';
const Approve = (props) => {

    return <div className="third_wrapper">
        <div className="close">Закрыть</div>
        <div className="wrapper_approve">
            <p className="your_name">{props.state.name}</p>
            <p>заказ <span className="blue_span">№</span><span className="order_number"></span>сформирован!</p>
            <p>Мы повторили его комплектацию на почту </p>
            <p><span className="total_email">{props.state.email}</span></p>
            <p>В ближайшее время наш специалист</p>
            <p>свяжется с вами по телефону</p>
            <p><span className="total_phone">{props.state.phone}</span></p>
        </div>
    </div>
}

export default Approve