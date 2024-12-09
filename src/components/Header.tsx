import useThemeStore from "../stores/useThemeStore";

const Header = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <header className="fixed h-[3rem] w-full p-4 bg-blue-500 dark:bg-blue-800 text-white flex justify-between items-center">
      <h1>My Application</h1>
      <button
        onClick={() => setTheme(!theme)}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
      >
        {theme ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
