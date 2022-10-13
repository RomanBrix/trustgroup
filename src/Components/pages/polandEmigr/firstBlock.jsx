import LeadRequest from "../leadRequest";





function PolandEmigFirstBlock(props) {
    return (
        <>
            <div className="intro centered" style={{backgroundImage: 'url(/src/poland/bg-poland-pass.jpg)'}}>
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>Квалифицированные консультации относительно оформления карты поляка и гражданства Польши</h1>
                    </div>
                    <div className="right">
                        <LeadRequest/>
                    </div>
                </div>
            </div>

            <div className="text-block centered" style={{background: '#f1f1f1'}}>
                <div className="container">
                    <h1>Перечень необходимых документов</h1>
                    <p>Карта поляка (Karta Polaka) - это специальный документ, который подтверждает принадлежность граждан стран СНГ и Балтии к народу Польши, дающий при этом владельцу карты ряд неких преимуществ. Закон о карте поляка подписан президентом Польши Лехом Качиньским осенью 2007 года, а 1 апреля 2016 года появилась новая редакция закона, облегчающая процесс для получения польского гражданства при наличии карты поляка. Согласно постановлению человек, получивший легальное разрешение на пребывание в Польше на основании Карты поляка и проживший в стране 1 год, получает право оформить гражданство Польши.</p>
                    <p>Помимо этого, правительством реализована конкретная правовая помощь для всех желающих иммигрировать на территорию Польши, выраженная в предоставлении претендентам адаптационного финансового пакета. С сентября 2016 года обладатели Карты поляка освобождаются от оплаты за получение национальной визы и административного сбора по обработке документов при подаче ходатайства о постоянном месте жительства (karta stałego pobytu) в Польше или польском гражданстве.</p>
                    <p>Также изменения коснулись способов подтверждения иностранцами владения национальным языком.</p>
                    <p>Иностранный претендент может быть освобожден от личной беседы с консулом при наличии одного из следующих документов:</p>
                    <ul>
                        <li>Свидетельства о получении среднего или высшего образования, обучение в котором велось на польском языке</li>
                        <li>Сертификата знания польского языка, выданного Государственной Комиссией подтверждения знания польского языка как иностранного</li>
                    </ul>
                </div>
            </div>

            

            <div className="stages centered">
                <div className="container">
                    <h1 className="content-head">Этапы получения польского гражданства</h1>

                    <div className="stages-container">
                        {renderStages(stagesBezPmjContainer)}
                    </div>
                </div>
            </div>


            <div className="text-block centered" style={{background: '#f1f1f1'}}>
                <div className="container">
                    <h1>Особенности и преимущества карты поляка</h1>
                    <p>Карта поляка дает основания для законной иммиграции в Польшу. Прожив 1 год в Польше у обладателя Карты поляка есть возможность оформить польское гражданство, а значит и получить все права гражданина ЕС. При этом ему не обязательно отказываться от прежнего гражданства.</p>
                    <p>Тем, кто не намерен оформлять гражданство, карта поляка, действительна в течение 10 лет, позволит работать в Польше без дополнительных разрешающих документов в том числе пользоваться установленными законом привилегиями.</p>

<p>Юристы компании « Immigration» объяснят вам, как собрать доказательства ваших польских корней, кроме этого предоставят полноценную информационную поддержку на всех этапах оформления карты поляка и впоследствии гражданства Польши.</p>
                </div>
            </div>


            <div className="intro centered" style={{backgroundImage: 'url(/src/poland/contact-pass-bg-poland.jpg)'}}>
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>Квалифицированные консультации относительно оформления карты поляка и гражданства Польши</h1>
                    </div>
                    <div className="right">
                        <LeadRequest/>
                    </div>
                </div>
            </div>
        </>
    )




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
                            <img src={`/src/poland/${item.img}`} alt="" />
                        </div>
                        <div className="info">
                            <div className="headline">{item.head}</div>
                            <div className="text-info">{item.info}</div>
                        </div>
                    </div>
                </div>
            )
        })
    }
}


const stagesBezPmjContainer = [
    {
        img: 'anketa.svg',
        head: '',
        info: 'Первичная консультация со специалистами компании Immigration',
        list: null
    },
    {
        img: 'document_3.svg',
        head: '',
        info: 'Требование и подготовка необходимых документов, заполнение анкеты (wniosek o przyznanie Karty Polaka).',
        list: null
    },
    {
        img: 'talk.svg',
        head: '',
        info: 'Бронирование встречи с консулом и прохождение интервью на польском языке / Предоставление сертификата или свидетельства о знании польского языка.',
        list: null
    },
    {
        img: '1.svg',
        head: '',
        info: 'Получение заявителем на руки пластиковой Карты поляка.',
        list: null
    }
]

export default PolandEmigFirstBlock;