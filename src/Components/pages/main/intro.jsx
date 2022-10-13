import LeadRequest from "../leadRequest"



function Intro(props) {
    return (
        <>
        <div className="intro centered" style={{backgroundImage: `url(/src/main/bg.jpeg)`}}>
            <div className="arrow">
                <h1>Станьте европейцем</h1>
                <h2>с компанией Immigration!</h2>
            </div>
            <div className="container">
                <div className="left">
                    <img src="/src/main/woman.png" alt="" />
                    {/* <h1>Станьте европейцем с компанией Immigration!</h1> */}
                </div>
                <div className="right">

                    <LeadRequest/>

                </div>
            </div>
        </div>
        <div className="afterIntro centered">
            <div className="container">
                <h2>Immigration это:</h2>
                <div className="blocks">
                    <div className="block">
                        <img src="/src/main/about_3.svg" alt="" />
                        <p>Консультации в получении визы</p>
                    </div>
                    <div className="block">
                        <img src="/src/main/about_4.svg" alt="" />
                        <p>Подготовка основания для получения гражданства</p>
                    </div>
                    <div className="block">
                        <img src="/src/main/about_5.svg" alt="" />
                        <p>Поддержка грамотных экспертов</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Intro