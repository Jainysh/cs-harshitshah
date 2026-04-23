// src/components/Testimonials.tsx
import { Box, Container, Typography, Grid } from "@mui/material";
import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Their understanding of SEBI regulations is unparalleled. They made our compliance transition seamless.",
    name: "Rajesh Mehta",
    role: "CEO, FinTech Solutions",
  },
  {
    text: "A highly professional team that understands the nuances of Indian Corporate Law.",
    name: "Anjali Sharma",
    role: "Legal Head, Global Ventures",
  },
  {
    text: "Transparent, diligent, and always ahead of regulatory deadlines.",
    name: "Vikram Singh",
    role: "Founder, WealthGuard AIF",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: 12, bgcolor: "#0F2040", color: "white" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ mb: 8, textAlign: "center", position: "relative" }}
        >
          What Our Clients Say
          <Box
            sx={{
              width: 80,
              height: 2,
              bgcolor: "secondary.main",
              mx: "auto",
              mt: 2,
            }}
          />
        </Typography>
        <Grid container spacing={4}>
          {reviews.map((r, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <Box sx={{ position: "relative", pt: 4 }}>
                <Quote
                  size={40}
                  color="#C9A84C"
                  style={{
                    opacity: 0.5,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontStyle: "italic",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {r.text}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, color: "secondary.main" }}
                >
                  {r.name}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  {r.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
