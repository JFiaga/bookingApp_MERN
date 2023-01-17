import React from 'react'
import './Home.scss'
import { Featured, Header, PropertyList } from '../../components'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='home'>
<Featured/>
<PropertyList/>
    </div>
    </>
  )
}

export default Home