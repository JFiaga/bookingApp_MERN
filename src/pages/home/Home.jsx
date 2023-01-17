import React from 'react'
import './Home.scss'
import { Featured, FeaturedProperties, Header, PropertyList } from '../../components'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='home'>
<Featured/>
<PropertyList/>
<FeaturedProperties/>
    </div>
    </>
  )
}

export default Home