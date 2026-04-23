// src/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = ["Home", "Services", "About Us", "Blogs", "Contact Us"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid #E5E0D8" : "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: scrolled ? "primary.main" : "white",
              fontFamily: "Playfair Display",
              fontWeight: 700,
            }}
          >
            CS Harshit Shah<span style={{ color: "#C9A84C" }}>.</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "secondary.main",
              fontFamily: "Playfair Display",
              fontWeight: 700,
            }}
          >
            Financial & Corporate Law Advisor
          </Typography>
        </Box>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(" ", "-")}`}
              passHref
            >
              <Typography
                sx={{
                  color: scrolled ? "text.primary" : "white",
                  fontSize: "0.9rem",
                  "&:hover": { color: "secondary.main" },
                  transition: "color 0.2s",
                }}
              >
                {link}
              </Typography>
            </Link>
          ))}
        </Box>

        <IconButton
          sx={{
            display: { md: "none" },
            color: scrolled ? "primary.main" : "white",
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
            <X />
          </IconButton>
          <List>
            {navLinks.map((text) => (
              <ListItem key={text} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
