import LeadRequest from "../leadRequest"



function PolandSecondBlock(props) {
    return(
        <>
            <div className="stages centered">
                <div className="container">
                    <h1 className="content-head">Процедура иммиграции в Польшу</h1>

                    <div className="stages-container">
                        {renderStages(stagesPolandContainer)}
                    </div>
                </div>
            </div>

            <div className="bg-info-text centered" style={{backgroundImage: 'url(/src/poland/cit-bg-poland.jpg)'}}>
                <div className="container">
                    <h1>Особенности страны</h1>
                    <p>Нынешняя Польша − это развитое европейское государство, находящееся на одной ступени по экономическим показателям со многими странами старой Европы. С получением гражданства Польши Вам станут доступны: свободное передвижение по странам Европейского союза и Шенгена, комфортный бизнес и высокие европейские зарплаты, бесплатная качественная медицина, обучение в лучших вузах Европы, а также поддержка малого и среднего бизнеса, право на приобретение имущества в европейских странах и не только.</p>
                </div>
            </div>



            <div className="intro centered" style={{backgroundImage: 'url(/src/poland/contact-bg-poland.jpg)'}}>
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>Переезд в Польшу — Ваш ключ к успешному будущему!</h1>
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


const stagesPolandContainer = [
    {
        img: 'stages-phone.svg',
        head: 'Консультирование от компании Immigration',
        info: 'Обратившись к нам по телефону, скайпу, электронной почте или заполнив заявку на сайте, Вы получите подробную информацию по вопросу оформления гражданства Польши. Наша команда проконсультирует Вас в вопросах государственных процедур оформления гражданства Польши и предоставит исчерпывающую информацию о перечне необходимых документов',
        list: null
    },
    {
        img: 'stages-people_search.svg',
        head: 'Сбор и подготовка документов',
        info: 'Подтвердить Ваше польское происхождение можно польским удостоверением личности, свидетельствами о крещении или браке, школьным аттестатом, военным билетом или же документами о депортации или тюремном заключении, содержащими информацию о польском гражданстве Ваших близких родственников или доказательством Вашего активного участия в деятельности одной из польских организаций.',
        list: null
    },
    {
        img: 'social.svg',
        head: 'Подача документов в консульстве',
        info: 'Вариантом получения гражданства Польши является оформление карты поляка — документа, который доказывает этническую принадлежность владельца к польскому народу. Для получения карты нужно обратиться в консульство Польши по месту проживания, подать документы и пройти собеседование с представителем дипломатического учреждения.',
        list: null
    },
    {
        img: 'nat.svg',
        head: 'Получение карты поляка',
        info: 'Наличие карты поляка дает преимущество бесплатно оформить долгосрочную многократную визу и посетить Польшу для подачи документов на получение постоянного места жительства на основании национальной принадлежности. В дальнейшем, после 1 года официального пребывания на территории страны Вы можете подать прошение о предоставлении польского гражданства.',
        list: null
    }
]

export default PolandSecondBlock;