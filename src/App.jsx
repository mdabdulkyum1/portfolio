import Navbar from './pages/Navbar';
import ClickEffect from './components/ClickEffect';
import Bubble from './components/Bubble';
import Services from './components/Services/Services';

function App() {

  const me = {
    name:"Md Abdul Kyum", 
    age: 26,
  }






  return (
    <>
       <Bubble />
       <ClickEffect />
       <Navbar />
       <Services me={me}></Services>
    </>
  );
} 

export default App;
