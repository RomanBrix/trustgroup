import { useNavigate } from "react-router-dom";
import useTranslate from "../../hook/useTranslate";

function Footer(props) {
    const navigate = useNavigate();
    const {
        translate: { tFooter },
        language,
    } = useTranslate();

    return (
        <div className="footer centered">
            <div className="container">
                <div className="block">
                    <p>
                        Immigration <br /> {tFooter.head[language]}
                    </p>
                    <ul>
                        <li
                            onClick={() => {
                                navigate("/RumuniaEs");
                            }}
                        >
                            {tFooter.romania[language]}
                        </li>
                        <li
                            onClick={() => {
                                navigate("/BolgariaEs");
                            }}
                        >
                            {tFooter.bolgaria[language]}
                        </li>
                        <li
                            onClick={() => {
                                navigate("/PolandEs");
                            }}
                        >
                            {tFooter.poland[language]}
                        </li>
                        <li
                            onClick={() => {
                                navigate("/Chernogoria");
                            }}
                        >
                            {tFooter.Montenegro[language]}
                        </li>
                    </ul>
                    <ul>
                        <li
                            onClick={() => {
                                navigate("/About");
                            }}
                        >
                            {tFooter.about[language]}
                        </li>
                        <li
                            onClick={() => {
                                navigate("/Contact");
                            }}
                        >
                            {tFooter.contacts[language]}
                        </li>
                        <li
                            onClick={() => {
                                navigate("/polzovatelskoe");
                            }}
                        >
                            {tFooter.terms[language]}
                        </li>
                        <li
                            onClick={() => {
                                navigate("/confid");
                            }}
                        >
                            {tFooter.privacy[language]}
                        </li>
                    </ul>
                </div>
                <div
                    className="block"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    {/* <img src="/src/footer-logo.png" alt="" /> */}
                    <img className="flogo" src="/src/logoFooter.svg" alt="" />
                    <span>Bucharest, Calea Victoriei 21</span>
                </div>
                <div className="block">
                    <span>
                        Copyright © «Immigration », 2013–2022. All rights
                        reserved.
                    </span>
                </div>
                <div className="block">
                    <div
                        className="btn btn-controll"
                        onClick={() => {
                            navigate("/Qa");
                        }}
                    >
                        <img src="/src/icon2.png" alt="" />
                        {tFooter.control[language]}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
