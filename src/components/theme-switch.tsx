import React from "react";
import { Button } from "@heroui/react";
import { useTheme } from "@heroui/use-theme";
import { Icon } from "@iconify/react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      variant="light"
      onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="transition-transform hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Icon icon="lucide:moon" className="text-xl" />
      ) : (
        <Icon icon="lucide:sun" className="text-xl" />
      )}
    </Button>
  );
}