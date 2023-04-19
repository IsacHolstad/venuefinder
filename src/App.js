import './index.css';
import Router from "./routes/Router";
import HeaderNavigation from "./components/shared/HeaderNavigation";
import Footer from "./components/shared/Footer";
function App() {
  return (
    <>
      <HeaderNavigation/>
      <Router/>
      <Footer/>
    </>


  );
}

export default App;
