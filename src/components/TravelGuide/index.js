import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelDetails from '../TravelDetails'

import './index.css'

class TravelGuide extends Component {
  state = {travelData: [], isLoading: false}

  componentDidMount() {
    this.getTravelGuideDetails()
  }

  getTravelGuideDetails = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const fetchedData = data.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({travelData: fetchedData, isLoading: false})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {travelData, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="heading-container">
          <h1 className="heading">Travel Guide</h1>
          <hr className="hrBreak" />
        </div>
        {isLoading ? (
          this.renderLoader()
        ) : (
          <ul className="list-container">
            {travelData.map(eachItem => (
              <TravelDetails travelGuideDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
