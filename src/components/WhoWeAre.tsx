// src/components/WhoWeAre.tsx
"use client";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Clients Served", value: "50+" },
  { label: "Practice Areas", value: "4" },
];

export default function WhoWeAre() {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
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
          <Grid size={{ xs: 12, md: 7 }}>
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

          {/* RIGHT STATS */}
          {/* <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={{ xs: 2, md: 3 }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: { xs: 2, sm: 2.5, md: 3 },
                      border: "1px solid #E5E0D8",
                      bgcolor: "white",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      alignItems: { xs: "flex-start", sm: "center" },
                      gap: { xs: 1, sm: 0 },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "secondary.main",
                        fontWeight: 700,
                        fontSize: { xs: "1.5rem", md: "2rem" },
                      }}
                    >
                      {stat.value}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: "primary.main",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}
