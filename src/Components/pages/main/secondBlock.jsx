import { useNavigate } from "react-router-dom";



function SecondBlock(props) {
    const navigate = useNavigate();

    return(
        <>
        <div className="second-blcok centered" style={{backgroundImage:'url(/src/main/bg3.jpg)'}}>
            <div className="container">
                <h1>На сегодня существует 2 основных пути иммиграции в ЕС:</h1>
                <ul>
                    <li>
                        <span className="count"> <span> 1</span></span> 
                        <div className="block">
                            <div className="head">Репатриация</div>
                            <div className="text">Приобретение статуса гражданина ЕС с помощью документального подтверждения этнической или территориальной связи с европейской страной</div>
                        </div>
                    </li>


                    <li>
                        <span className="count"><span> 2</span></span> 
                        <div className="block">
                            <div className="head">Натурализация</div>
                            <div className="text">Приобретение гражданства ЕС после 10 лет проживания на территории европейской страны и прохождения языкового экзамена.</div>
                        </div>
                    </li>
                </ul>
                <h2>Обращайтесь в консультационную поддержку компании Immigration и получите полную информацию о гражданстве ЕС!</h2>
            </div>
        </div>
        <div className="interest centered">
            <div className="container">
                <h1>Это может Вас заинтересовать </h1>

                <div className="blocks">
                    <div className="block">
                        <div className="img" style={{backgroundImage: 'url(/src/main/romania-main-min.jpg)'}}>
                            <div className="img-text">
                                <div className="text">Консультации по иммиграции в ЕС</div>
                                <div className="btn" onClick={()=>{
                                    navigate('/RumuniaEs')
                                }}>Подробнее</div>
                            </div>
                        </div>
                        <div className="headline">Гражданство Румынии</div>
                    </div>

                    <div className="block">
                        <div className="img" style={{backgroundImage: 'url(/src/main/bulgaria-main-min.jpg)'}}>
                            <div className="img-text">
                                <div className="text">Информация об иммиграции в Болгарию</div>
                                <div className="btn" onClick={()=>{
                                    navigate('/BolgariaEs')
                                }}>Подробнее</div>
                            </div>
                        </div>
                        <div className="headline">Гражданство Болгарии</div>
                    </div>

                    <div className="block">
                        <div className="img" style={{backgroundImage: 'url(/src/main/poland-main-min.jpg)'}}>
                            <div className="img-text">
                                <div className="text">Полноценная интеграция в польское общество</div>
                                <div className="btn" onClick={()=>{
                                    navigate('/PolandEs')
                                }}>Подробнее</div>
                            </div>
                        </div>
                        <div className="headline">Гражданство Польши</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}




export default SecondBlock;