import './index.css'
import {AiOutlineSearch} from 'react-icons/ai'
import Category from '../Category/index'
import RatingItem from '../RatingItem/index'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onSearch,
    changeCat,
    changeRating,
    resetFilters,
  } = props

  const reset = () => {
    resetFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="search-box">
        <input
          onKeyDown={onSearch}
          className="search"
          type="search"
          placeholder="search"
        />
        <AiOutlineSearch className="icon" />
      </div>
      <h1 className="filter-heading">Category</h1>
      <ul className="filters-list">
        {categoryOptions.map(each => (
          <Category key={each.categoryId} each={each} changeCat={changeCat} />
        ))}
      </ul>
      <h1 className="filter-heading">Rating</h1>
      <ul className="filters-list">
        {ratingsList.map(each => (
          <RatingItem
            key={each.ratingId}
            each={each}
            changeRating={changeRating}
          />
        ))}
      </ul>
      <button onClick={reset} type="button" className="clear-filter">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
