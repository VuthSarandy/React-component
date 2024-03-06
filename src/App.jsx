import FooterCompo from "./components/footer/FooterCompo"
import MainContainer from "./components/main/MainContainer"
import NavbarCompo from "./components/navbar/NavbarCompo"


function App() {

  return (
    <>
    <div className="flex flex-col justify-between mx-10">
      <NavbarCompo />

      <MainContainer/>

       
    </div>
    <FooterCompo />

       
    
    </>
  )
}

export default App
