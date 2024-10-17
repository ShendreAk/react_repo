import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import DisplayCounter from "./components/displayCounter";
import Buttons from "./components/buttons";
import DisplayMessage from "./components/displayMessage";
import Container from "./components/container";
import { useSelector } from "react-redux";
function App() {
  const privacy = useSelector(store => store.privacy);
  return (
    <Container>
      <center><div className="px-4 py-5 my-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <DisplayMessage /> : <DisplayCounter />}
          <Buttons />
        </div>
      </div>
      </center>
    </Container>

  );


}

export default App;
