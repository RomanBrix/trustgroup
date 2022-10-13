import LeadRequest from "../leadRequest"




function BolgariaFourthBlock(props) {
    

    return(
        <>
            <div className="fetures dark-fetures centered">
                <div className="container">
                    <h1 className="content-head">Почему именно компания Trust Group</h1>
                    <div className="fetures-container">
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/features-work.svg" alt="" />
                            </div>
                            <div className="head">
                                Предоставление важной информации о гражданстве Болгарии
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/fetures-time.svg" alt="" />
                            </div>
                            <div className="head">Оперативная консультационная поддержка в комфортное для Вас время</div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/features-locked_folder.svg" alt="" />
                            </div>
                            <div className="head">Конфиденциальность и защита данных каждого клиента</div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="fetures  centered">
                <div className="container">
                    <h1 className="content-head">Особенности страны</h1>
                    <div className="content-after-head">Болгария — страна-участник Европейского союза, которая предоставляет своим гражданам полноправные права граждан ЕС, среди которых:</div>
                    <div className="fetures-container">
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/plane.svg" alt="" />
                            </div>
                            <div className="head">
                                Свободное передвижение по 171 государству мира без оформления виз
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/education.svg" alt="" />
                            </div>
                            <div className="head">Возможность легального проживания, обучения и трудоустройства в любой из стран-участниц Европейского союза</div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/health.svg" alt="" />
                            </div>
                            <div className="head">Высокий уровень социального обеспечения и бесплатного медицинского обслуживания на территории ЕС</div>
                        </div>


                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/business.svg" alt="" />
                            </div>
                            <div className="head">Широкие перспективы для ведения собственного бизнеса</div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/passport.svg" alt="" />
                            </div>
                            <div className="head">Нет необходимости отказываться от своего родного гражданства</div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/tax.svg" alt="" />
                            </div>
                            <div className="head">Гибкая налоговая политика</div>
                        </div>


                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/house.svg" alt="" />
                            </div>
                            <div className="head">Право на приобретение недвижимости в любой европейской стране</div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/family.svg" alt="" />
                            </div>
                            <div className="head">Возможность приобретения гражданства ЕС для всей семьи</div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/level.svg" alt="" />
                            </div>
                            <div className="head">Обеспечение достойного уровня жизни.</div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="intro centered" style={{backgroundImage: 'url(/src/bolgaria/contact-bg-eu.jpg)'}}>
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


export default BolgariaFourthBlock