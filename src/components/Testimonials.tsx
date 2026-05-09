import { FormatQuoteRounded } from "@mui/icons-material";
import { Box, Container, Typography, Grid } from "@mui/material";

const reviews = [
  {
    text: "Their domain expertise helped us maintain strong governance standards and ensure timely compliance. The team is proactive, detail-oriented, and extremely reliable.",
    name: "Harsh Patel",
    role: "Founder, Dream Next Private Limited",
  },
  {
    text: "I have known Harshit for the past 11 years, and we have worked together on several company law and corporate compliance matters. His expertise in corporate compliances, mergers & amalgamations, shareholders’ agreements, strategic investments, deposit-related issues, and listing compliances is exceptional. He possesses strong commercial understanding and a practical approach towards complex corporate matters. I would highly recommend him for company law, corporate restructuring, and regulatory compliance advisory.",
    name: "Dhairya Shah",
    role: "Advocate, IP & Commerical Law",
  },
  // {
  //   text: "Transparent, diligent, and always ahead of regulatory deadlines.",
  //   name: "Vikram Singh",
  //   role: "Founder, WealthGuard AIF",
  // },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "#0F2040", color: "white" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: { xs: 4, md: 8 },
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          What Our Clients Say
          <Box
            sx={{
              width: 60,
              height: 2,
              bgcolor: "secondary.main",
              mx: "auto",
              mt: 1.5,
            }}
          />
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {reviews.map((r, i) => (
            <Grid sx={{ xs: 12, md: 4 }} key={i}>
              <Box
                sx={{
                  position: "relative",
                  pt: { xs: 3, md: 4 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <FormatQuoteRounded
                  sx={{
                    color: "#C9A84C",
                    fontSize: { xs: 30, md: 40 },
                    position: "absolute",
                    top: 0,
                    left: { xs: "50%", md: 0 },
                    transform: { xs: "translateX(-50%)", md: "none" },
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontStyle: "italic",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {r.text}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "secondary.main",
                  }}
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
