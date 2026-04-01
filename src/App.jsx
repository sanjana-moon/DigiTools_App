import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import CardContainer from './Component/CardContainer/CardContainer'
import Footer from './Component/Footer/Footer'
import Instruction from './Component/InstructionCard/InstructionCards'
import Navbar from './Component/Navbar/Navbar'
import PricingCard from './Component/PricingCard/PricingCard'
import Stat from './Component/Stat/Stat'
import { ToastContainer } from 'react-toastify'

const fetchCards = async () => {
  const res = await fetch('/data.json')
  return res.json()
}
const cardsPromise = fetchCards()

function App() {
  const [selectedCards, setSelectedCards] = useState([])

  return (
    <>
      <Navbar
        selectedCards={selectedCards} />
      <Banner />
      <Stat />
      <Suspense fallback={
        <div className=' p-50 flex items-center justify-center'>
          <span className="loading loading-dots loading-xl">
          </span></div>}>
        <CardContainer
          cardsPromise={cardsPromise}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards} />
      </Suspense>
      <Instruction />
      <PricingCard />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
