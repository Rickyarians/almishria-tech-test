import Navbar from 'Components/Navbar'
import FooterHome from './Components/Footer'
import 'App.css';
import {ContentHome, HeroHome, StickyOption} from 'Components/Content';


function App() {
  return (
    <div>
      <Navbar />

      <HeroHome />

      <StickyOption />

      <ContentHome />

      {/* Portofolio */}
      
       <FooterHome />
     
    </div>
  );
}

export default App;
