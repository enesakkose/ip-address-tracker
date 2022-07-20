import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Map from './components/Map'


function App() {
  const API_KEY = import.meta.env.VITE_REACT_APP_GEOIP_KEY
  const [ handleClick, setHandleClick ] = useState(false)
  const [ search, setSearch ] = useState('')
  const [ ipData, setIpData ] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
      const ipAddressData = async() => {
          setIsLoading(true)
          const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${search}`)
          const data = await response.json()
          .catch(error => console.log(error))
          setIsLoading(false) 
          setIpData(data)
          setSearch('')     
      }
      ipAddressData()

      return () => {
          setHandleClick(false)
      }
  }, [handleClick])

  return (
    <div className="App">
      <Header ipData={ipData} search={search} setSearch={setSearch} setHandleClick={setHandleClick} isLoading={isLoading}/>
      <Map ipData={ipData}/>
    </div>
  )
}

export default App
//TODO PIN ICON WILL ADDED AND RESPONSIVE DESIGN WILL MAKE