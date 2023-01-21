import React from 'react'
import { propertiesListDataArr } from '../../constant'
import './PropertyList.scss'



const PropertyList = () => {
  return (
    <div className='propertyList'>
        <h1 className="propertyList__title">
            Browse by Property Type
        </h1>
        <div className="propertyList__cardContainer">
           
           {propertiesListDataArr.map((property, index) => (

             <div 
             key={index}
             className="propertyList__cardContainer--card">
                    <div className='card__img'>
                      <img src={property.imgLink} alt="" />
                    </div>

                  <div className='card__desc'>
                      <span>{property.type}</span>
                      <span> {property.propertyNumber}</span>
                  </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default PropertyList