"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      suppressHydrationWarning
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" suppressHydrationWarning />
      ) : (
        <Moon className="h-5 w-5" suppressHydrationWarning />
      )}
    </Button>
  );
};

export default ThemeToggle;
