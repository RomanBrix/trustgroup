import LeadRequest from "../leadRequest";



function BolgariaSecondBlock(props) {
    return (
        <>
            <div className="info-cards centered">
                <div className="container">
                    <h1 className="content-head">Программы иммиграции в Болгарию</h1>
                    <div className="info-card">
                        <div className="info-card-img">
                            <img src="/src/bolgaria/location.png" alt="" />
                        </div>
                        <div className="info-card-text">
                            <div className="headline">Репатриация</div>
                            <div className="afterhead">(возможность переехать в Болгарию при наличии этнических корней)</div>
                            <p>Иностранным гражданам болгарского происхождения статьей 15 Закона о гражданстве РБ предоставлено право получить гражданство Болгарии. Принадлежность иностранца к болгарам определяет наличие в роду прямого родственника болгарской национальности. Для доказательства этнической принадлежности необходимо предоставить документы, подтверждающие прямую связь с болгарским предком.</p>
                        </div>
                    </div>


                    <div className="info-card">
                        <div className="info-card-img">
                            <img src="/src/bolgaria/1.svg" alt="" />
                        </div>
                        <div className="info-card-text">
                            <div className="headline">Натурализация</div>
                            <div className="afterhead">(позволяет оформить гражданство Болгарии на общих условиях)</div>
                            <p>Отсутствие болгарских корней или крупной инвестиционной суммы приводят иностранцев к наиболее сложному и длительному пути получения гражданства Болгарии – натурализации. Претендовать на гражданство Болгарии может любой иностранец, соответствующий таким требованиям:</p>
                            <ul className="list">
                                <li>
                                    <img src="/src/bolgaria/check.svg" alt="" />
                                    <span>легальное проживание в Республике, как и при оформлении гражданства Германии минимум, 10 лет (5 лет с ВНЖ + 5 лет с ДВЖ/ПМЖ)</span>
                                </li>
                                <li>
                                    <img src="/src/bolgaria/check.svg" alt="" />
                                    <span>достижение совершеннолетия</span>
                                </li>
                                <li>
                                    <img src="/src/bolgaria/check.svg" alt="" />
                                    <span>отсутствие судимости</span>
                                </li>
                                <li>
                                    <img src="/src/bolgaria/check.svg" alt="" />
                                    <span>знание болгарского языка</span>
                                </li>
                                <li>
                                    <img src="/src/bolgaria/check.svg" alt="" />
                                    <span>отказ от текущего гражданства</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <div className="intro centered" style={{backgroundImage: 'url(/src/bolgaria/2-new.jpg)'}}>
                <div className="container">
                    <div className="left">
                        <img src="/src/rumunia/contact-col-bg.png" alt="" />
                        <h1>Консультационная поддержка в вопросах гражданства ЕC</h1>
                    </div>
                    <div className="right">
                        <LeadRequest/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default BolgariaSecondBlock;