import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import Section from "./Components/Section"
import Skils from "./Components/Skils";
import Work from "./Components/Work"
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
function App() {
  return (
    <div className="w-full h-full bg-[#e4e8e6]">
      <Navbar/>
      <Section/>
      <Card />
      <Work />
      <Skils/>
    </div>
  )
}

export default App
