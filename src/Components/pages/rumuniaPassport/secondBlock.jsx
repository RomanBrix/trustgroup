import LeadRequest from "../leadRequest"





function RumuniaPassportSecondBlock(props) {
    return (
        <>
            <div className="stages centered">
                <div className="container">
                    <h1 className="content-head">Как осуществляется процедура иммиграции в Румынию</h1>

                    <div className="stages-container">
                        {renderStages(stagesBezPmjContainer)}
                    </div>
                </div>
            </div>





            <div className="text-block centered" style={{background: '#f1f1f1', padding: '40px 0'}}>
                <div className="container">
                    <h1>ПАСПОРТ РУМЫНИИ ПО ПРОГРАММЕ РЕПАТРИАЦИИ</h1>
                    <p>Залогом успешного получения румынского паспорта по программе репатриации является правильная подготовка документов в соответствии с требованиями действующего законодательства. Юристы компании Immigration проконсультируют вас насчет того, как собрать необходимые документы и корректно оформить досье.</p>
                    <p>Дополнительно мы предоставляем комплекс юридических услуг, в перечень которых входит:</p>
                    <div className="mini-foto-text-container">
                        <div className="block"> 
                            <img src="/src/rumunia/job-blue-icon.png" alt="" /> 
                            <div className="headline">Консультации по поиску и оформлению документов, подтверждающих румынское происхождение</div>
                        </div>
                        <div className="block"> 
                            <img src="/src/rumunia/confidential-blue-icon.png" alt="" /> 
                            <div className="headline">Содействие на всех этапах формирования досье</div>
                        </div>
                        <div className="block"> 
                            <img src="/src/rumunia/case-blue-icon.png" alt="" /> 
                            <div className="headline">Профессиональная поддержка при подаче документов</div>
                        </div>
                        
                        <div className="block"> 
                            <img src="/src/rumunia/ebook-blue-icon.png" alt="" /> 
                            <div className="headline">Помощь в подготовке для сдачи присяги к присяге, доступ к видеоурокам по румынскому</div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="text-block centered" style={{background: '#f1f1f1', padding: '40px 0'}}>
                <div className="container">
                    <h1>Наши преимущества</h1>
                    <p>Сотрудники компании  Immigration  – это профессионалы, у которых большой опыт в области миграционного права. Клиенты, которые обращаются к нам за помощью, получают:</p>
                    <p>Дополнительно мы предоставляем комплекс юридических услуг, в перечень которых входит:</p>
                    <div className="mini-foto-text-container mini-foto-text-container-with-head">
                        <div className="block"> 
                            <img src="/src/rumunia/telephone.png" alt="" /> 
                            <div className="mini-text">
                                <h2>Бесплатную первичную консультацию по вопросам иммиграции в Румынию</h2>
                                <div className="headline">Специалисты проконсультируют вас насчет выбора оптимальной иммиграционной программы.</div>
                            </div>
                        </div>
                        <div className="block"> 
                            <img src="/src/rumunia/partners-in-business.png" alt="" /> 
                            <div className="mini-text">
                                <h2>Квалифицированные советы по подготовке документов</h2>
                                <div className="headline">Наши юристы посоветуют вам, как собрать необходимые документы и правильно составить досье</div>
                            </div>
                        </div>
                        <div className="block"> 
                            <img src="/src/rumunia/safe-box-icon.png" alt="" />
                            <div className="mini-text">
                                <h2>Полную конфиденциальность</h2> 
                                <div className="headline">Все предоставленные вами данные будут храниться в строгой анонимности и конфиденциальности</div>
                            </div>
                        </div>
                        
                        <div className="block"> 
                            <img src="/src/rumunia/customer.png" alt="" /> 
                            <div className="mini-text">
                                <h2>Консультации насчет подготовки к присяге и интервью</h2>
                                <div className="headline">Мы подробно проконсультируем вас о том, как наиболее эффективно подготовиться к сдаче присяги и прохождению интервью.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            


            <div className="intro centered" style={{backgroundImage: 'url(/src/rumunia/bg-form2-pass-rumun-min.jpg)'}}>
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>Консультируем по вопросам иммиграции в Румынию</h1>
                    </div>
                    <div className="right">
                        <LeadRequest/>
                    </div>
                </div>
            </div>


            <div className="faq-container centered">
                <div className="container">
                    <h1>Вопросы и ответы</h1>
                    <div className="faq-content">
                        {faqRender()}
                    </div>
                </div>
            </div>



            
            <div className="intro centered" style={{backgroundImage: 'url(/src/rumunia/contact-pass-bg-romania.jpg)'}}>
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>Получите информацию о преимуществах паспорта ЕС</h1>
                    </div>
                    <div className="right">
                        <LeadRequest/>
                    </div>
                </div>
            </div>
        </>
    )




    function faqRender() {
        return faqContainer.map((item, index)=>{
            return(
                <div className="faq-block" key={index + 1}>
                    <div className="headline">{item.headline}</div>
                    <div className="faq-text">
                        {item.text}
                        {
                            item.list ? 
                            <ul>
                                {item.list.map((itm, indx)=>{
                                    return <li key={indx * 11}>{itm}</li>
                                })}
                            </ul>
                            : ''
                        }
                    </div>
                </div>
            )
        })
    }


    function renderStages( arr ) {
        return arr.map((item,index)=>{
            return (
                <div className="stage" key={index}>
                    <div className="pretty-block">
                        {
                            index % 2 === 0 ?
                            <img src="/src/bolgaria/arrow-bg.svg" alt="" className="arrow" />
                            :
                            <img src="/src/bolgaria/arrow-bg-reverse.svg" alt="" className="arrow" />

                        }
                        <div className="img">
                            <img src={`/src/rumunia/${item.img}`} alt="" />
                        </div>
                        <div className="info">
                            <div className="headline">{item.head}</div>
                            <div className="text-info">{item.info}</div>
                        </div>
                    </div>
                    <ul>
                        {
                            
                            item.list ? item.list.map((it, ind)=>{
                                return <li key={ind*55}>{it}</li>
                            }) : ''
                        }
                    </ul>
                </div>
            )
        })
    }
}

const faqContainer = [
    {
        headline:'Сможет ли мой ребенок иммигрировать в Румынию вместе со мной?',
        text: 'Дети до 14 лет могут иммигрировать в Румынию вместе со своими родителями. Для этого необходимо подготовить только письменное разрешение родителей. Дети от 14 до 18 лет также имеют возможность переехать в Румынию вместе с родителями, но к пакету документов добавляется письменное заявление ребенка. Иммиграция и получение паспорта ЕС возможна с 14-летнего возраста.'
    },
    {
        headline:'Если у меня есть румынское гражданство, может ли мой ребенок его получить тоже?',
        text: 'Гражданство Румынии для ребенка можно оформить на основе программы репатриации. Достаточным условием является наличие гражданства у одного или обеих родителей'
    },
    {
        headline:'Как иммигрировать в Румынию гражданам России, Украины или Республики Беларусь?',
        text: 'Начало процесса иммиграции начинается с предоставления лицом заявления и личных документов (паспорта, свидетельства о рождении заявителя и близких родственников, справку о несудимости). Румынский паспорт украинцу, белорусу или россиянину выдается на общих для всех условиях. Паспорт Румынии для белорусов можно оформить на основе единого паспорта.'
    },
    {
        headline:'Нужно ли переводить документы на румынский язык?',
        text: 'Все документы перед подачей в Министерство юстиции Румынии переводятся на румынский язык и проходят легализацию.'
    },
    {
        headline:'Нужно ли знать румынский язык, чтобы сдать присягу?',
        text: 'Для сдачи присяги и прохождения собеседования необходимы минимальные языковые навыки. Все, что нужно, чтобы получить паспорт Румынии – выучить текст присяги и ответы на стандартные вопросы об истории и культуре страны.'
    },
    {
        headline:'Сколько поездок необходимо совершить в Румынию для получения гражданства и документов?',
        text: 'Всего необходимо совершить 4 поездки:',
        list: [
            'Подаете сформированный пакет документов',
            'Сдаете присягу и получаете Сертификат о гражданстве',
            'Подаете Сертификат для оформления паспорта',
            'Получаете готовый паспорт Румынии'
        ]
    },
    {
        headline:'Нужна ли виза для поездок в Румынию?',
        text: 'Лицам, которые проживают на территории России, Беларуси, Казахстана и других стран СНГ, необходимо оформить визу для посещения Румынии.'
    },
    {
        headline:'Нужно ли сообщать о получении румынского гражданства правительству родной страны?',
        text: 'Обладатели румынского паспорта не обязаны сообщать о его получении правительственным органам родной страны. Двойное гражданство не запрещено законом ЕС и Румынии. На территории Европейского союза вы считаетесь гражданином Румынии и живете по ее законам, а на территории родной страны остаетесь ее резидентом.'
    },
    {
        headline:'Может ли быть такое, что мне не удастся иммигрировать в Румынию?',
        text: 'В большинстве случаев основанием для отказа в иммиграции становится выявление фактов нарушения международного законодательства. Если вам не приходилось сталкиваться с подобными проблемами, то беспокоиться об отказе не стоит'
    }
]



const stagesBezPmjContainer = [
    {
        img: 'document_1.svg',
        head: 'Подготовка документов',
        info: 'Мы подробно объясним, как собрать все необходимые документы и правильно оформить досье для подачи в Министерство юстиции Румынии.',
        list: null
    },
    {
        img: 'bus.svg',
        head: 'Приезд в Румынию для подачи документов',
        info: 'В случае необходимости мы окажем информационное содействие в оформлении визы и консультационное сопровождение для успешной подачи документов в Минюст Румынии',
        list: null
    },
    {
        img: 'oath.svg',
        head: 'Прохождение присяги',
        info: 'Мы проконсультируем вас насчет эффективной подготовки к сдаче присяги на верность Румынии и предоставим доступ к урокам румынского языка. Дополнительно, вы узнаете о том, как проходит присяга и интервью с представителями Комиссии по вопросам гражданства.',
        list: null
    },
    {
        img: 'certificate.svg',
        head: 'Вручение Сертификата о гражданстве',
        info: 'Сертификат о гражданстве является основанием для оформления внутренних документов международного образца.',
        list: null
    }
]


export default RumuniaPassportSecondBlock;