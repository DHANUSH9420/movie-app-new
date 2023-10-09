import format from 'date-fns/format'
import SocialMedia from '../SocialMedia'
import SimilarMoviesItem from '../SimilarMoviesItem'
import './index.css'

const MoreMovieDetails = props => {
  const {similarMovies, movieDetails} = props
  const {
    genres,
    budget,
    releaseDate,
    spokenLanguages,
    voteCount,
    voteAverage,
  } = movieDetails
  const date = format(new Date(releaseDate), 'do-MMM-yyy')
  console.log(date)

  return (
    <div className="more-movie-container">
      <div className="more-con">
        <div className="column">
          <p className="movie-heading">Genres</p>
          <ul className="ul-list">
            {genres.map(each => (
              <li className="text-value" key={each.id}>
                {each.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <p className="movie-heading">Audio Available</p>
          <ul className="ul-list">
            {spokenLanguages.map(each => (
              <li className="text-value" key={each.id}>
                {each.englishName}
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <p className="movie-heading">rating Count</p>
          <p className="text-value">{voteCount}</p>
          <p className="movie-heading">Rating Average</p>
          <p className="text-value">{voteAverage}</p>
        </div>
        <div className="column">
          <p className="movie-heading">Budget</p>
          <p className="text-value">{budget}</p>
          <p className="movie-heading">Release Date</p>
          <p className="text-value">{date}</p>
        </div>
      </div>
      <p className="heading-more-heading">More like this </p>
      <ul className="similar-movie">
        {similarMovies.map(eachValue => (
          <SimilarMoviesItem eachValue={eachValue} key={eachValue.id} />
        ))}
      </ul>
      <SocialMedia />
    </div>
  )
}
export default MoreMovieDetails
