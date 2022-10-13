import { useNavigate } from "react-router-dom";



function Footer(props) {
    const navigate = useNavigate();
    return(
        <div className="footer centered">
            <div className="container">
                <div className="block">
                    <p>Immigration <br /> Бизнес, финансы, иммиграция</p>
                    <ul>
                        <li  onClick={()=>{navigate('/RumuniaEs')}}>Румыния</li>
                        <li  onClick={()=>{navigate('/BolgariaEs')}}>Болгария</li>
                        <li  onClick={()=>{navigate('/PolandEs')}}>Польша</li>
                        <li  onClick={()=>{navigate('/Chernogoria')}}>Черногория</li>
                    </ul>
                    <ul>
                        <li  onClick={()=>{navigate('/About')}}>О нас</li>
                        <li  onClick={()=>{navigate('/Contact')}}>Контакты</li>
                        <li  onClick={()=>{navigate('/polzovatelskoe')}}>Пользовательское соглашение</li>
                        <li  onClick={()=>{navigate('/confid')}}>Политика конфиденциальности</li>
                    </ul>
                </div>
                <div className="block"  onClick={()=>{navigate('/')}}>
                    {/* <img src="/src/footer-logo.png" alt="" /> */}
                    <img className='flogo' src="/src/logoFooter.svg" alt="" />
                    <span>Bucharest, Calea Victoriei 21</span>
                </div>
                <div className="block">
                    <span>Copyright © «Immigration », 2013–2022. All rights reserved.</span>
                </div>
                <div className="block">
                    <div className="btn btn-controll"  onClick={()=>{navigate('/Qa')}}><img src="/src/icon2.png" alt="" />Контроль качества обслуживания</div>
                </div>
            </div>
        </div>
    )
}



export default Footer;