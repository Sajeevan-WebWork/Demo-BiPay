import React from 'react'

const InputField = ({ Type, Name, Id, Value, Style, PlaceHolder, hidden}) => {
  return (
    <div>
      <input className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${Style}`} type={Type} name={Name} id={Id} value={Value} placeholder={PlaceHolder} hidden/>
    </div>
  )
}

export default InputField
