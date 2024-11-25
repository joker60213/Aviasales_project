import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './FilterSlice'
import tabsReducer from './TabsSlice'
import ticketsReducer from './TicketsSlice'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    tabs: tabsReducer,
    tickets: ticketsReducer,
  
  },
})

export default store
