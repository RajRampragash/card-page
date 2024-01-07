
import Annoucesment from './Components/Annoucesment';
import './App.css'
import NavBar from './Components/Nav bar';
// import Mesh from './Components/Hero section/mesh/Mesh';
import Hero from './Components/Hero section/hero/hero';
import Logo from './Components/Logo/logo';
import Features from './Components/Features/features';
import Feature2 from './Components/Feature2/feature2';
import Footer from './Components/Footer/footer';
import Feature3 from './Components/Feature3/feature';
// import Testimonial from './Components/Testimonial/testimonial';
// import DesktopColumnmillioncounter from './Components/Milliom/million.jsx'



function App() {
  return (
    <div className="App">
<Annoucesment/>
<NavBar/>
<Hero/>
<Logo/>
<Features/>
<Feature2/>
{/* <DesktopColumnmillioncounter/> */}
<Feature3/>
{/* <Testimonial/> */}
<Footer/>

    </div>
  );
}

export default App;
