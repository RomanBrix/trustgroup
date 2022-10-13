import axios from "axios";
import { useState } from "react";



function Qa(props) {
    
    const [values, setValues] = useState({
        name:'',
        phone: '',
        mail: '',
        msg: '',
        status: '',
        procedure:''
    });


    return (
        <div className="rumunia-passport poland-passport bolgaria-passport bolgaria-es rumunia-es poland-es qa main" style={{backgroundImage: 'url("/src/qa/bg3.jpg")'}}>
            
            <div className="container">
                <div className="form" style={{backgroundImage: 'url("/src/qa/bg2.jpg")'}}>
                    <div className="top" >
                        <h1>У ВАС ПОЯВИЛИСЬ ЗАМЕЧАНИЯ, ПРЕДЛОЖЕНИЯ ИЛИ ВОПРОСЫ? ДАВАЙТЕ ОБСУДИМ ИХ — ЭТО ПОМОЖЕТ НАМ СТАТЬ ЛУЧШЕ!</h1>
                        <p>Оставьте свои контактные данные, и мы с вами свяжемся в ближайшее время.</p>
                    </div>

                    <div className="bottom">
                        
                        <input type="text" placeholder="Ваше Имя" name='name' value={values.name} onChange={({target})=>{changeVal(target)}}/>
                        <input type="text" placeholder="Ваше Телефон" name='phone' value={values.phone} onChange={({target})=>{changeVal(target)}}/>
                        <input type="text" placeholder="Ваше E-Mail" name='mail' value={values.mail} onChange={({target})=>{changeVal(target)}}/>
                        <div className="selects">
                            <select name="status" defaultValue={''} id="status" onChange={({target})=>{changeVal(target)}}>
                                <option value="" disabled="">Укажите Ваш статус</option>
                                <option value="Клиент">Клиент</option>
                                <option value="Не клиент">Не клиент</option>
                            </select>


                            <select name="procedure" defaultValue={''} id="procedure" onChange={({target})=>{changeVal(target)}}>
                                <option value=""  disabled="">Выберите процедуру</option>
                                <option value="Гражданство Румынии">Гражданство Румынии</option>
                                <option value="Гражданство Болгарии">Гражданство Болгарии</option>
                                <option value="Карта поляка">Карта поляка</option>
                                <option value="ВНЖ Черногории">ВНЖ Черногории</option>
                                <option value="другое">другое</option>
                            </select>
                        </div>
                        <textarea id="msg" name="msg" placeholder="Описание обращения" onChange={({target})=>{changeVal(target)}}/>
                        <div className="btn btn-send" onClick={()=>{sendData()}}>Отправить</div>
                    </div>
                </div>
            </div>

        </div>
    )
    function changeVal(target) {
        console.log(target.value);
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
        
        if(values.msg.length < 1){
            alert('Проверьте правильно ли указанно Сообщение')
            return
        }
        if(values.status.length < 1){
            alert('Проверьте правильно ли указанно "Статус"')
            return
        }
        if(values.procedure.length < 1){
            alert('Проверьте правильно ли указанно "Процедура"')
            return
        }

        console.log(values);
        

        // axios.post('https://localhost:1488/bot_anal', values)
        axios.post('https://euimmigration.services:1488/bot_anal_v2', values)
        .then((res)=>{
            console.log(res.data);

            if(res.data){
                alert('Заявка принята! Ожидайте звонка');
                setValues({
                    name:'',
                    phone: '',
                    mail: '',
                    msg: '',
                    status: '',
                    procedure:''
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


export default Qa