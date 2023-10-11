import {Link} from 'react-router-dom'
import './index.css'

const SimilarMoviesItem = props => {
  const {eachValue} = props
  const {id, posterPath, title} = eachValue

  return (
    <li className="similar-list">
      <Link to={`/movies/${id}`} className="link">
        <img src={posterPath} alt={title} className="img" />
      </Link>
    </li>
  )
}
export default SimilarMoviesItem
