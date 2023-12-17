import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const useThemeSwitcher = () => {
  const preferedDarkTheme = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState<ThemeMode | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferedDarkTheme);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      const check = userPref || (mediaQuery.matches ? "dark" : "light");
      setMode(check as ThemeMode);
      document.documentElement.classList.toggle("dark", check === "dark");
    };

    mediaQuery.addEventListener("change", handleChange);
    handleChange(); 
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []); // The effect will run only on mount

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem("theme", mode);
      document.documentElement.classList.toggle("dark", mode === "dark");
    }
  }, [mode]); 

  return [mode, setMode] as const;
};

export default useThemeSwitcher;
