import IntroContact from "./contact";
import Intro from "./intro";
import SecondBlock from "./secondBlock";



function Main(props) {
    return (
        <div className="main">
            <Intro/>
            <SecondBlock/>
            <IntroContact/>
        </div>
    )
}


export default Main;