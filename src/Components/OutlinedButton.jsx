import React from 'react';

const OutlinedButton = ({ text, btnStyle, Icon, onButtonClick }) => {
  return (
    <div>
      <button 
        onClick={onButtonClick} 
        className={`rounded-md py-2 px-4 text-titan-500 border-titan-500 bg-white border-[2px] flex items-center justify-center gap-2 transition-all hover:shadow-sm hover:border-titan-600 ${btnStyle}`}>
        {Icon && <Icon size="20" className='font-bold' />}
        <span className='text-base font-normal'>{text}</span>
      </button>
    </div>
  );
};

export default OutlinedButton;
