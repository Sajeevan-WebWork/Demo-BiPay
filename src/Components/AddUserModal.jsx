
import OutlinedButton from './OutlinedButton';



const AddUserModal = ({ closeModal, modalTitle }) => {
  return (
    <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
      <div className="relative p-4 w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow p-6 md:p-5">
          <div className="flex items-center justify-between   border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">{modalTitle}</h3>
            <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-titan-100 transition-all hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="my-5">
            {/* Modal Content */}
            <p className="text-sm font-normal">No email settings found</p>
            <ul className='list-decimal pl-5 py-3'>
              <li className="text-base font-normal py-1">Please make sure you setup the job on your hosted server as instructed on the documentation for sending emails.</li>
              <li className="text-base font-normal py-1">For sending invitation you must set up email settings. Click here to add email settings.</li>
            </ul>
          </div>
          <OutlinedButton onButtonClick={closeModal} text={"Close"} btnStyle={'px-8'} />
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
