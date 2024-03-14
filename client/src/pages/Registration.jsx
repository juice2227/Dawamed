// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import emailIcon from "../images/email-icon.svg";
import passwordIcon from "../images/password-icon.svg";
import { Link } from "react-router-dom";
//import { FaRegUserCircle } from "react-icons/fa";
import userIcon from "../images/acc.png.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  //const [firstName, setFirstname]= useState('');
  //const [secondname, setSecondname] = usestate('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true)
    axios
      .post("http://localhost:3000/api/register", {
        firstname,
        lastname,
        confirmPassword,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        console.log(result.json)
        setLoading(false);
        navigate("/login");
      })
      .catch((err) =>{ console.log(err)
      setLoading(false)}
      );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form className="w-full max-w-md bg-green-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-center text-2xl mb-6">Register</h2>
        <div className="mb-4 flex items-center">
          {/* <img src={userIcon} alt="User Icon" className="w-6 h-6 mr-2" /> */}

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="name"
            placeholder="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          {/* <img src={userIcon} alt="User Icon" className="w-6 h-6 mr-2" /> */}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="name"
            placeholder="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          {/* <img src={emailIcon} alt="Email Icon" className="w-6 h-6 mr-2" /> */}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          {/* <img src={passwordIcon} alt="Password Icon" className="w-6 h-6 mr-2" /> */}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          {/* <img src={passwordIcon} alt="Password Icon" className="w-6 h-6 mr-2" /> */}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 w-[100%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRegister}
            disabled={loading} // Disable the button when loading
          >
           {loading ? "Registering..." : "Register"}
          </button>
        </div>
        <Link to="/login">Already have an account? Login here</Link>
      </form>
    </div>
  );
};

export default Registration;
