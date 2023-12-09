// import a from './App.module.scss';
import BackToTop from './components/backtotop/Backtotop';
import RouteController from "./routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <BackToTop/>
      <RouteController/>
      <ToastContainer/>
    </>
  );
}

export default App;
