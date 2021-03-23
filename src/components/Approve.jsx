import './Approve.css';
const Approve = (props) => {

    return <div className="third_wrapper">
        <div className="close">Закрыть</div>
        <div className="wrapper_approve">
            <p className="your_name">Татьяна,</p>
            <p>заказ <span className="blue_span">№</span><span className="order_number"> сформирован!</span></p>
            <p>Мы повторили его комплектацию на почту </p>
            <p><span className="total_email">mail@mail.ru</span></p>
            <p>В ближайшее время наш специалист</p>
            <p>свяжется с вами по телефону</p>
            <p><span className="total_phone">+7(917)111-22-33</span></p>
        </div>
    </div>
}

export default Approve