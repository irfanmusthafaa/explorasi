import useThemeStore from "../stores/useThemeStore";

const Sidebar = () => {
  const { theme } = useThemeStore();

  return (
    <aside
      className={`w-64 h-full p-4 bg-gray-400 dark:bg-gray-900 text-white fixed top-0 left-0 ${
        theme ? "dark" : "light"
      }`}
    >
      <h2 className="text-lg mb-4 text-slate-800 dark:text-white ">Menu</h2>
      <ul className="text-slate-800 dark:text-white ">
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <a href="#">Home</a>
        </li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <a href="#">Contact</a>
        </li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <a href="#">About</a>
        </li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <a href="#">Logout</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
