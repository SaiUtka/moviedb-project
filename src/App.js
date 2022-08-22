import {Header} from "./components/header/Header";
import {MainSection} from "./components/mainSection/MainSection";

import './styles/generalStyles.css'

function App() {


  return (
      <div className={'app'}>
        <Header/>
        <MainSection/>
      </div>
  );
}

export default App;