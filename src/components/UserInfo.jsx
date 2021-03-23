import './Userinfo.css';

const UserInfo = (props) => {
    const setState = props.setState
    return <div className="wrapper_oth">
        <div className="wrapper_back">
            <div className="span_back"></div>
            <div className="back">Вернуться</div></div>
        <div className="wrapper_user">
            <div className="wrapper_user_inside">
                <div className="main">Пожалуйста,представьтесь</div>
                <div className="name">Ваше имя</div>
                <input type="text" value={props.state.name} className="name_input" onChange={e => setState(oldState => ({...oldState, name: e.target.value}))} />
                <div className="email">Электронная почта</div>
                <input type="text" value={props.state.email} className="email_input"onChange={e => setState(oldState => ({...oldState, email: e.target.value}))} ></input>
                <div className="telephone">Телефон</div>
                <input type="number" className="telephone_input" value={props.state.phone} onChange={e => setState(oldState => ({...oldState, phone: e.target.value}))} placeholder="Example: +7-(905)-728-82-73" />
                <p class="p">Вы укомплектовали забор</p>
                <p class="p"><span className="blue_span">длинной <span className="total_width">6</span> метров</span> и <span className="blue_span">высотой<span className="total_height"> 2</span>  </span></p>
                <p class="p"><span className="blue_span">метра </span>из материала <span class="total_material">профнастил</span></p>
                <p class="p">на сумму <span className="total_sum">8400</span><span class="red">₽</span></p>
                <input type="submit" disabled="disabled" className="info_submit" />
            </div>
        </div>
    </div>
}

export default UserInfo