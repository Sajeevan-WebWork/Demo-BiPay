import React from 'react';

const JobDeskComponentHeader = ({ title, btnText, Icon, onButtonClick }) => {
    return (
        <>
            <div className="flex items-center justify-between w-full">
                <h2 className="text-base font-semibold">{title}</h2>
                <button onClick={onButtonClick} className="flex items-center gap-2 relative rounded-md border-[2px] cursor-pointer px-2 py-1">
                    <Icon size={18} />
                    <p className="text-sm font-normal">{btnText}</p>
                </button>
            </div>
        </>
    );
}

export default JobDeskComponentHeader;
