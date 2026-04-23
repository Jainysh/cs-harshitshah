// src/components/BlogsCarousel.tsx
"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Link from "next/link";

const blogs = [
  {
    category: "SEBI Compliance",
    title: "New Amendments in AIF Regulations 2024",
    date: "Oct 12, 2025",
  },
  {
    category: "Corporate Law",
    title: "Navigating MCA V3 Portal: A Practitioner’s Guide",
    date: "Oct 05, 2025",
  },
  {
    category: "Startups",
    title: "Key Compliance Checklists for Early Stage Funding",
    date: "Sep 28, 2025",
  },
];

export default function BlogsCarousel() {
  return (
    <Box sx={{ py: 12, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 6 }}>
          Latest Insights
        </Typography>
        <Grid container spacing={3}>
          {blogs.map((blog, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <Card
                sx={{
                  borderRadius: 0,
                  border: "1px solid #E5E0D8",
                  boxShadow: "none",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "secondary.main",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    {blog.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ my: 2, fontFamily: "Playfair Display" }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.muted"
                    // display="block"
                    sx={{ mb: 2 }}
                  >
                    {blog.date}
                  </Typography>
                  <Button
                    component={Link}
                    href="#"
                    sx={{ p: 0, color: "primary.main", fontWeight: 700 }}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          // textAlign="center"
          sx={{ mt: 6 }}
        >
          <Button
            component={Link}
            href="/blogs"
            variant="text"
            sx={{
              color: "text.primary",
              borderBottom: "1px solid #C9A84C",
              borderRadius: 0,
            }}
          >
            View All Blogs →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
