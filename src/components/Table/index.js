import React from 'react';
import Button from '../../Icon/Button';
import Arrow from '../../Icon/Arrow';
import Mark from '../../Icon/Mark';

import './index.scss';

const imagesList = [
  '/img/wrap-1.png',
  '/img/wrap-2.png',
  '/img/wrap-3.png',
  '/img/wrap-4.png',
  '/img/wrap-5.png',
];

const tableObject = {
  invoice: 'Basic Plan - Dec 2020',
  amount: 'USD $10.00',
  date: 'DEC 1, 2022',
  status: 'Paid',
}

const tableData = [
  { ...tableObject, user: 7 },
  { ...tableObject, user: 6 },
  { ...tableObject, user: 5 },  
  { ...tableObject, user: 3 },
  { ...tableObject, user: 4 },
  { ...tableObject, user: 4 },
  { ...tableObject, user: 3 }
];

const position = ['0px', '-15px', '-30px', '-45px', '-55px'];

const Table = () => {
    return (
      <table className="table" cellSpacing="0">
        <thead>
          <tr>
            <th>
              <span className="flex items-center">
                <input type="checkbox" className='table__check mr-2'/> 
                <span className="table__title">Invoice</span> 
                <Arrow /> 
              </span>
            </th>
            <th><span className="table__title">Amount</span> </th>
            <th><span className="table__title">Date</span> </th>
            <th><span className="table__title">Status</span> </th>
            <th><span className="table__title">Users on plan</span> </th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {
            tableData.map((data, index) => (
              <tr key={index}>
                <td className="text-gray-900 font-medium"> <input type="checkbox" className='table__check mr-2'/>{data.invoice}</td>
                <td className="text-gray-500">{data.amount}</td>
                <td className="text-gray-500">{data.date}</td>
                <td className="">
                    <div className="flex items-center bg-green-50 rounded-2xl justify-between px-2 w-16 w-16">
                      <Mark />
                      <span className="ml-3 text-green-700">{data.status}</span>
                    </div>
                </td>
                <td 
                  className="flex relative">
                    {
                      imagesList.slice(0, data.user).map(
                        (user, index) => <img
                          key={index}
                          alt="user"
                          className="w-14 h-14" 
                          src={user} 
                          style={{ transform: `translate(${position[index]}, 0px)`}}
                        />
                        )
                    }
                    {
                      data.user > 5 
                      ?  <div 
                          className="table__user-left"
                        >
                          +{data.user - 5}
                        </div>
                      : null
                    }
                </td>
                <td><Button /></td>
            </tr>
            ))
          }
          </tbody>
        </table>
    );
};


export default Table;
