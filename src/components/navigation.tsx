import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { ThemeSwitch } from "./theme-switch";

export function Navigation() {
  return (
    <Navbar maxWidth="full" position="sticky">
      <NavbarBrand>
        <p className="font-bold text-inherit">Joy Tarafder</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#skills">Skills</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects">Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#education">Education</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#contact">
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}