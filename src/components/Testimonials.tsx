"use client";
import { useRef } from "react";
import { FormatQuoteRounded, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Container, Typography, IconButton } from "@mui/material";

const reviews = [
  {
    text: "I have been associated with CS Harshit Shah since the inception of my RIA practice. He possesses a thorough understanding of SEBI RIA regulations and provides practical, implementation-oriented guidance that has been valuable in ensuring initial setup and ongoing compliance.",
    name: "Madhur Gundecha, CA, CFA",
    role: "Founder, Ligna Wealth Advisors",
  },
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
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      if (children.length > 0) {
        const cardWidth = children[0].getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(scrollRef.current).gap) || 0;
        scrollRef.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
      }
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      if (children.length > 0) {
        const cardWidth = children[0].getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(scrollRef.current).gap) || 0;
        scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
      }
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "#0F2040", color: "white", overflow: "hidden" }}>
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

        <Box
          sx={{ position: 'relative', mx: { xs: -2, md: 0 } }}
        >
          {/* Left Navigation Arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: 16, md: -24 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(4px)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
              display: 'flex'
            }}
          >
            <ChevronLeft sx={{ color: 'white' }} />
          </IconButton>

          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
              gap: { xs: 2, md: 4 },
              px: { xs: 2, md: 4 },
              py: 2,
            }}
          >
            {reviews.map((r, i) => (
              <Box
                key={i}
                sx={{
                  width: { xs: '85vw', sm: '400px', md: '450px' },
                  // maxWidth: { xs: '85vw', sm: '400px', md: '450px' },
                  flexShrink: 0,
                  position: "relative",
                  pt: { xs: 4, md: 5 },
                  pb: 3,
                  px: { xs: 3, md: 4 },
                  textAlign: "left",
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                <FormatQuoteRounded
                  sx={{
                    color: "#C9A84C",
                    fontSize: { xs: 40, md: 50 },
                    position: "absolute",
                    top: { xs: 12, md: 16 },
                    left: { xs: 16, md: 24 },
                    opacity: 0.2
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    mt: 1,
                    fontStyle: "italic",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    lineHeight: 1.7,
                    flexGrow: 1,
                  }}
                >
                  "{r.text}"
                </Typography>

                <Box sx={{ mt: 'auto' }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: "secondary.main",
                    }}
                  >
                    {r.name}
                  </Typography>

                  <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', mt: 0.5 }}>
                    {r.role}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Right Navigation Arrow */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: 16, md: -24 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(4px)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
              display: 'flex'
            }}
          >
            <ChevronRight sx={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
