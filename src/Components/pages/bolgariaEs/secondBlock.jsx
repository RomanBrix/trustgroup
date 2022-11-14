import LeadRequest from "../leadRequest";

function BolgariaSecondBlock({ translate, language }) {
    return (
        <>
            <div className="info-cards centered">
                <div className="container">
                    <h1 className="content-head">{translate.head[language]}</h1>
                    <div className="info-card">
                        <div className="info-card-img">
                            <img src="/src/bolgaria/location.png" alt="" />
                        </div>
                        <div className="info-card-text">
                            <div className="headline">
                                {translate.infoCard1.head[language]}
                            </div>
                            <div className="afterhead">
                                {translate.infoCard1.afterHead[language]}
                            </div>
                            <p>{translate.infoCard1.text[language]}</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-card-img">
                            <img src="/src/bolgaria/1.svg" alt="" />
                        </div>
                        <div className="info-card-text">
                            <div className="headline">
                                {translate.infoCard2.head[language]}
                            </div>
                            <div className="afterhead">
                                {translate.infoCard2.afterHead[language]}
                            </div>
                            <p>{translate.infoCard2.text[language]}</p>
                            <ul className="list">
                                <li>
                                    <img src="/src/bolgaria/check.svg" alt="" />
                                    <span>
                                        {translate.infoCard2.list1[language]}
                                    </span>
                                </li>
                                <li>
                                    <img src="/src/bolgaria/check.svg" alt="" />
                                    <span>
                                        {translate.infoCard2.list2[language]}
                                    </span>
                                </li>
                                <li>
                                    <img src="/src/bolgaria/check.svg" alt="" />
                                    <span>
                                        {translate.infoCard2.list3[language]}
                                    </span>
                                </li>
                                <li>
                                    <img src="/src/bolgaria/check.svg" alt="" />
                                    <span>
                                        {translate.infoCard2.list4[language]}
                                    </span>
                                </li>
                                <li>
                                    <img src="/src/bolgaria/check.svg" alt="" />
                                    <span>
                                        {translate.infoCard2.list5[language]}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/bolgaria/2-new.jpg)" }}
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

export default BolgariaSecondBlock;
