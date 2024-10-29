import Header from "../components/header"
import Footer from "../components/footer"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import fashionStore from "../store"
import Fetchcomp from "../components/fetchcomp"
function App() {

  return (
    <>
      <Provider store={fashionStore}>
        <Header />
        <Fetchcomp />
        <Outlet />
        <Footer />
      </Provider>
    </>
  )
};

export default App
