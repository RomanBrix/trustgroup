import LeadRequest from "../leadRequest"



function About(props) {
    return (
        <div className="rumunia-passport poland-passport bolgaria-passport bolgaria-es rumunia-es poland-es about">
            <div className="intro centered" style={{backgroundImage: 'url(/src/about/bg-top.jpg)'}}>
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>Для успешного получения гражданства ЕС проконсультируйтесь со специалистами Immigration!</h1>
                    </div>
                    <div className="right">
                        <LeadRequest/>
                    </div>
                </div>
            </div>




            <div className="photo-text centered">
                <div className="container">
                    <h1 className="content-head">О компании Immigration</h1>
                    <div className="photo-text-contaner">
                        <img src="/src/about/img-about.jpg" alt="" />

                        <div className="text">
                            <p>Сотрудничая с компанией  Immigration, Вы получите максимальную поддержку с момента выбора программы иммиграции и до успешного присвоения Вам гражданства Евросоюза. </p>
                            <p>Дополнительно  специалисты компании расскажут Вам, как оформить внутренние документы гражданина ЕС: ID-карту, заграничный паспорт, свидетельство о рождении европейского образца и водительское удостоверение.</p>
                            <p>Наша компания ни на секунду не забывает о защите персональной информации клиентов , спокойствие и интересы клиентов – наш главный приоритет. </p>
                            <p>Наши специалисты знают все об иммиграционных программах Евросоюза и с радостью проконсультируют Вас!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="afterIntro centered">
                <div className="container">
                    <h2>Immigration это:</h2>
                    <div className="blocks">
                        <div className="block">
                            <img src="/src/main/about_3.svg" alt="" />
                            <p>Информационное сопровождение на всех этапах работы</p>
                        </div>
                        <div className="block">
                            <img src="/src/main/about_4.svg" alt="" />
                            <p>Высокий уровень компетентности специалистов</p>
                        </div>
                        <div className="block">
                            <img src="/src/main/about_5.svg" alt="" />
                            <p>Грамотно организованный сервис</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="main"> */}
                <div className="intro centered" style={{backgroundImage: 'url(/src/about/contact-bg-eu.jpeg)'}}>
                    <div className="container">
                        <div className="left">
                            <img src="/src/poland/contact-col-bg.png" alt="" />
                            <h1>Для успешного получения гражданства ЕС проконсультируйтесь со специалистами Immigration!</h1>
                        </div>
                        <div className="right">
                            <LeadRequest/>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}


export default About