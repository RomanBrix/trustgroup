import LeadRequest from "../leadRequest";



function SecondBlockCgernogoria(props) {
    return (
        <>
            <div className="stages centered">
                <div className="container">
                    <h1 className="content-head">Процедура оформления</h1>

                    <div className="stages-container">
                        {renderStages(stagesBezPmjContainer)}
                    </div>
                </div>
            </div>


            <div className="text-block centered" style={{background: '#E2EDF6'}}>
                <div className="container">
                    <h1>Как продлить ВНЖ и оформить ПМЖ/гражданство</h1>
                    <p>Срок действия вида на жительство составляет 1 год. По прошествии этого времени владелец документа обязан повторно обратиться в представительство Министерства внутренних дел по месту жительства с заявлением о продлении ВНЖ.</p>
                    <p>Оформление разрешения на ПМЖ становится доступно лицам, которые не менее 5 лет прожили на территории страны в статусе ВНЖ, не нарушали законодательство и вели официальную деятельность. В дальнейшем, для получения гражданства нужно, чтобы суммарный срок пребывания в Черногории составлял больше 10 лет, при этом к будущему гражданину выдвигается требование об отказе от паспорта родного государства.</p>
                </div>
            </div>



            <div className="text-block centered" >
                <div className="container">
                    <h1>Как использовать для перемещения по ЕС</h1>
                    <p>Статус временного резидента Черногории открывает путь к получению гражданства посредством натурализации. С момента входа Черногории в состав Европейского союза, что случится в ближайшее время, граждане страны смогут свободно путешествовать по территории всего мира и кроме того постоянно проживать в какой-либо из стран ЕС.</p>
                </div>
            </div>



            
            <div className="intro centered" style={{backgroundImage: 'url(/src/chernogoria/bg3.jpg)'}}>
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>Узнайте у специалистов Immigration, как получить ВНЖ в Черногории</h1>
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
                            <img src={`/src/chernogoria/${item.img}`} alt="" />
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
        img: 'icon-time.png',
        head: 'Регистрация бизнеса',
        info: 'Первый шаг – выбор сферы будущей деятельности, регистрация компании, формирование уставного капитала, а также назначение владельца бизнеса на пост официального директора.',
        list: null
    },
    {
        img: 'icon-1.png',
        head: 'Подача документов на ВНЖ',
        info: 'Документы компании передаются на рассмотрение в иммиграционный отдел полиции, после чего соискателю необходимо обратиться в МВД для подачи заявления на предоставление ВНЖ.',
        list: null
    },
    {
        img: 'icon-2.png',
        head: 'Прохождение собеседования',
        info: 'Собеседование проводится в представительстве министерства внутренних дел. Цель собеседования – определить намерения соискателя ВНЖ и уточнить информацию о планах развития бизнеса.',
        list: null
    },
    {
        img: 'icon-3.png',
        head: 'Оформление карты ВНЖ',
        info: 'Сроки выдачи карты ВНЖ, в соответствии с действующими регламентами, составляют в среднем 40 дней. С момента получения расписки, в которой указана дата выдачи ВНЖ, заявитель становится полноправным резидентом Черногории.',
        list: null
    }
]

export default SecondBlockCgernogoria;