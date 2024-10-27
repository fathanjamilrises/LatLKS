import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const ApiKey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Using `useNavigate` for navigation
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${ApiUrl}?db=tbl_user&api_key=${ApiKey}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    data.map((users) => {
      const user = users.data;
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].password === password) {
          navigate("/Dashboard");
          return;
        } else {
          alert("Username atau Password salah");
          return;
        }
      }
    });
  };

  return (
    <div className="bg-blue-400 w-full h-screen flex justify-center items-center">
      <div className="flex justify-center mt-20">
        <div className="flex flex-row bg-slate-200 w-[800px] h-[600px] rounded-md">
          <div className="flex flex-col w-1/2 p-10">
            <h1 className="text-3xl font-bold mb-5">Login Page</h1>
            <p className="mb-20 text-md">Silahkan Login untuk melanjutkan</p>
            <form className="flex flex-col" onSubmit={handleLogin}>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium"
              >
                Nama
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md mb-4"
                id="username"
              />
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md mb-20"
                id="password"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 w-full rounded"
              >
                Login
              </button>
            </form>
          </div>
          <div className="w-1/2">
            <img
              src="/assets/logo.png"
              className="w-full h-full object-cover rounded-r-md"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
