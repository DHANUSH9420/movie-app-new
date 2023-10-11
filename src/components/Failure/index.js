import './index.css'

const Failure = props => {
  const {onRetry} = props
  const onClickTryAgain = () => {
    onRetry()
  }

  return (
    <div className="failure-con">
      <img
        src="https://res.cloudinary.com/dv0wkaiuj/image/upload/v1696237369/alert-triangle_icvhqm.png"
        alt="failure view"
        className="f-img"
      />
      <p className="f-text">Something went wrong. Please try again</p>
      <button className="f-button" type="button" onClick={onClickTryAgain}>
        Try Again
      </button>
    </div>
  )
}
export default Failure
