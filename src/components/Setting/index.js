import React from "react";
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
        <li className="rounded-tl-lg rounded-bl-lg">My details</li>
        <li>Profile</li>
        <li>Password</li>
        <li>Team</li>
        <li>Plan</li>
        <li className="!bg-gray-100">Billing</li>
        <li>Notifications</li>
        <li>Integrations</li>
        <li className="rounded-br-lg rounded-tr-lg">API</li>
      </ul>
      <h3 className="mt-10 text-xl pl-5 md:pl-0 text-gray-900">Payment method</h3>
      <p className="font-light text-xs mb-5 text-gray-500 pl-5 md:pl-0">Update your billing and address.</p>
      <hr className=" mb-10"/>
      <div className="flex flex-wrap pl-5 md:pl-0">
        <div className="mr-20">
          <h4 className="text-gray-700">Contact email</h4>
          <p className="font-light text-xs mb-5 text-gray-500">Where should invoices be sent?</p>
        </div>
        <div>
          <div className="flex">
            <input type="radio" id="email" name="default_email" value="olivia@untitledui.com" />
            <span className="ml-2">
              <label htmlFor="html text-gray-700">Send to my account email</label><br />
              <p className="font-light text-xs mb-5 text-gray-500">olivia@untitledui.com</p>
            </span>
          </div>

          <div className="flex">
            <input type="radio" id="email" name="alternative_email" checked  readOnly value="biling@untitledui.com" />
            <span className="ml-2">
                <label htmlFor="html" className="text-gray-700">Send to an alternative email</label><br />
              <div className="setting__email mt-3">
                <Email />
                <p className="font-light text-xs ml-3">biling@untitledui.com</p>
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
          <div className="setting__card">
          <div className="flex">
            <Visa />
            <div className="flex flex-col ml-5">
              <p className="setting__card-ending">Visa ending in 1234</p>
              <p className="setting__card-expire font-normal text-sm">Expiry 06/2024</p>
              <p className="setting__card-default text-xs mt-3">Set as default <span className="setting__card-edit">Edit</span></p>
            </div>
            </div>
            <Check />
          </div>

          <div className="setting__card bg-white border-gray-200 rounded-sm">
          <div className="flex">
            <MasterCard />
            <div className="flex flex-col ml-5">
              <p className="setting__card-ending text-gray-600">Mastercard ending in 1234</p>
              <p className="setting__card-expire font-normal text-sm text-gray-400">Expiry 06/2024</p>
              <p className="setting__card-default text-xs text-gray-500 mt-3">Set as default <span className="setting__card-edit">Edit</span></p>
            </div>
            </div>
            <Uncheck />
          </div>
          <p className="mt-5 text-gray-400">+ Add payment method</p>
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