import React, { useState } from "react";
import Email from '../../Icon/Email';
import Visa from '../../Icon/Visa';
import MasterCard from '../../Icon/MasterCard';
import Check from '../../Icon/Check';
import Uncheck from '../../Icon/Uncheck';
import Button from '../../Icon/Button';
import Table from '../Table';
import Logo from '../../Icon/Logo';
import Mobile from '../../Icon/Mobile';
import './index.scss';

const Setting = () => {
  const [check, setCheck] = useState('visa');

  return (
    <div className="flex flex-col w-full">
    <div className="logo">
      <div className="flex items-center">
        <Logo />
          <h3 className="ml-2">Untitled UI</h3>
        </div>
          <Mobile />
      </div>
    <div className="setting__wrapper">
      <h1 className="text-3xl pl-5 md:pl-0">Settings</h1>
      <p className="mt-2 font-light mb-5 text-gray-500 pl-5 md:pl-0">Manage your team and preferences here.</p>
      <ul className="setting__items">
        <li className="rounded-tl-lg rounded-bl-lg setting__li">My details</li>
        <li className="setting__li">Profile</li>
        <li className="setting__li">Password</li>
        <li className="setting__li">Team</li>
        <li className="setting__li">Plan</li>
        <li className="setting__active setting__li">Billing</li>
        <li className="setting__li">Notifications</li>
        <li className="setting__li">Integrations</li>
        <li className="rounded-br-lg rounded-tr-lg setting__li">API</li>
      </ul>
      <h3 
        className="mt-10 pl-5 md:pl-0 setting_h3 text-lg">
        Payment method
      </h3>
      <p 
        className="font-light text-sm mb-5 pl-5 md:pl-0 setting_p"
      >
        Update your billing and address.
      </p>
      <hr className=" mb-10"/>
      <div className="flex flex-wrap pl-5 md:pl-0">
        <div className="mr-20">
          <h4 className="setting__contact text-sm">Contact email</h4>
          <p 
            className="font-light text-xs mb-5 seting__p text-sm"
            >
            Where should invoices be sent?
          </p>
        </div>
        
        <div>
          <div className="flex">
            <input 
              type="radio" 
              id="default_email" 
              name="email" 
              value="olivia@untitledui.com" 
              className="setting__radio"
            />
            <span className="ml-2">
              <label 
                htmlFor="default_email" 
                className="text-sm setting__contact"
              >
                Send to my account email
              </label>
              <br />
              <p className="font-light text-xs mb-5 select__p">olivia@untitledui.com</p>
            </span>
          </div>

          <div className="flex">
            <input 
              type="radio" 
              id="alternative_email" 
              name="email" 
              checked  
              readOnly 
              value="biling@untitledui.com"
              className="setting__radio"
            />
            <span className="ml-2">
                <label htmlFor="alternative_email" className="text-sm setting__contact">Send to an alternative email</label><br />
              <div className="setting__email mt-3">
                <Email />
                <p className="ml-3 text-base leading-6 setting__h3">biling@untitledui.com</p>
              </div>
            </span>
          </div>
        </div>

      </div>
      <hr className="mt-5 mb-5"/>

      <div className="setting__pay flex w-full pl-5 md:pl-0 pr-5 md:pr-0">
        <div className="mr-20">
          <h4 className="text-gray-700">Card details</h4>
          <p className="font-light text-xs mb-5 text-gray-500">Select default payment method.</p>
        </div>
        <div  className="flex w-full flex-col">
          <button 
            className={`setting__card ${check === 'visa' ? 'setting__card-active' : 'setting__card-not-active'}`}
            onClick={() => setCheck('visa')}
          >
            <div className="flex">
              <Visa />
              <div className="flex flex-col ml-5">
                <p 
                  className={`setting__card ${check === 'visa' ? 'setting__card-active-ending' : 'setting__card-not-active-ending'}`}
                >
                  Visa ending in 1234
                </p>
                <p 
                  className={`setting__card ${check === 'visa' ? 'setting__card-active-expire' : 'setting__card-not-active-expire'}`}
                >
                  Expiry 06/2024
                </p>
                <span className="setting__edit-wrapper flex">  
                  <p 
                    className={` ${check === 'visa' ? 'setting__card-active-default' : 'setting__card-not-active-default'}`}
                  >
                    Set as default 
                  </p>
                  <p
                    className={`${check === 'visa' ? 'setting__card-active-edit' : 'setting__card-not-active-edit'}`}
                  >
                  Edit
                </p>
                </span>
              </div>
            </div>
            { check === 'visa' ? <Check /> : <Uncheck /> }
          </button>

          <button 
            className={`setting__card ${check === 'master'? 'setting__card-active' : 'setting__card-not-active'}`}
            onClick={() => setCheck('master')}
          >
          <div className="flex">
              <MasterCard />
              <div className="flex flex-col ml-5">
                <p 
                  className={`setting__card ${check === 'master' ? 'setting__card-active-ending' : 'setting__card-not-active-ending'}`}
                >
                  Mastercard ending in 1234
                </p>
                <p 
                  className={`setting__card ${check === 'master' ? 'setting__card-active-expire' : 'setting__card-not-active-expire'}`}
                >
                  Expiry 06/2024
                </p>
                <span className="setting__edit-wrapper flex">  
                  <p 
                    className={` ${check === 'master' ? 'setting__card-active-default' : 'setting__card-not-active-default'}`}
                  >
                    Set as default 
                  </p>
                  <p
                    className={`${check === 'master' ? 'setting__card-active-edit' : 'setting__card-not-active-edit'}`}
                  >
                  Edit
                </p>
                </span>
              </div>
            </div>
            { check === 'master' ? <Check /> : <Uncheck /> }
          </button>
          <p className="mt-5 text-gray-400">+ Add new payment method</p>
        </div>
      </div>
      <div className="mt-10 mb-5 pl-5 md:pl-0 pr-5 md:pr-0">
        <div className="flex justify-between flex-col md:flex-row">
          <p className="text-gray-900">Billing History</p>
          <button className="flex p-3 setting__email justify-between items-center !w-max mt-5 md:mt-0">
            <Button />
            <span className="ml-3 text-gray-700">Download all</span>
          </button>
        </div>
      </div>
      <div className="w-full overflow-scroll">
        <Table />
      </div>
    </div>
    </div>
  )
};

export default Setting;