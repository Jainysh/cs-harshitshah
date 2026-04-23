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
    <Box sx={{ py: 12, bgcolor: "background.paper", position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{ mb: 4, position: "relative", display: "inline-block" }}
              >
                Who We Are
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -10,
                    left: 0,
                    width: "60%",
                    height: "3px",
                    bgcolor: "secondary.main",
                  }}
                />
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", color: "text.primary", mt: 4 }}
              >
                We are a professional firm specializing in Company Law matters,
                SEBI Regulations, Start-up Advisory, Due Diligence and
                Compliance Management. With a practical and client-focused
                approach, we help businesses stay compliant while enabling
                growth.
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
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
                      p: 3,
                      border: "1px solid #E5E0D8",
                      bgcolor: "white",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "secondary.main", fontWeight: 700 }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
