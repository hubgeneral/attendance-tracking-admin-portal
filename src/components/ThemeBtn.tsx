import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
type Theme = "light" | "dark";

const ThemeBtn = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-white-200 dark:bg-green-700 shadow-md"
    >
      {theme === "light" ? <IoMoonOutline /> : <MdOutlineWbSunny />}
    </button>
  );
};

export default ThemeBtn;
