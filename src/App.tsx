import "./App.css"
import Card from "./Components/Card"
import iCard from "./Models/CardModels"

function App() {

  const card1: iCard = {
    title: "This is card title",
    text: "66 packages are looking for funding run 'npm fund' for details",
    buttonText: "Go",
    url: "https://",
    image: "https://loremflickr.com/384/240?rand=1",
  }

  const card2: iCard = {
    title: "This is card title",
    text: "66 packages are looking for funding run 'npm fund' for details",
    buttonText: "Go",
    url: "https://",
    image: "",
  }

  return (
    <>
      <Card {...card1}/>
      <Card {...card2}/>
    </>
  )
}

export default App
