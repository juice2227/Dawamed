import React from "react";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div className="p-[1rem] ">
      <ul className="">
        <li className="bg-red-900 text-white text-center">
          <Link to='/login'>Sign in</Link>
        </li>
        <div className="bg-green-500 text-white space-y-[1rem]">
          <li className="pt-[1rem] text-center">
            <Link>My Orders</Link>
          </li>
          <li className="text-center">
            <Link>My Account</Link>
          </li>
          <li  className="text-center">
            <Link>Notifications</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
