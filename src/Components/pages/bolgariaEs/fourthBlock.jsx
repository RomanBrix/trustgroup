import LeadRequest from "../leadRequest";

function BolgariaFourthBlock({ translate, language }) {
    return (
        <>
            <div className="fetures dark-fetures centered">
                <div className="container">
                    <h1 className="content-head">{translate.head[language]}</h1>
                    <div className="fetures-container">
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/features-work.svg"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.feature1[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/fetures-time.svg"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.feature2[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/features-locked_folder.svg"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.feature3[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fetures  centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.featureHead[language]}
                    </h1>
                    <div className="content-after-head">
                        {translate.featureAfterHead[language]}
                    </div>
                    <div className="fetures-container">
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/plane.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.feature4[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/education.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.feature5[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/health.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.feature6[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/business.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.feature7[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/passport.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.feature8[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/tax.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.feature9[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/house.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.feature10[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/family.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.feature11[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/bolgaria/level.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.feature12[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="intro centered"
                style={{
                    backgroundImage: "url(/src/bolgaria/contact-bg-eu.jpg)",
                }}
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

export default BolgariaFourthBlock;
