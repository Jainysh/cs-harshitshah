import {
  ArticleOutlined,
  AssuredWorkloadOutlined,
  Diversity3,
  GppGoodOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Link from "next/link";

const services = [
  {
    title: "SEBI Regulatory Advisory",
    desc: "Expert guidance for AIF, PMS, and Investment Advisers.",
    size: 6,
    link: '/services?tab=0',
    icon: (
      <AssuredWorkloadOutlined
        sx={{ fontSize: { xs: 28, md: 32 }, color: "#C9A84C" }}
      />
    ),
  },
  {
    title: "Corporate Law",
    desc: "Full-cycle secretarial support.",
    size: 6,
    link: '/services?tab=1',
    icon: (
      <WorkOutlineOutlined
        sx={{ fontSize: { xs: 28, md: 32 }, color: "#C9A84C" }}
      />
    ),
  },
  {
    title: "Startup Advisory",
    desc: "From incorporation to funding compliance.",
    size: 6,
    link: '/services?tab=2',
    icon: (
      <Diversity3 sx={{ fontSize: { xs: 28, md: 32 }, color: "#C9A84C" }} />
    ),
  },
  // {
  //   title: "Due Diligence",
  //   desc: "Thorough audits for acquisitions and investments.",
  //   size: 4,
  //   icon: (
  //     <GppGoodOutlined
  //       sx={{ fontSize: { xs: 28, md: 32 }, color: "#C9A84C" }}
  //     />
  //   ),
  // },
  {
    title: "Contract Drafting",
    desc: "Vetting and drafting commercial agreements.",
    size: 6,
    link: '/services?tab=3',
    icon: (
      <ArticleOutlined
        sx={{ fontSize: { xs: 28, md: 32 }, color: "#C9A84C" }}
      />
    ),
  },
];

export default function ServicesGrid() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Our Services
          <Box
            component="span"
            sx={{
              display: "block",
              width: 50,
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
              <Link href={s.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    border: "1px solid #E5E0D8",
                    backgroundColor: "background.default",
                    boxShadow: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textAlign: { xs: "center", sm: "left" },
                    "&:hover": {
                      transform: { md: "translateY(-8px)" },
                      boxShadow: "0 12px 24px rgba(0,0,0,0.05)",
                      borderColor: "secondary.main",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{s.icon}</Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    {s.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" } }}
                  >
                    {s.desc}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
