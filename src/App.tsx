import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import useThemeStore from "./stores/useThemeStore";

function App() {
  const { theme } = useThemeStore();

  console.log(theme, "them");

  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <div className="w-full h-screen bg-white dark:bg-slate-800">
        <Header />

        <div className="flex h-full">
          <Sidebar />

          <main className="ml-64 p-4 flex mt-[3rem]">
            <Home />
            <h2 className="text-2xl  text-slate-800 dark:text-white ">
              Welcome to the Application!
            </h2>
            <p className="">Content goes here...</p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
