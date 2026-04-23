// src/components/ServicesGrid.tsx
import {
  ArticleOutlined,
  AssuredWorkloadOutlined,
  Diversity3,
  GppGoodOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

const services = [
  {
    title: "SEBI Regulatory Advisory",
    desc: "Expert guidance for AIF, PMS, and Investment Advisers.",
    size: 8,
    icon: <AssuredWorkloadOutlined sx={{ color: "#C9A84C" }} />,
  },
  {
    title: "Corporate Law",
    desc: "Full-cycle secretarial support.",
    size: 4,
    icon: <WorkOutlineOutlined sx={{ color: "#C9A84C" }} />,
  },
  {
    title: "Startup Advisory",
    desc: "From incorporation to funding compliance.",
    size: 4,
    icon: <Diversity3 sx={{ color: "#C9A84C" }} />,
  },
  {
    title: "Due Diligence",
    desc: "Thorough audits for acquisitions and investments.",
    size: 4,
    icon: <GppGoodOutlined sx={{ color: "#C9A84C" }} />,
  },
  {
    title: "Contract Drafting",
    desc: "Vetting and drafting commercial agreements.",
    size: 4,
    icon: <ArticleOutlined sx={{ color: "#C9A84C" }} />,
  },
];

export default function ServicesGrid() {
  return (
    <Box sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, position: "relative" }}
        >
          Our Services
          <Box
            component="span"
            sx={{
              display: "block",
              width: 60,
              height: 3,
              bgcolor: "secondary.main",
              mx: "auto",
              mt: 1,
            }}
          />
        </Typography>

        <Grid container spacing={3}>
          {services.map((s, i) => (
            <Grid size={{ xs: 12, md: s.size }} key={i}>
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  border: "1px solid #E5E0D8",
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.05)",
                    borderColor: "secondary.main",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{s.icon}</Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
