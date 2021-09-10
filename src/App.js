import Header from  "./components/Header";
import Showcase from "./components/Showcase";
import Transform from "./components/Transform";
import Standout from "./components/Standout";
import GraphicMobile from "./components/GraphicMobile";
import GraphicDesktop from "./components/GraphicDesktop";
import TestiMonials  from "./components/TestiMonials";
import  GridMobile  from "./components/GridMobile";
import  GridDesktop  from "./components/GridDesktop";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>
    <Header/>
    <Showcase/>
    <Transform/>
    <Standout/>
    <div className='block md:hidden'>
      <GraphicMobile/>
    </div>
    <div className='hidden md:block'>
    <GraphicDesktop/>
    </div>
    <TestiMonials/>
    <div className='block md:hidden'>
      <GridMobile/>
      </div>
    <div className='hidden md:block'>
      <GridDesktop/>
    </div>
    <Footer/>
    </>
  )
}

export default App;
