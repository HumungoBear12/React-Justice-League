import {React} from 'react'
import Home from './Pages/Home'
import Footer from './Components/footer'
import Navbar from './Components/navbar'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Hawkgirl from './Pages/Hawkgirl';
import ManHunter from './Pages/ManHunter';
import Auqaman from './Pages/Auqaman';
import Cyborg from './Pages/Cyborg';
import Green from './Pages/Green';
import Wonder from './Pages/Wonder';
import Flash from './Pages/Flash';
import Batman from './Pages/Batman';
import Superman from './Pages/Superman';
import GreenArrow from './Pages/GreenArrow';
import Full from './Pages/FullCharacters';
import Movies from './Pages/Movies'
import Games from './Pages/Games'
import Shows from './Pages/Shows'
import Banner from './Components/banner'
import Header from './Components/header'

const App = () => {
    return ( 
        <div>
           <Router>
                    <div>
                        
                        <Navbar />
                        <Banner/>
                        <Header/>
                            <p style={{height: '10vh'}} />
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path='movies' element={<Movies/>}/>
                                <Route path='games' element={<Games/>}/>
                                <Route path='shows' element={<Shows/>}/>
                                <Route path='superman' element={(<Superman/>)} />
                                <Route path='batman' element={(<Batman/>)} />
                                <Route path='wonderWoman' element={(<Wonder/>)} /> 
                                <Route path='flash' element={(<Flash/>)} />
                                <Route path='greenLatern' element={(<Green/>)} />
                                <Route path='cyborg' element={(<Cyborg/>)} />
                                <Route path='auqaman' element={(<Auqaman/>)} /> 
                                <Route path='martianManHunter' element={(<ManHunter/>)} />
                                <Route path='hawkgirl' element={(<Hawkgirl/>)} />
                                <Route path='greenArrow' element={(<GreenArrow/>)} />
                                <Route path='fullCharacters' element={(<Full/>)} />
                            </Routes>
                        </div>
                    <Footer/>
                </Router>
        </div>
    )
}

export default App
