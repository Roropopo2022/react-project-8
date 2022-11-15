import React, { useState } from 'react'

export default function Item(props) {
  const [total, setTotal] = useState(0)

  const { info } = props

  function handleAddClick() {
    setTotal(total + 1)
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1)
    }
  }

  if (!info) {
    return null
  }

  return (
    <div className="flex flex-col items-center item border border-black w-80 ml-12 space-y-6 rounded-xl border-2 border-blue-600 bg-gray-100 p-5">
      <div className="flex flex-col item-info gap-2">
        <h2 className="font-bold">{info.name}</h2>
        <p className="italic">{info.desc}</p>
      </div>
      <div className="item-quantity flex justify-center gap-3">
        <button
          className="item-less shadow-sm hover:shadow-md hover:bg-red-600 bg-red-500 px-3 text-3xl text-white rounded-full focus:ring-2 focus:ring-red-700 focus:outline-none focus:focus:ring-offset-1 transition duration-150 ease-in-out"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total text-blue-700 font-bold text-2xl">
          {total ? total : ''}
        </h3>
        <button
          className="item-more shadow-sm hover:shadow-md hover:bg-green-600 bg-green-500 px-3 text-xl text-white rounded-full focus:ring-2 focus:ring-green-700 focus:outline-none focus:focus:ring-offset-1 transition duration-150 ease-in-out"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </div>
  )
}
