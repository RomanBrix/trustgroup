import axios from "axios";
import { useState } from "react";



function LeadRequest(props) {
    const [values, setValues] = useState({
        name:'',
        phone: '',
        mail: ''
    });
    console.log(values)
    return(
        <div className="request">
            <h2>Оставьте заявку</h2>
            <p>чтобы узнать подробности</p>

            <div className="inputs">
                <input type="text" placeholder="Вашe Имя" name='name' value={values.name} onChange={({target})=>{handleChange(target)}}/>
                <input type="text" placeholder="Ваш Телефон" name='phone' value={values.phone} onChange={({target})=>{handleChange(target)}}/>
                <input type="text" placeholder="Ваш Email" name='mail' value={values.mail} onChange={({target})=>{handleChange(target)}}/>

                <div className="btn" onClick={()=>{sendData()}}>Заказать</div>
            </div>
        </div>
    )

    function handleChange(target) {
        setValues((pr)=>{
            return {
                ...pr,
                [target.name]: target.value
            }
        })
    }


    function sendData() {
        if(values.name.length < 1){
            alert('Проверьте правильно ли указанно имя')
            return
        }
        if(values.phone.length < 1){
            alert('Проверьте правильно ли указанно телефон')
            return
        }
        if(values.mail.length < 1){
            alert('Проверьте правильно ли указанно E-Mail')
            return
        }


        // axios.post('https://localhost:1488/bot_anal', values)
        axios.post('https://euimmigration.services:1488/bot_anal', values)
        .then((res)=>{
            console.log(res.data);

            if(res.data){
                alert('Заявка принята! Ожидайте звонка');
                setValues({
                    name:'',
                    phone: '',
                    mail: ''
                })
            }else{
                alert('Произошла ошибка =( Свяжитесь с нами другим вариантом!')
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}



export default LeadRequest;