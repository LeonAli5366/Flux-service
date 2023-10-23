import React from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context api/UserContext";
const Login = () => {
  const navigate = useNavigate();

  // all context
  const { signIn } = useContext(AuthContext);
  //  all state
  const [error, setError] = useState("");
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form?.email?.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="py-56 bg-black">
      <form onSubmit={handleSignIn} className="flex flex-col items-center justify-center border md:max-w-[500px] mx-auto rounded bg-black py-10 px-12 gap-5 l-wrapper">
        <span className="text-black text-2xl font-semibold">Login Now</span>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">Email</span>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">Password</span>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
          />
        </div>
        <h1 className="text-red-600 my-2 text-start">{error}</h1>
        <button
          type="submit"
          className="border py-2 w-full text-black hover:text-white bg-white hover:bg-black rounded custom-btn mt-4 font-semibold">
          Sign In
        </button>
        <span className="text-black">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Register Here
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
