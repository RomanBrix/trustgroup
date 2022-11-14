import LeadRequest from "../leadRequest";

function IntroContact({ translate, language }) {
    return (
        <div
            className="intro-contact centered"
            style={{ backgroundImage: "url(/src/main/bg3.jpg)" }}
        >
            <div className="container">
                <div className="left">
                    <img src="/src/main/contact-col-bg.png" alt="" />
                    <h1>{translate.head[language]}</h1>
                </div>
                <div className="right">
                    <LeadRequest />
                </div>
            </div>
        </div>
    );
}

export default IntroContact;
