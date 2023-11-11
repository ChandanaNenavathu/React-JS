import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from './context/Filter_contex'


const Sort = () => {
  const{ filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext()
  return (
    <div>
      {/* 1st column */}
      <div className="sorting-list--grid">
        <button 
          className= { grid_view ? 'active sort-btn' : "sort-btn"}
          onClick={setGridView}>  
          <BsFillGridFill className="icon"/>
        </button>
        <button 
          className= { !grid_view ? 'active sort-btn' : "sort-btn"} 
          onClick={setListView}>
          <BsList className='icon'/>
        </button>
          {/* 2nd column */}
        <div className="product-data">
          <p>{`${filter_products.length} Products Available`}</p>
        </div>
          {/* 3rd Column */}
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort">
              <select name="sort" id="id" className='sort-selection--style' onClick={sorting}>
                <option value="lowest">Price(lowest)</option>
                <option value="#"></option>
                <option value="highest">Price(highest)</option>
                <option value="#"></option>
                <option value="a-z">Price(a-z)</option>
                <option value="#"></option>
                <option value="z-a">Price(z-a)</option>
                <option value="#"></option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sort
