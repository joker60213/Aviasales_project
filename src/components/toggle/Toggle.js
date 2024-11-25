import React from 'react' 
import { useDispatch,useSelector} from 'react-redux'

import { setActiveTab } from '../store/TabsSlice'

import './Toggle.scss'

function Toggle() {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.tabs)

  const handleTabClick = (tab) => 
    dispatch(setActiveTab(tab)
    )
  
 
  return(
    <div className="toggle">
      <div 
        key={1}
        className = {`cheapest toggle-button ${activeTab === 'cheapest' ? "toggle-button-active" : ''}`}
        onClick={() => handleTabClick('cheapest')}
      ><span>САМЫЙ ДЕШЕВЫЙ</span></div>
      <div
        key={2} 
        className={`fastest toggle-button ${activeTab === 'fastest' ? "toggle-button-active" : ''}`}
        onClick={() => handleTabClick('fastest')}
      ><span>САМЫЙ БЫСТРЫЙ </span></div>
      <div
        key={3}
        className={`optimal toggle-button ${activeTab === 'optimal' ? "toggle-button-active" : ''}`}
        onClick={() => handleTabClick('optimal')}
      ><span>ОПТИМАЛЬНЫЙ</span></div>
    </div>
  )
}

export default Toggle