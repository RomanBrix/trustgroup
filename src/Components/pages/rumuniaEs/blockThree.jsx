import LeadRequest from "../leadRequest";

function BlockThree({ translate, language }) {
    return (
        <>
            <div className="text-block centered">
                <div className="container">
                    <p>{translate.text1[language]}</p>
                    <p>{translate.text2[language]}</p>
                    <p>{translate.text3[language]}</p>
                    <div className="centeredImg">
                        <img src="/src/rumunia/01.jpg" alt="" />
                    </div>
                    <p>{translate.text4[language]}</p>
                </div>
            </div>

            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/rumunia/contact-bg.jpg)" }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/rumunia/contact-col-bg.png" alt="" />
                        <h1>{translate.consult[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlockThree;
