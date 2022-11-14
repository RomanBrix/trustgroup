import LeadRequest from "../leadRequest";

function Intro({ translate, language }) {
    // console.log(translate);
    return (
        <>
            <div
                className="intro centered"
                style={{ backgroundImage: `url(/src/main/bg.jpeg)` }}
            >
                <div className="arrow">
                    <h1>{translate.head[language]}</h1>
                    <h2>{translate.company[language]}</h2>
                </div>
                <div className="container">
                    <div className="left">
                        <img src="/src/main/woman.png" alt="" />
                        {/* <h1>Станьте европейцем с компанией Immigration!</h1> */}
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>
            <div className="afterIntro centered">
                <div className="container">
                    <h2>{translate.imigrationIs[language]}</h2>
                    <div className="blocks">
                        <div className="block">
                            <img src="/src/main/about_3.svg" alt="" />
                            <p>{translate.block_one[language]}</p>
                        </div>
                        <div className="block">
                            <img src="/src/main/about_4.svg" alt="" />
                            <p>{translate.block_two[language]}</p>
                        </div>
                        <div className="block">
                            <img src="/src/main/about_5.svg" alt="" />
                            <p>{translate.block_three[language]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;
