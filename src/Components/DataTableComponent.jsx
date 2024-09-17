import React from 'react';

const formatHeader = (header) => {
  return header.replace(/([a-z])([A-Z])/g, '$1 $2');
};

const DataTableComponent = ({ tableHeader, tableList }) => {
  return (
    <div className="bg-white w-full rounded-md dashboard__announcement_tablet">
      <div className="relative overflow-auto">
        <table className="w-full text-sm text-left rtl:text-right my-6">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {tableHeader.map((head, index) => (
                <th key={index} scope="col" className="px-4 py-3 text-nowrap">
                  {formatHeader(head)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableList.map((item, index) => (
              <tr
                key={index}
                className="bg-white cursor-pointer hover:bg-titan-200 transition-all dark:border-gray-700"
              >
                {tableHeader.map((head, i) => (
                  <td key={i} className="px-4 py-4 text-xs font-light text-gray-900 whitespace-nowrap">
                    {item[head] || 'N/A'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination (Optional) */}
      <div className="flex gap-2 justify-end">
        <div className="flex">
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </a>
        </div>

        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm items-end justify-end">
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-titan-900 border border-gray-300 bg-titan-300 hover:bg-blue-100 hover:text-blue-700">3</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DataTableComponent;
