import React from 'react';

const BgPrimaryButton = ({ text, Icon, btnStyle, clickOpen }) => {
  return (
    <button onClick={clickOpen} className={`rounded-md py-2 px-4 text-titan-50 border-titan-700 bg-titan-700 border-[2px] flex items-center justify-center gap-2 capitalize transition-all hover:shadow-sm hover:border-titan-800 hover:bg-titan-800 ${btnStyle}`}>
    {Icon && (
      <Icon size="20" className='font-bold' />
    )}
      <span className='text-base font-normal'>{text}</span>
    </button>
  );
};

export default BgPrimaryButton;
