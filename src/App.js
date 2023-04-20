import './index.css';
import Router from "./routes/Router";
import {useSelector} from "react-redux";
import HeaderNavigation from "./components/shared/HeaderNavigation";
import Footer from "./components/shared/Footer";
import Loader from "./components/shared/Loader";
function App() {
    //const {isLoading} = useSelector(state => state.loader)
  return (
    <>
      <HeaderNavigation/>
      <Router/>
        {/*<Loader/>*/}
      <Footer/>
    </>


  );
}

export default App;
