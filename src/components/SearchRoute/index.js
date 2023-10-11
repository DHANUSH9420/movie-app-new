import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Failure from '../Failure'
import SimilarMoviesItem from '../SimilarMoviesItem'

import './index.css'

const apiStatusContext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class SearchRoute extends Component {
  state = {
    searchValue: '',
    apiStatus: apiStatusContext.initial,
    searchDetails: [],
  }

  changeSearchInput = value => {
    this.setState({searchValue: value})
  }

  searchDisplay = async () => {
    const {searchValue} = this.state
    this.setState({apiStatus: apiStatusContext.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    console.log(searchValue)
    const api = `https://apis.ccbp.in/movies-app/movies-search?search=${searchValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken} `,
      },
      method: 'GET',
    }

    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok) {
      const updateData = data.results.map(eachItem => ({
        backdropPath: eachItem.backdrop_path,
        id: eachItem.id,
        overview: eachItem.overview,
        posterPath: eachItem.poster_path,
        title: eachItem.title,
      }))
      console.log(updateData)
      this.setState({
        apiStatus: apiStatusContext.success,
        searchDetails: updateData,
      })
    } else {
      this.setState({apiStatus: apiStatusContext.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </div>
  )

  onRetry = () => {
    this.searchDisplay()
  }

  renderFailureView = () => <Failure onRetry={this.onRetry} />

  renderSearchView = () => {
    const {searchDetails, searchValue} = this.state
    console.log(searchDetails)
    const len = searchDetails.length
    console.log(len)

    return (
      <>
        {len === 0 ? (
          <div className="no-video-container">
            <img
              src="https://res.cloudinary.com/dv0wkaiuj/image/upload/v1696237417/Background-Complete_nug9sz.png"
              alt="no movies"
              className="no-video-img"
            />
            <p className="no-video-text">
              Your search for {searchValue} did not find any matches.
            </p>
          </div>
        ) : (
          <ul className="search-video-list">
            {searchDetails.map(each => (
              <SimilarMoviesItem eachValue={each} key={each.id} />
            ))}
          </ul>
        )}
      </>
    )
  }

  renderViewDisplay = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusContext.success:
        return this.renderSearchView()
      case apiStatusContext.failure:
        return this.renderFailureView()
      case apiStatusContext.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderHeaderSearch = () => (
    <Header
      changeSearchInput={this.changeSearchInput}
      searchDisplay={this.searchDisplay}
    />
  )

  render() {
    return (
      <div className="searclcon" testid="search">
        {this.renderHeaderSearch()}
        {this.renderViewDisplay()}
      </div>
    )
  }
}
export default SearchRoute
