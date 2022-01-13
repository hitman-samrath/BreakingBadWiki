import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Components/UI/Header'
import Footer from './Components/UI/Footer'
import Search from './Components/UI/Search'
import CharacterCard from './Components/Characters/CharacterCard.js'

import './App.css'

const App = () => {
  const [boxitem, getboxitem] = useState([])
  const [loading, setloading] = useState(true)
  const [query, getquery] = useState('')

  useEffect(() => {

    const fetchitems = async () => {
      setloading(true)
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data)
      setloading(false)
      getboxitem(result.data)
    }

    fetchitems()
  }, [query])


  return (
    <>
      <Header />
      <Search receivequery={(typed) => getquery(typed)} />
      <CharacterCard className="block" loading={loading} boxitem={boxitem} />
      <Footer />
    </>
  )
}

export default App;