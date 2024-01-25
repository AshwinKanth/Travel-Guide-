import './index.css'

const TravelDetails = props => {
  const {travelGuideDetails} = props
  const {name, imageUrl, description} = travelGuideDetails

  return (
    <li className="listItem-container">
      <img src={imageUrl} alt={name} className="image" />
      <div className="details-container">
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default TravelDetails
