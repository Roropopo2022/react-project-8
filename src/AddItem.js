import React from 'react'

export default function AddItem(props) {
  return (
    <form
      className="space-y-3 flex flex-col items-left m-5  max-w-sm"
      onSubmit={props.onFormSubmit}
    >
      <div className="flex flex-col items-left gap-2">
        <label
          className="block text-lg font-medium text-gray-700"
          htmlFor="item-name"
        >
          Название:
        </label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="w-full textfield border border-gray-900  rounded pl-2 shadow-sm 
          focus:shadow-lg
          "
        />
      </div>
      <div className="flex flex-col items-left gap-2">
        <label
          className="block text-lg font-medium text-gray-700"
          htmlFor="item-description"
        >
          Описание:
        </label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="textfield border border-black rounded pl-2 shadow-sm focus:shadow-lg"
        />
      </div>
      <div className="form-footer gap-10 flex flex-col ">
        <div className="validation pl-5 italic text-red-500">{props.valid}</div>
        <input
          type="submit"
          className="btn btn-basic rounded-md bg-green-500 shadow-sm
          hover:shadow-lg 
          focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-900 hover:bg-green-600 px-5 m-auto text-gray-100 h-10 focus:ring-offset-2 font-bold transition duration-150 ease-in-out"
          value="Добавить"
        />
      </div>
    </form>
  )
}
