import React from 'react'
import Item from './Item'

export default function ItemsList(props) {
  return (
    <ul className="shop flex flex-col gap-5">
      {props.items.map((item) => (
        <li className="flex items-center" key={item.id}>
          <Item info={item} />
          <button
            className="btn-delete bg-red-600 text-white font-bold rounded-md mx-5 p-2 shadow-sm hover:shadow-lg hover:bg-red-600 focus:ring-2 focus:ring-red-700 focus:outline-none focus:focus:ring-offset-1 transition duration-150 ease-in-out"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  )
}
