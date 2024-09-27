import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300">
      <Header />
      <main className="flex-grow p-8 mx-auto my-8 max-w-6xl bg-white bg-opacity-80 shadow-2xl rounded-xl border border-gray-200">
        <div className="bg-gradient-to-b from-blue-50 to-white p-10 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  ) : (
    <Spinner />
  ); // Optionally, you can add a loading spinner here
}

export default App;
