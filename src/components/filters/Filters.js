import { useDispatch, useSelector } from "react-redux";

import { toggleFilter } from '../store/FilterSlice'
import './Filters.scss'


function Filter (){

  const filters = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const checkboxChange = (option) => {
    dispatch(toggleFilter({option}))
  }

  return (
    <div className="filters"> 
      <h3 className="filters-title">КОЛИЧЕСТВО ПЕРЕСАДОК</h3> 
      <form className="form">
        <label className="label"> 
          <input className='checkbox visually-hidden'
            type = "checkbox"
            checked={filters.all}
            onClick = {() => {checkboxChange('all')}}
          ></input>
          <span className="check"></span>
          Все
        </label>
      
        <label className="label">
          <input className='checkbox visually-hidden'
            type = "checkbox"
            checked={filters.noStops}
            onClick = {() => {checkboxChange('noStops')}}
          ></input>
          <span  className="check"></span>
          Без пересадок
        </label>
      
        <label className="label">
          <input className='checkbox visually-hidden'
            type = "checkbox"
            checked={filters.oneStop}
            onClick = {() => {checkboxChange('oneStop')}}
          ></input>
          <span  className="check"></span>
          1 пересадка
        </label>
      
        <label className="label">
          <input className='checkbox visually-hidden'
            type = "checkbox"
            checked={filters.twoStops}
            onClick = {() => {checkboxChange('twoStops')}}
          ></input>
          <span  className="check"></span>
          2 пересадки
        </label>
      
        <label className="label">
          <input className='checkbox visually-hidden'
            type = "checkbox"
            checked={filters.threeStops}
            onClick = {() => {checkboxChange('threeStops')}} 
          ></input>
          <span  className="check"></span>
          3 пересадки
        </label>
      </form>
      
    </div>
  )
}

export default Filter