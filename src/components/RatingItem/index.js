import './index.css'

const RatingItem = props => {
  const {each, changeRating} = props
  const click = () => {
    changeRating(each.ratingId)
  }

  return (
    <li>
      <button onClick={click} className="fil-btn" type="button">
        <img
          className="rating-img"
          alt={`rating ${each.ratingId}`}
          src={each.imageUrl}
        />
        <span> &up</span>
      </button>
    </li>
  )
}
export default RatingItem
