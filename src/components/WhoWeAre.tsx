// src/components/WhoWeAre.tsx
"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3 },
        bgcolor: "background.paper",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          sx={{ alignItems: "center" }}
        >
          {/* LEFT CONTENT */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: { xs: 3, md: 4 },
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Who We Are
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: { xs: "40%", md: "60%" },
                    height: "3px",
                    bgcolor: "secondary.main",
                  }}
                />
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                  color: "text.primary",
                  mt: { xs: 2, md: 4 },
                  lineHeight: 1.7,
                }}
              >
                We are a professional firm specializing in Company Law matters,
                SEBI Regulations, Start-up Advisory, Due Diligence and
                Compliance Management. With a practical and client-focused
                approach, we help businesses stay compliant while enabling
                growth.
              </Typography>
            </motion.div>
          </Grid>

          {/* RIGHT IMAGE — desktop only */}
          <Grid
            size={{ xs: 12, lg: 5 }}
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/homepage/who-we-are.webp"
                alt="Who We Are"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "8px",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
