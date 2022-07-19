import React, { useState, useEffect } from 'react'
import './Header.scss'
import Arrow from '../assets/images/icon-arrow.svg'

function Header() {
    const [ handleClick, setHandleClick ] = useState(false)
    const [ search, setSearch ] = useState('')
    const [ ipData, setIpData ] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        const ipAddressData = async() => {
            setIsLoading(true)
            const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_ya3xiPnhHgVWdac15IaDY3VYEK9kY&ipAddress=${search}`)
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


    const handleSubmit = (e) => {
        e.preventDefault()
        setHandleClick(true)
    }
    

  return (
    <header className='header'>
        <h3 className='header__title'>IP Adress Tracker</h3>
         <form className='header__input' onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for any IP address or domain' required/>
          <button className='header__input__btn' type='submit' >
            <img src={Arrow} alt="" />
          </button> 
          </form>
        
            {isLoading ? (
            <div className='header__loading'>Loading..
            </div>) :
             <div className="header__info">
                {ipData?.code === 422 ? 
                <div>No valid ip address or domain</div> : (
                    <>
                  <div className="header__info__IP">
                    <h6>IP ADDRESS</h6>
                    <span>{ipData?.ip}</span>
                  </div>
                  <div className="header__info__location">
                    <h6>LOCATION</h6>
                    <span>{ipData?.location?.region}, {ipData?.location?.country}</span>
                  </div>
                  <div className="header__info__timezone">
                    <h6>TIMEZONE</h6>
                    <span>UTC-{ipData?.location?.timezone}</span>
                  </div>
                  <div className="header__info__ISP">
                    <h6>ISP</h6>
                    <span>{ipData?.isp}</span>
                  </div>
                    </> 
                )}
             </div>}
        
    </header>
  )
}

export default Header