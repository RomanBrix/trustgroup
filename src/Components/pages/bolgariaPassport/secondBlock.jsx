import LeadRequest from "../leadRequest"




function BolgariaPassportSecondBlock(props) {
    
    return (
        <>
        
            <div className="block-five centered">
                <div className="container">
                    <h1>Перечень документов, необходимых для получения паспорта</h1>
                    <div className="photo-container">

                        <div className="photo" style={{cursor:'default'}}>
                            <div className="img">
                                <img src="/src/bolgaria/birth-doc-img.jpg" alt="" style={{transform:'scale(1.3)'}}/>
                            </div>
                            <div className="headline">Свидетельство о рождении заявителя</div>
                        </div>

                        <div className="photo" style={{cursor:'default'}}>
                            <div className="img">
                                <img style={{transform:'scale(1.3)'}} src="/src/bolgaria/bolg-proishod-doc.jpg" alt="" />
                            </div>
                            <div className="headline">Документация, подтверждающая болгарское происхождение (свидетельства о рождении обоих родителей, свидетельства об их браке)</div>
                        </div>

                        <div className="photo" style={{cursor:'default'}}>
                            <div className="img">
                                <img style={{transform:'scale(1.3)'}} src="/src/bolgaria/medical-doc.jpg" alt="" />
                            </div>
                            <div className="headline">Медицинская справка, подтверждающая отсутствие инфекционных заболеваний и справка формы Ф-082</div>
                        </div>

                        <div className="photo" style={{cursor:'default'}}>
                            <div className="img">
                                <img style={{transform:'scale(1.3)'}} src="/src/bolgaria/nesudimost.jpg" alt="" />
                            </div>
                            <div className="headline">Справка об отсутствии судимости</div>
                        </div>

                        <div className="photo" style={{cursor:'default'}}>
                            <div className="img">
                                <img style={{transform:'scale(1.3)'}} src="/src/bolgaria/passports-copy.jpg" alt="" />
                            </div>
                            <div className="headline">Копии заграничного и внутреннего паспортов</div>
                        </div>
                        <div className="photo" style={{cursor:'default'}}>
                            <div className="img">
                                <img style={{transform:'scale(1.3)'}} src="/src/bolgaria/photos-for-docs.jpg" alt="" />
                            </div>
                            <div className="headline">Фотографии 3,5Х4,5</div>
                        </div>
                    </div>

                    <p className="content-after-head">Сотрудники  Immigration предоставят детальную консультацию по интересующим Вас вопросов: начиная с общих деталей  оформления паспорта, и заканчивая нюансами подготовки документации. Если некоторые справки или документы отсутствуют, наши юристы разъяснят, как истребовать их через государственные учреждения и архивы. Мы проконсультируем в вопросах перевода документов и составления полного пакета для подачи в Министерство правосудия.</p>
                </div>
            </div>





            <div className="text-block centered" style={{background: '#f1f1f1', padding: '40px 0'}}>
                <div className="container">
                    <h1>Преимущества болгарского паспорта для граждан СНГ</h1>
                </div>
            </div>

            <div className="info-blocks centered">
                <div className="container">
                    <div className="info-block">
                        <div className="left">
                            <p>Проживание на территории Республики Болгария и стран ЕС: неограниченное количество времени и без дополнительных документов</p>
                        </div>
                        <div className="right"><img src="/src/bolgaria/eu-logo-icon.png" alt="" /></div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>Безвизовые путешествия: более чем 170 стран мира, включая Японию, Канаду и США</p>
                        </div>
                        <div className="right"><img src="/src/bolgaria/around-icon.png" alt="" /></div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>Официальное трудоустройство в любом государстве Евросоюза: полный соцпакет и конкурентная заработная плата</p>
                        </div>
                        <div className="right"><img src="/src/bolgaria/accounting-icon.png" alt="" /></div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>Доступное обучение в лучших европейских вузах: стипендиальные программы и гранты</p>
                        </div>
                        <div className="right"><img src="/src/bolgaria/student-icon.png" alt="" /></div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>Комфортные и безопасные условия для ведения бизнеса: налоговые каникулы, льготы, выгодное кредитование для предпринимателей</p>
                        </div>
                        <div className="right"><img src="/src/bolgaria/suitcase.png" alt="" /></div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>Высококачественная медицина: доступ к лучшим европейским клиникам и реальная медицинская страховка</p>
                        </div>
                        <div className="right"><img src="/src/bolgaria/medical-history-icon.png" alt="" /></div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>Социальные гарантии: пенсионное и льготное обеспечение граждан</p>
                        </div>
                        <div className="right"><img src="/src/bolgaria/percent-icon.png" alt="" /></div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>Доступная недвижимость: право покупать недвижимость в любой стране ЕС, отсутствие дополнительного налогообложения, лояльные условия ипотечных кредитов</p>
                        </div>
                        <div className="right"><img src="/src/bolgaria/house-icon.png" alt="" /></div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>Государственная защита: юридическая безопасность в любом уголке планеты</p>
                        </div>
                        <div className="right"><img src="/src/bolgaria/worldwide-icon.png" alt="" /></div>
                    </div>
                </div>
            </div>



            
            <div className="second-blcok centered" style={{backgroundImage:'url(/src/bolgaria/bolgar-pass-bg.jpg)'}}>
                <div className="container">
                    <h1>Способы получения паспорта Болгарии</h1>
                    <p className="content-after-head" style={{color: '#fff'}}>Закон «О гражданстве Болгарии» от 20.02.1999 года предусматривает несколько способов получения болгарского паспорта. Это:</p>
                    <ul>
                        <li>
                            <span className="count"> <span> 1</span></span> 
                            <div className="block">
                                <div className="text">Натурализация (12-19 статьи закона “О гражданстве”). Получить гражданство Республики Болгария могут люди, которые оформили вид на жительство не менее, чем за 5 лет до подачи заявления и непрерывно пребывали в течении этого времени на территории страны.
В процессе программы натурализации к претендентам выдвигается ряд других требований:
                                    <ul>
                                        <li>совершеннолетний возраст;</li>
                                        <li>отсутствие судимости;</li>
                                        <li>подтверждение платежеспособности и источника постоянного дохода;</li>
                                        <li>знание болгарского языка и умение свободно изъясняться.</li>
                                    </ul>
                                    К тому же эта программа требует отказа от текущего гражданства для присвоения болгарского. Срок постоянного проживания на территории государства будет сокращен до 3 лет, если заявитель состоит в браке с болгарским гражданином или родился на территории республики Болгария.
                                </div>
                            </div>
                        </li>


                        <li>
                            <span className="count"><span> 2</span></span> 
                            <div className="block">
                                <div className="text">По месту рождения (10 и 11 статьи закона “О гражданстве”). Гражданином республики становится претендент, который родился на территории страны и не получивший резидентство другого государства по происхождению. Кроме того статус болгарского гражданина получают дети, которые родились в этой стране, но их родители неизвестны.</div>
                            </div>
                        </li>


                        <li>
                            <span className="count"><span> 3</span></span> 
                            <div className="block">
                                <div className="text">Репатриация или по происхождению (8 и 9 статьи закона “О гражданстве”) даёт возможность оформить болгарский паспорт потомкам этнических болгар. 
В этой программе получить гражданство могут:

                                    <ul>
                                        <li>чьи родители (или один из родителей) болгарские граждане, которые сумели доказать свое этническое происхождение в судебном порядке.</li>
                                        <li> лица сумевшие доказать свое этническое происхождение в судебном порядке.</li>
                                    </ul>
                                    Наши юристы проконсультируют в вопросах подготовки всех документов, в том числе доказательств Вашего происхождения.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



            <div className="block-four centered">
                <div className="container">
                    <h1>Этапы оформления паспорта Болгарии</h1>
                    {generateBlock()}
                </div>
            </div>



            <div className="some-centered-text centered">
                <div className="container">
                    <div className="some-text">Благодаря нашим консультациям Вы получите болгарский паспорт, не теряя времени и сил.
Опытные юристы объяснят, как подготовить документы на оформление гражданств, которые пройдут все проверки. Следуя советам миграционного специалиста, Вы с легкостью пройдете все этапы и станете полноправным гражданином Республики Болгария. 
Наши профессионалы с радостью ответят на любые Ваши вопросы!</div>
                </div>
            </div>



            <div className="faq-container centered">
                <div className="container">
                    <h1>Частые вопросы на тему паспорта Болгарии</h1>
                    <div className="faq-content">
                        {faqRender()}
                    </div>
                </div>
            </div>


            
            <div className="intro centered" style={{backgroundImage: 'url(/src/bolgaria/contact-pass-bg-bulgaria.jpg)'}}>
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>Консультация иммиграционного специалиста</h1>
                    </div>
                    <div className="right">
                        <LeadRequest/>
                    </div>
                </div>
            </div>
        </>
    )

    function generateBlock(params) {
        return dataFoBlock.map((item, index)=>{
            return (
                <div className="big-info-blocks" key={index}>
                    <div className="top-img">
                        <div className="border-img"/>
                        <div className="img">
                            <img src={`/src/bolgaria/${item.img}`} alt="" style={index === 1 ? {width: '60%'} : {}}/>
                        </div>
                    </div>
                    <div className="text">
                        <div className="headline">{item.title}</div>
                        <div className="text">
                            {item.text}
                        </div>
                    </div>
                </div>
            )
        })
    }




    function faqRender() {
        return faqContainer.map((item, index)=>{
            return(
                <div className="faq-block" key={index + 1}>
                    <div className="headline">{item.headline}</div>
                    <div className="faq-text">
                        {item.text}
                    </div>
                </div>
            )
        })
    }
}



const faqContainer = [
    {
        headline:'Обязательно ли лично посещать Болгарию для получения паспорта?',
        text: 'Для получения внутренних документов присутствие заявителя обязательно. Болгарский паспорт выдают на руки лично его владельцу.'
    },
    {
        headline:'Можно ли оформить паспорт Болгарии без базового знания языка?',
        text: 'Знание государственного языка – обязательное требование для многих программ. В рамках натурализации необходимо владеть болгарским на высоком уровне. В процессе репатриации допустимо воспользоваться услугами переводчика, поэтому нет необходимости изучать язык.'
    }
]


const dataFoBlock = [
    {
        title: 'Подготовка документов',
        text: <p>
                Начать необходимо c анализа ваших документов, чтобы найти болгарские корни. На этом этапе вам нужно иметь:
                <ul>
                    <li>Копии ваших заграничного и внутреннего паспортов</li>
                    <li>Ваше свидетельство о рождении, а также свидетельства о рождении родителей</li>
                    <li>Свидетельства о браке родителей</li>
                </ul>
                В процессе подготовки пакета документов наши эксперты объяснят Вам, как истребовать недостающие справки через государственные архивы.
            </p> ,
        img: 'satge-file.png'
    },
    {
        title: 'Подача документов в Министерство правосудия и интервью',
        text: 'Для подачи в Министерство правосудия Вам нужно собрать пакет документов, перевести их на болгарский язык и провести легализацию. Наш юрист проконсультирует Вас по этим вопросам. Также мы дадим рекомендации для подачи документов и прохождения собеседования с представителем Министерства.',
        img: 'bbb.svg'
    },
]


export default BolgariaPassportSecondBlock;