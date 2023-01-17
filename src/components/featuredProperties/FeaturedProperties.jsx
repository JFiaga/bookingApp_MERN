import { featuredPropertiesListDataArr } from '../../constant'
import './FeaturedProperties.scss'

const FeaturedProperties = () => {
  return (
    <div className='featuredProperties'>
    <h1 className="featuredProperties__title">
        Browse by Property Type
    </h1>
    <div className="featuredProperties__cardContainer">
       
       {featuredPropertiesListDataArr.map((property, index) => (

         <div className="featuredProperties__cardContainer--card">
                <div className='card__img'>
                  <img src={property.imgLink} alt="" />
                </div>

              <div className='card__desc'>
              


                  <span>{property.desc}</span>
                  <span>{property.location}</span>
                  <span>{property.minPrice}</span>
                  <span className='card__desc--btn'> Note: {property.note}/10</span>
              </div>
        </div>
    ))}
    </div>
</div>
  )
}

export default FeaturedProperties