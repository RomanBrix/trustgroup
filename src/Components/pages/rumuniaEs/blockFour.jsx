import { useNavigate } from "react-router-dom";
import LeadRequest from "../leadRequest";

function BlockFour({ translate, language }) {
    const navigate = useNavigate();

    const dataFoBlock = [
        {
            title: translate.block1.title[language],
            text: translate.block1.text[language],
            img: "stage-phone-icon.png",
        },
        {
            title: translate.block2.title[language],
            text: translate.block2.text[language],
            img: "icon-ap2.png",
        },
        {
            title: translate.block3.title[language],
            text: translate.block3.text[language],
            img: "stage-manager.png",
        },
        {
            title: translate.block4.title[language],
            text: translate.block4.text[language],
            img: "stage-speaker.png",
        },
        {
            title: translate.block5.title[language],
            text: translate.block5.text[language],
            img: "satge-file.png",
        },
    ];
    return (
        <>
            <div className="block-four centered">
                <div className="container">
                    <h1>{translate.head[language]}</h1>
                    <div className="afterhead">
                        {translate.afterHead[language]}
                    </div>
                    {generateBlock(dataFoBlock)}
                </div>
            </div>

            <div
                className="apostil centered"
                style={{
                    backgroundImage: "url(/src/rumunia/bg-info-rumunia.jpg)",
                }}
            >
                <div className="container">
                    <h2>{translate.head2[language]}</h2>
                    <div
                        className="btn"
                        onClick={() => {
                            navigate("/Apostil");
                        }}
                    >
                        {translate.btn[language]}
                    </div>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1", padding: "40px 0" }}
            >
                <div className="container">
                    <h1>{translate.head3[language]}</h1>
                    <p>{translate.text1[language]}</p>
                    <p>{translate.text2[language]}</p>
                    <div className="mini-foto-text-container">
                        <div className="block">
                            <img src="/src/rumunia/doc_pass_full.svg" alt="" />
                            <div className="headline">
                                {translate.img1[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/rumunia/doc_born-01.svg" alt="" />
                            <div className="headline">
                                {translate.img2[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/rumunia/doc_rings-01.svg" alt="" />
                            <div className="headline">
                                {translate.img3[language]}
                            </div>
                        </div>

                        <div className="block">
                            <img src="/src/rumunia/doc_child-01.png" alt="" />
                            <div className="headline">
                                {translate.img4[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/rumunia/doc_marriage.svg" alt="" />
                            <div className="headline">
                                {translate.img5[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/rumunia/doc_prison-01.svg" alt="" />
                            <div className="headline">
                                {translate.img6[language]}
                            </div>
                        </div>
                    </div>
                    <p>{translate.imgText[language]}</p>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1", padding: "40px 0" }}
            >
                <div className="container">
                    <h1>{translate.head4[language]}</h1>
                    <p>{translate.text3[language]}</p>
                    <p>{translate.text4[language]}</p>
                    <p>{translate.text5[language]}</p>
                </div>
            </div>

            <div
                className="intro centered"
                style={{
                    backgroundImage:
                        "url(/src/rumunia/pedro-lastra-unsplash-rumun.png)",
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

    function generateBlock(arr) {
        return arr.map((item, index) => {
            return (
                <div className="big-info-blocks" key={index}>
                    <div className="top-img">
                        <div className="border-img" />
                        <div className="img">
                            <img src={`/src/rumunia/${item.img}`} alt="" />
                        </div>
                    </div>
                    <div className="text">
                        <div className="headline">{item.title}</div>
                        <div className="text">{item.text}</div>
                    </div>
                </div>
            );
        });
    }
}

export default BlockFour;
