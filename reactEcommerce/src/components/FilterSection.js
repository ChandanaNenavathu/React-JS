import React from 'react'
import { useFilterContext } from './context/Filter_contex'
import { FaCheck } from 'react-icons/fa';
import  FormatPrice  from './Helpers/FormatPrice'

const FilterSection = () => {
  const {filters:{text, category, color , price, maxPrice, minPrice}, all_products, updateFilterValue, clearFilter} = useFilterContext();

  // To get unique data of each fields

  const getUniqueData = (data, property ) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    if(property === "colors") {
      // return ["All",...new Set([].concat(...newValue))]
      newValue= newValue.flat();
    };
    return (newValue = ["all",...new Set(newValue)])
  };

  // we need unique data

  const categoryOnlyData = getUniqueData(all_products, 'category');
  const companyOnlyData = getUniqueData(all_products, 'company');
  const colorData = getUniqueData(all_products, 'colors')
// console.log(" colorData=>",colorData)
// console.log("categoryOnlyData => ", categoryOnlyData)
// console.log("companyOnlyData => ", companyOnlyData)
  

  return (
    <div>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text"  
            name='text' 
            value={text} 
            onChange={updateFilterValue}
            placeholder='SEARCH'
          />
        </form> 
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>{categoryOnlyData.map((curElem, index) => {
          return <button key={index}
            type="button"
            name='category'
            value={curElem}
            onClick={updateFilterValue}
              className={category === curElem ? 'active' : ''}
            >{curElem}
          </button>
        })}</div>
        <div className="filter-company">
          <h3>Company</h3>
          <form action="#">
            <select name="company" id="company" className='filter-company--select' 
            onClick={updateFilterValue}>
            {
              companyOnlyData.map((curElem, index) => {
                return(
                  <option
                  key={index}
                    value={curElem}
                    name="company"
                  >{curElem}</option>
                )
              })
            }
            </select>
          </form>
        </div>
      </div>
      <div className="filter-colors-colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorData.map((curColor, index) =>{
            return (
              <button 
                key={index}
                value={curColor} 
                name= "color"
                type='button' 
                style= {{backgroundColor:curColor}} 
              className= {color === curColor ? 'btnStyle active' : "btnStyle"}
                onClick={updateFilterValue}>
                  {color === curColor ? <FaCheck className='checkStyle' />  : null}
              </button>
            )
          })}
        </div>
      </div>
      <div className="filter-price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} /> 
        </p>
        <input 
          type="range"
          name='price'  
          min={minPrice} 
          max={maxPrice } 
          value={price} 
          onChange={updateFilterValue} 
        />
      </div>
      <div className="filter-clear">
        <button className='btn' onClick={clearFilter}>
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FilterSection
