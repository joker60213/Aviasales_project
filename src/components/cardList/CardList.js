
import { Empty, Spin } from 'antd'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import Ticket from "../card";

import { generateUniqKey } from './GenerateUniqKey'

import './СardList.scss';



function CardList () {
  const filter = useSelector((state) => state.filter)
  const activeTab = useSelector((state) => state.tabs)
  const tickets = useSelector((state) => state.tickets.items)
 
  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5)

  const isAnyFilterSelected = filter.all || filter.noStops || filter.oneStop || filter.twoStops || filter.threeStops

  const filteredTickets = useMemo(() => {
    if (!Array.isArray(tickets)) return []

    return tickets.filter((ticket) => {
      const stops = ticket.segments.reduce((acc, segment) => acc + segment.stops.length, 0)

      return (
        filter.all ||
        (stops === 0 && filter.noStops) ||
        (stops === 1 && filter.oneStop) ||
        (stops === 2 && filter.twoStops) ||
        (stops === 3 && filter.threeStops)
      )
    })
  }, [tickets, filter])

  const sortedTickets = useMemo(() => [...filteredTickets].sort((a, b) => {
    const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
    const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)

    if (activeTab === 'cheapest') {
      return a.price - b.price
    }
    if (activeTab === 'fastest') {
      return durationA - durationB
    }
    if (activeTab === 'optimal') {
      return a.price + durationA - (b.price + durationB)
    }
    return 0
  }), [filteredTickets, activeTab])

  const visibleTickets = sortedTickets.slice(0, visibleTicketsCount)
  
  const showSpinner = tickets.length < 5
  const showEmptyState = !isAnyFilterSelected
  return(
    <div className="card-list">
      {showSpinner ? (
        <Spin tip="Получение билетов" size="large">
          <div className=''>
            <Empty description="Идет загрузка билетов" />
          </div>
        </Spin>
      ) : showEmptyState ? (
        <div className=''>
          <Empty description="Нет билетов, соответствующих выбранным фильтрам" />
        </div>
      ) : (
        <>
          {visibleTickets.map((ticket) => (
            <Ticket key={generateUniqKey(ticket)} data={ticket} />
          ))}
          {visibleTicketsCount < sortedTickets.length && (
            <button className='button-show-more' onClick={() => setVisibleTicketsCount((count) => count + 5)}>
                      Показать еще 5 билетов!
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default CardList