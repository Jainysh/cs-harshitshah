// src/components/HeroCarousel.tsx
"use client";
import { useState, useEffect } from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Navigate SEBI Compliances with Clarity, Confidence & Control",
    sub: "Backed by Expert Support - Specialised audit and compliance consultancy for SEBI intermediaries.",
  },
  {
    title: "From Incorporation to Exit - We Handle Every Legal Mile.",
    sub: "End-to-end corporate law and secretarial support for startups and SMEs.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0F2040",
        backgroundImage:
          "linear-gradient(135deg, rgba(201,168,76,0.05) 25%, transparent 25%)",
        backgroundSize: {
          xs: "60px 60px",
          sm: "80px 80px",
          md: "100px 100px",
        },
        display: "flex",
        alignItems: "center",
        color: "white",
        overflow: "hidden",
        position: "relative",
        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 6,
            sm: 8,
            md: 10,
          },
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                maxWidth: {
                  xs: "100%",
                  sm: "90%",
                  md: 800,
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  lineHeight: 1.2,
                  mb: {
                    xs: 2,
                    sm: 3,
                  },
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.4rem",
                    md: "3.5rem",
                    lg: "4rem",
                  },
                }}
              >
                {slides[current].title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.85,
                  mb: {
                    xs: 3,
                    sm: 4,
                  },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                  },
                }}
              >
                {slides[current].sub}
              </Typography>
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  sx={{
                    fontWeight: 600,
                    py: 1.4,
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  sx={{
                    color: "white",
                    borderColor: "white",
                    fontWeight: 600,
                    py: 1.4,
                  }}
                >
                  Our Services
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
