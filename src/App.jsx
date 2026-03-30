import './App.css'
import Banner from './Component/Banner/Banner'
import CardContainer from './Component/CardContainer/CardContainer'
import About from './Component/Footer/About'
import Footer from './Component/Footer/Footer'
import Instruction from './Component/InstructionCard/InstructionCards'
import Navbar from './Component/Navbar/Navbar'
import PricingCard from './Component/PricingCard/PricingCard'
import Stat from './Component/Stat/Stat'

const fetchCards = async () => {
  const res = await fetch('/data.json')
  return res.json()
}
const cardsPromise = fetchCards()

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Stat />
      <CardContainer cardsPromise={cardsPromise}/>
      <Instruction/>
      <PricingCard/>
      <Footer/>
    </>
  )
}

export default App
