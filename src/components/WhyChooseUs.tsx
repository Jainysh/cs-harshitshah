// src/components/WhyChooseUs.tsx
"use client";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  AssessmentOutlined,
  BalanceOutlined,
  GppGoodOutlined,
  HandshakeOutlined,
} from "@mui/icons-material";

const reasons = [
  {
    icon: <AssessmentOutlined sx={{ fontSize: 32 }} />,
    title: "Expert-Led Practice",
    desc: "Guided by a qualified CS with 10+ years of hands-on regulatory experience.",
  },
  {
    icon: <BalanceOutlined sx={{ fontSize: 32 }} />,
    title: "Regulatory Precision",
    desc: "Deep expertise in SEBI, MCA, and corporate law frameworks.",
  },
  {
    icon: <HandshakeOutlined sx={{ fontSize: 32 }} />,
    title: "Client-First Approach",
    desc: "Tailored solutions aligned with your business goals.",
  },
  {
    icon: <GppGoodOutlined sx={{ fontSize: 32 }} />,
    title: "Integrity & Independence",
    desc: "Unbiased advisory, free from conflicts of interest.",
  },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ py: 12, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 8 }}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {reasons.map((item, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i}>
              <motion.div whileHover={{ y: -5 }}>
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 0,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    border: "1px solid #E5E0D8",
                    borderLeft: "4px solid #C9A84C",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  <Box sx={{ color: "secondary.main", mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
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
