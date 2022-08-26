import './index.css'

const Category = props => {
  const {each, changeCat} = props
  const click = () => {
    changeCat(each.categoryId)
  }

  return (
    <li>
      <button onClick={click} className="fil-btn" type="button">
        <p className="cat-name">{each.name}</p>
      </button>
    </li>
  )
}
export default Category
