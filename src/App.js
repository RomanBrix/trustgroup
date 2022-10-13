import React from 'react';
import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// import Confid from './Components/law/confid';
// import Polzovatelskoe from './Components/law/polzovatelskoe';
import Layout from './Components/layouts';
// import About from './Components/pages/about';
// import Apostil from './Components/pages/apostil';
// import BolgariaEs from './Components/pages/bolgariaEs';
// import BolgariaPassport from './Components/pages/bolgariaPassport';
// import Chernogoria from './Components/pages/chernogoria';
// import Contact from './Components/pages/contacts';
// import Main from './Components/pages/main';
// import PolandEmigrPobut from './Components/pages/polandEmigPobut';
// import PolandEmigr from './Components/pages/polandEmigr';
// import PolandEs from './Components/pages/polandEs';
// import PolandPassport from './Components/pages/polandPassport';
// import Qa from './Components/pages/qa';
// import RumuniaEs from './Components/pages/rumuniaEs';
// import RumuniaPassport from './Components/pages/rumuniaPassport';

const Confid = lazy(()=>import ('./Components/law/confid'));
const Polzovatelskoe = lazy(()=>import ('./Components/law/polzovatelskoe'));
// const Layout = lazy(()=>import ('./Components/layouts'));
const About = lazy(()=>import ('./Components/pages/about'));
const Apostil = lazy(()=>import ('./Components/pages/apostil'));
const BolgariaEs = lazy(()=>import ('./Components/pages/bolgariaEs'));
const BolgariaPassport = lazy(()=>import ('./Components/pages/bolgariaPassport'));
const Chernogoria = lazy(()=>import ('./Components/pages/chernogoria'));
const Contact = lazy(()=>import ('./Components/pages/contacts'));
const Main = lazy(()=>import ('./Components/pages/main'));
const PolandEmigrPobut = lazy(()=>import ('./Components/pages/polandEmigPobut'));
const PolandEmigr = lazy(()=>import ('./Components/pages/polandEmigr'));
const PolandEs = lazy(()=>import ('./Components/pages/polandEs'));
const PolandPassport = lazy(()=>import ('./Components/pages/polandPassport'));
const Qa = lazy(()=>import ('./Components/pages/qa'));
const RumuniaEs = lazy(()=>import ('./Components/pages/rumuniaEs'));
const RumuniaPassport = lazy(()=>import ('./Components/pages/rumuniaPassport'));

function App(props) {
  const location = useLocation();
  console.log(location)
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location.pathname])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
                <Route index element={
                  <Suspense fallback={<div>Завантаження...</div>}>
                     <Main/>
                  </Suspense>
                  } />
                <Route path="/RumuniaEs" element={
                  <Suspense fallback={<div>Завантаження...</div>}>
                     <RumuniaEs/>
                  </Suspense>
                  } />
                <Route path="/BolgariaEs" element={
                  <Suspense fallback={<div>Завантаження...</div>}>
                      <BolgariaEs/>
                  </Suspense>
                  } />
                <Route path="/PolandEs" element={
                  <Suspense fallback={<div>Завантаження...</div>}>
                     <PolandEs/>
                  </Suspense>
                  } />


                
                <Route path="/RumuniaPassport" element={
                  <Suspense fallback={<div>Завантаження...</div>}>
                      <RumuniaPassport/>
                  </Suspense>
                  } />
                <Route path="/PolandPassport" element={
                  <Suspense fallback={<div>Завантаження...</div>}>
                      <PolandPassport/>
                  </Suspense>
                  } />
                <Route path="/BolgariaPassport" element={
                  <Suspense fallback={<div>Завантаження...</div>}>
                      <BolgariaPassport/>
                  </Suspense>
                  } />



                <Route path="/PolandEmig" element={
                <Suspense fallback={<div>Завантаження...</div>}>
                <PolandEmigr/>
                </Suspense>
                } />
                <Route path="/PolandEmigPobut" element={
                <Suspense fallback={<div>Завантаження...</div>}>
                <PolandEmigrPobut/>
                </Suspense>
                } />


                <Route path="/Chernogoria" element={
                <Suspense fallback={<div>Завантаження...</div>}>
                <Chernogoria/>
                </Suspense>
                } />
                <Route path="/About" element={
                <Suspense fallback={<div>Завантаження...</div>}>
                <About/>
                </Suspense>
                } />


                <Route path="/Contact" element={
                <Suspense fallback={<div>Завантаження...</div>}>
                <Contact/>
                </Suspense>
                } />

                <Route path="/Qa" element={
                <Suspense fallback={<div>Завантаження...</div>}>
                <Qa/>
                </Suspense>
                } />
                
                <Route path="/Apostil" element={
                <Suspense fallback={<div>Завантаження...</div>}>
                <Apostil/>
                </Suspense>
                } />


                <Route path="/polzovatelskoe" element={
                <Suspense fallback={<div>Завантаження...</div>}>
                <Polzovatelskoe/>
                </Suspense>
                } />
                <Route path="/confid" element={
                <Suspense fallback={<div>Завантаження...</div>}>
                <Confid/>
                </Suspense>
                } />

                <Route path="*" element={<h1>Not found</h1>} />

        </Route>       
      </Routes>
    </>
  )
}
  

export default App;