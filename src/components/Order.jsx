import './order.css';

const Order = (props) => {
    
    const materials = [{
        name: "Профнастил 400 Р за м2 ",
        price: 400
    }, {
        name: "Модули 500 Р за м2",
        price: 500
    },
    {
        name: "Бетон 700 Р за м2",
        price:700 
    },{
        name: "Сетка за 200 Р за м2",
        price: 200
    }]

    return <div className="wrapper">

        <div className="h">Заказать забор</div>
        <p className="title_length">Длина забора</p>
        <div className="wrapper_inside">
            <form>
                <div className="input_length">
                    <input className="input_first" type="text" />
                    <div className="length_meter">метров<span className="green_tick"> </span></div>
                </div>
                <p className="error"></p>
                <p className="height_title">Высота Забора</p>
                <div className="input_height">

                    <input type="text" className="input_second" />
                    <div className="height_meter">метров <span className="green_tick"> </span></div>

                </div>
                <p className="error"></p>
                <p className="material">Материал забора</p>
                <div className="selection">
                    <select className="select">
                        {materials.map(material => <option value={material.price}>{material.name}</option>)}
                    </select>
                </div >
                <label className="label" htmlFor="id1">
                    <input class="checkbox" id="id1" type="checkbox" />
                    <span className="fake"></span>
                    <span className="text">Нужен монтаж</span>
                </label>
                <div className="sum_wrapper">
                    <p>Сумма заказа:<span class="red"><span className="total_sum">0</span>₽</span></p>
                </div>
                <div className="button"><input type="submit" className="next" value="ДАЛЕЕ" disabled="disabled"></input></div>
            </form>
        </div >
    </div >
}

export default Order