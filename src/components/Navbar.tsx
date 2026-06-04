// src/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 not next/router
import { Close, Menu } from "@mui/icons-material";
import { CompanyDetails } from "@/utils/constants";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Services", href: "/services" },
  // { text: "Blogs", href: "/blogs" },
  { text: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const hasDarkBg = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 2 : 0}
      sx={{
        bgcolor: scrolled ? "white" : "transparent",
        // filter: !scrolled ? "blur(10px) brightness(0.8)" : "none",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid #E5E0D8" : "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "/")}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: 40, marginRight: 8 }}
          />
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: scrolled || !hasDarkBg ? "primary.main" : "white",
                fontFamily: "Playfair Display",
                fontWeight: 700,
              }}
            >
              {CompanyDetails.proprieter}
              {/* <span style={{ color: "#C9A84C" }}>.</span> */}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "secondary.main",
                fontFamily: "Playfair Display",
                fontWeight: 700,
              }}
            >
              {CompanyDetails.tagLine}
            </Typography>
          </Box>
        </Box>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.text}
                href={link.href}
                passHref
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: scrolled || !hasDarkBg ? "text.primary" : "white",
                    fontSize: "0.95rem",
                    fontWeight: isActive ? 600 : 500,
                    position: "relative",
                    "&:hover": { color: "secondary.main" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      bottom: "-4px",
                      left: "0",
                      backgroundColor: "secondary.main",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  {link.text}
                </Typography>
              </Link>
            );
          })}
        </Box>

        <IconButton
          sx={{
            display: { md: "none" },
            color: scrolled || !hasDarkBg ? "primary.main" : "white",
          }}
          onClick={() => setMobileOpen(true)}
        >
          <Menu />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250, p: 3 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ mb: 2 }}>
            <Close />
          </IconButton>
          <List>
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                passHref
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem onClick={() => setMobileOpen(false)}>
                  <ListItemText primary={link.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
