import { useNavigate } from "react-router-dom";



function Header(props) {
    const navigate = useNavigate()
    return(
        <div className="header centered">
            <div className="container">
                <div className="top">
                    <div className="logo" onClick={()=>{navigate('/')}}>
                        <img src="/src/logo.svg" alt="logo" />
                        <span>Иммиграционные и финансовые услуги</span>
                    </div>

                    <div className="center">
                        <ul>
                            <li><span>UA</span><a href="tel:">0 (800) 35 72 51</a></li>
                            <li><span>UA</span><a href="tel:">0 (800) 35 72 51</a> 
                                <img src="/src/icon-telegram-dark.svg" alt="" />
                                <img src="/src/icon-viber-dark.svg" alt="" />
                                <img src="/src/icon-whatsapp-dark.svg" alt="" />
                            </li>
                            <li><span>UA</span><a href="tel:">0 (800) 35 72 51</a></li>
                        </ul>

                        <ul>
                            <li><span>BY</span><a href="tel:">+375 (29) 535 05 03</a></li>
                            <li><span>BY</span><a href="tel:">+375 (29) 535 05 03</a></li>
                        </ul>
                        <ul>
                            <li><span>RO</span><a href="tel:">+4 (031) 229 57 58</a></li>
                        </ul>
                        <ul>
                            <li><img src="/src/skype-icon.png" alt="" /><a href="skype:trust_group">Immigrationro.com</a></li>
                            <li><img src="/src/mail-icon.png" alt="" /><a href="mailto:trust_group">office@Immigration ro.com</a></li>
                            <li><img src="/src/adress.png" alt="" /><a href="gmaps">Bucharest,Calea Victoriei, 21</a></li>
                        </ul>


                        <ul>
                            <li> <img src="/src/icon-telegram-dark.svg" alt="" /> Присоединяйтесь к нашему телеграм каналу!</li>
                        </ul>
                    </div>
                    <div className="rght">
                    <div className="mob-menu-btn" onClick={({target})=>{
                        OpenMobMenu(target);
                    }}>
                            <div className="line"/>
                            <div className="line"/>
                            <div className="line"/>
                        </div>
                            <div className="logo" onClick={()=>{navigate('/')}}>
                                <img src="/src/logo.svg" alt="logo" />
                            </div>
                        <div className="btn btn-controll" onClick={()=>{navigate('/Qa')}}><img src="/src/icon1.png" alt="" />Контроль качества обслуживания</div>

                        
                    </div>
                </div>
                <ul className="menu">
                    <li>
                        <div className="subhead">Евросоюз</div>
                        <ul className="submenu">
                            <li onClick={()=>{navigate('/RumuniaEs')}}><div className="img" style={{background:`url(/src/flags/rumunii.png) 0 50% no-repeat`}}/> Румыния</li>
                            <li onClick={()=>{navigate('/BolgariaEs')}}><div className="img" style={{background:`url(/src/flags/bolgarii.svg) 0 50% no-repeat`}}/> Болгария</li>
                            <li onClick={()=>{navigate('/PolandEs')}}><div className="img" style={{background:`url(/src/flags/polish.png) 0 50% no-repeat`}}/> Польша</li>  
                        </ul>
                    </li>
                    <li>
                        <div className="subhead">О паспорте</div>
                        <ul className="submenu">
                            <li onClick={()=>{navigate('/RumuniaPassport')}}><div className="img2" style={{background:`url(/src/flags/pass_bulgaria.png) center no-repeat`}}/> Румыния</li>
                            <li onClick={()=>{navigate('/BolgariaPassport')}}><div className="img2" style={{background:`url(/src/flags/pass_bulgaria.png) center no-repeat`}}/> Болгария</li>
                            <li onClick={()=>{navigate('/PolandPassport')}}><div className="img2" style={{background:`url(/src/flags/pass_poland.png) center no-repeat`}}/> Польша</li>  
                        </ul>
                    </li>
                    <li>
                        <div className="subhead">Об иммиграции в Польшу</div>
                        <ul className="submenu">
                            <li onClick={()=>{navigate('/PolandEmig')}} ><div className="img" style={{background:`url(/src/flags/polish.png) 0 50% no-repeat`}}/> Консультации по карте поляка</li>
                            <li onClick={()=>{navigate('/PolandEmigPobut')}} ><div className="img" style={{background:`url(/src/flags/polish.png) 0 50% no-repeat`}}/> Консультации по карте сталего побыту</li> 
                        </ul>
                    </li>
                    <li><div className="subhead" onClick={()=>{navigate('/Chernogoria')}}>ВНЖ в Черногории</div></li>
                    <li><div className="subhead" onClick={()=>{navigate('/About')}}>О компании</div></li>
                    <li><div className="subhead" onClick={()=>{navigate('/Contact')}}>Контакты</div></li>
                </ul>
                <div className="mobile-menu" id='mobile-menu'>
                    <ul className="mob-menu">
                        <li>
                            <div className="subhead">Евросоюз</div>
                            <ul className="submenu">
                                <li onClick={()=>{changeMobNavigate('/RumuniaEs')}}> Румыния</li>
                                <li onClick={()=>{changeMobNavigate('/BolgariaEs')}}>Болгария</li>
                                <li onClick={()=>{changeMobNavigate('/PolandEs')}}> Польша</li>  
                            </ul>
                        </li>
                        <li>
                            <div className="subhead">О паспорте</div>
                            <ul className="submenu">
                                <li onClick={()=>{changeMobNavigate('/RumuniaPassport')}}>Румыния</li>
                                <li onClick={()=>{changeMobNavigate('/BolgariaPassport')}}>Болгария</li>
                                <li onClick={()=>{changeMobNavigate('/PolandPassport')}}>Польша</li>  
                            </ul>
                        </li>
                        <li>
                            <div className="subhead">Об иммиграции в Польшу</div>
                            <ul className="submenu">
                                <li onClick={()=>{changeMobNavigate('/PolandEmig')}} >Консультации по карте поляка</li>
                                <li onClick={()=>{changeMobNavigate('/PolandEmigPobut')}} >Консультации по карте сталего побыту</li> 
                            </ul>
                        </li>
                        <li><div className="subhead" onClick={()=>{changeMobNavigate('/Chernogoria')}}>ВНЖ в Черногории</div></li>
                        <li><div className="subhead" onClick={()=>{changeMobNavigate('/About')}}>О компании</div></li>
                        <li><div className="subhead" onClick={()=>{changeMobNavigate('/Contact')}}>Контакты</div></li>
                    </ul>
                </div>
                <div className="headline">
                    <div>«Законность услуг и интересы наших клиентов – наш главный приоритет»</div>
                </div>
            </div>
        </div>
    )


    function changeMobNavigate(url) {
        navigate(url);
        OpenMobMenu(document.getElementsByClassName('active-mob-menu-btn')[0])
    }

    function OpenMobMenu(target) {
        if(!target.classList.contains('mob-menu-btn')){
            OpenMobMenu(target.parentElement)
            return;
        }

        target.classList.toggle('active-mob-menu-btn');
        document.getElementById('mobile-menu').classList.toggle('active-mobile-menu')
    }
}



export default Header;