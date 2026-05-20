"use client";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  BalanceOutlined,
  BusinessCenterOutlined,
  WorkspacePremiumOutlined,
  VerifiedUserOutlined,
  AccessTimeOutlined,
  DesignServicesOutlined,
} from "@mui/icons-material";

const reasons = [
  {
    icon: <BusinessCenterOutlined sx={{ fontSize: { xs: 28, md: 32 } }} />,
    title: "One-Stop solution for all your compliance needs",
  },
  {
    icon: <BalanceOutlined sx={{ fontSize: { xs: 28, md: 32 } }} />,
    title: "Strong Regulatory Expertise",
  },
  {
    icon: <WorkspacePremiumOutlined sx={{ fontSize: { xs: 28, md: 32 } }} />,
    title: "Experienced Professional Guidance",
  },
  {
    icon: <VerifiedUserOutlined sx={{ fontSize: { xs: 28, md: 32 } }} />,
    title: "End-to-End Compliance Support",
  },
  {
    icon: <AccessTimeOutlined sx={{ fontSize: { xs: 28, md: 32 } }} />,
    title: "Timely Execution",
  },
  {
    icon: <DesignServicesOutlined sx={{ fontSize: { xs: 28, md: 32 } }} />,
    title: "Customized Solutions",
  },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: { xs: 4, md: 8 },
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Why Choose Us
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {reasons.map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <motion.div whileHover={{ y: -5 }} style={{ height: "100%" }}>
                <Paper
                  sx={{
                    p: { xs: 2.5, md: 4 },
                    height: "100%",
                    borderRadius: 1,
                    textAlign: { xs: "center", sm: "left" },
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    border: "1px solid #E5E0D8",
                    borderLeft: { md: "4px solid #C9A84C" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                >
                  <Box sx={{ color: "secondary.main", mb: 2 }}>{item.icon}</Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.1rem"
                    }}
                  >
                    {item.title}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
