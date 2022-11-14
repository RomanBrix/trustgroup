import LeadRequest from "../leadRequest";

function BolgariaPassportFirstBlock({ translate, language }) {
    return (
        <>
            <div
                className="intro centered"
                style={{
                    backgroundImage:
                        "url(/src/bolgaria/contact-pass-bg-bulgaria.jpg)",
                }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>{translate.head[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>

            <div className="pass-fetures centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.head2[language]}
                    </h1>
                    <div className="doc-describe-container">
                        <div className="doc-describe-item">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/vnutrennii-pasport-bolgarii.png"
                                    alt=""
                                />
                            </div>
                            <div className="img-desc">
                                {translate.imgDesc[language]}
                            </div>
                            <div className="text-info">
                                {translate.imgText[language]}
                            </div>
                        </div>
                        <div className="doc-describe-item">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/zagranichniy-pasport-bolgarii.png"
                                    alt=""
                                />
                            </div>
                            <div className="img-desc">
                                {translate.imgDesc2[language]}
                            </div>
                            <div className="text-info">
                                {translate.imgText2[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fetures  centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.features.head[language]}
                    </h1>
                    <div className="fetures-container">
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/security-on-blue-icon.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.features.feature1[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/church-blue-icon.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.features.feature2[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/mother-with-baby-in-arms.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.features.feature3[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/credit-blue-icon.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.features.feature4[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/social-blue-icon.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.features.feature5[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/bolgaria/freedom-blue-icon.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.features.feature6[language]}
                            </div>
                        </div>

                        <p className="content-after-head">
                            {translate.features.text[language]}
                        </p>
                    </div>
                </div>
            </div>

            <div className="big-list centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.etaps.head[language]}
                    </h1>
                    <ul>
                        <li>
                            <span className="counter">
                                <span> 1</span>
                            </span>
                            <div className="list-info">
                                <div className="headline">
                                    {translate.etaps.etap1.head[language]}
                                </div>
                                <div className="info">
                                    {translate.etaps.etap1.text[language]}
                                </div>
                            </div>
                        </li>
                        <li>
                            <span className="counter">
                                <span> 2</span>
                            </span>
                            <div className="list-info">
                                <div className="headline">
                                    {translate.etaps.etap2.head[language]}
                                </div>
                                <div className="info">
                                    {translate.etaps.etap2.text[language]}
                                </div>
                            </div>
                        </li>
                        <li>
                            <span className="counter">
                                <span> 3</span>
                            </span>
                            <div className="list-info">
                                <div className="headline">
                                    {translate.etaps.etap3.head[language]}
                                </div>
                                <div className="info">
                                    {translate.etaps.etap3.text[language]}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="big-list centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.getUp.head[language]}
                    </h1>
                    <ul>
                        <li>
                            <span className="counter">
                                <span> 1</span>
                            </span>
                            <div className="list-info">
                                <div className="headline">
                                    {translate.getUp.etap1.head[language]}
                                </div>
                                <div className="info">
                                    {translate.getUp.etap1.text[language]}
                                </div>
                            </div>
                        </li>
                        <li>
                            <span className="counter">
                                <span> 2</span>
                            </span>
                            <div className="list-info">
                                <div className="headline">
                                    {translate.getUp.etap2.head[language]}
                                </div>
                                <div className="info">
                                    {translate.getUp.etap2.text[language]}
                                </div>
                            </div>
                        </li>
                        <li>
                            <span className="counter">
                                <span> 3</span>
                            </span>
                            <div className="list-info">
                                <div className="headline">
                                    {translate.getUp.etap3.head[language]}
                                </div>
                                <div className="info">
                                    {translate.getUp.etap3.text[language]}
                                </div>
                            </div>
                        </li>
                        <li>
                            <span className="counter">
                                <span> 4</span>
                            </span>
                            <div className="list-info">
                                <div className="headline">
                                    {translate.getUp.etap4.head[language]}
                                </div>
                                <div className="info">
                                    {translate.getUp.etap4.text[language]}
                                </div>
                            </div>
                        </li>
                        <li>
                            <span className="counter">
                                <span> 5</span>
                            </span>
                            <div className="list-info">
                                <div className="headline">
                                    {translate.getUp.etap5.head[language]}
                                </div>
                                <div className="info">
                                    {translate.getUp.etap5.text[language]}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1", padding: "40px 0" }}
            >
                <div className="container">
                    <h1>{translate.support.head[language]}</h1>
                    <p>{translate.support.text[language]}</p>

                    <div className="mini-foto-text-container">
                        <div className="block">
                            <img
                                src="/src/bolgaria/audit-blue-icon.png"
                                alt=""
                            />
                            <div className="headline">
                                {translate.support.foto1[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img
                                src="/src/bolgaria/file-new-blue-icon.png"
                                alt=""
                            />
                            <div className="headline">
                                {translate.support.foto2[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img
                                src="/src/bolgaria/documents-blue-icon-2.png"
                                alt=""
                            />
                            <div className="headline">
                                {translate.support.foto3[language]}
                            </div>
                        </div>

                        <div className="block">
                            <img src="/src/bolgaria/icon-what.png" alt="" />
                            <div className="headline">
                                {translate.support.foto4[language]}
                            </div>
                        </div>

                        <div className="block">
                            <img
                                src="/src/bolgaria/clock-blue-icon.png"
                                alt=""
                            />
                            <div className="headline">
                                {translate.support.foto5[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img
                                src="/src/bolgaria/id-card-blue-icon.png"
                                alt=""
                            />
                            <div className="headline">
                                {translate.support.foto6[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1" }}
            >
                <div className="container">
                    <h1>{translate.need.head[language]}</h1>
                    <p>{translate.need.text[language]}</p>
                </div>
            </div>
        </>
    );
}

export default BolgariaPassportFirstBlock;
