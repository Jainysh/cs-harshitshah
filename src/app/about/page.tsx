// src/app/about-us/page.tsx
"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  CheckCircleOutlineOutlined,
  Diamond,
  FlagOutlined,
  GppGoodOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { CompanyDetails } from "@/utils/constants";

const expertise = [
  "Advisory on SEBI Intermediary compliances & Audit (IA, RA, PMS, AIF)",
  "Incorporation of Companies & LLPs",
  "Secretarial Services & Corporate Governance",
  "Corporate Fund Raising & Due Diligence",
  "Start-up Support & Business Advisory",
  "Closure of Companies & LLPs",
  "Contract Drafting",
  "Trademark Filing",
];

const values = [
  {
    icon: <FlagOutlined sx={{ fontSize: 30 }} />,
    title: "Client First",
    desc: "Your business priorities are at the heart of everything we do.",
  },
  {
    icon: <Diamond sx={{ fontSize: 30 }} />,
    title: "Value Driven",
    desc: "Every engagement is focused on delivering meaningful outcomes.",
  },
  {
    icon: <GppGoodOutlined sx={{ fontSize: 30 }} />,
    title: "Zero Tolerance",
    desc: "An uncompromising stance on non-compliance.",
  },
  {
    icon: <CheckCircleOutlineOutlined sx={{ fontSize: 30 }} />,
    title: "Integrity & Independence",
    desc: "Honest counsel, free from conflict, every time.",
  },
];

export default function AboutUs() {
  return (
    <Box sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 6, md: 10 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Typography variant="h2" sx={{ mb: { xs: 4, md: 6 }, fontSize: { xs: "2rem", md: "3.75rem" }, position: "relative" }}>
            Professional Profile
            <Box
              component="span"
              sx={{
                display: "block",
                width: 80,
                height: 4,
                bgcolor: "secondary.main",
                mt: 2,
              }}
            />
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 4, md: 8 }}>
          {/* Biography Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                mb: 4,
                color: "primary.main",
                fontWeight: 500,
              }}
            >
              {CompanyDetails.proprieter} is a Qualified Company Secretary and
              Commerce Graduate from the University of Gujarat, bringing over
              a decade of extensive experience in Corporate Laws, SEBI
              Regulations, and Strategic Business Advisory.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              His practice is built on a commitment to precision, compliance,
              and delivering meaningful value to every client he serves. He
              offers a comprehensive suite of specialized, multi-disciplinary
              professional services tailored to meet the evolving needs of
              modern businesses.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
              Areas of Expertise
            </Typography>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {expertise.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 2,
                      height: "100%",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        borderColor: "secondary.main",
                        bgcolor: "rgba(170, 146, 28, 0.04)",
                        transform: "translateY(-2px)"
                      },
                      alignItems: 'flex-start'
                    }}
                  >
                    <CheckCircleOutlineOutlined
                      sx={{
                        color: "secondary.main",
                        fontSize: 22,
                        mt: 0.2,
                        flexShrink: 0
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        color: "text.primary",
                        lineHeight: 1.5
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Quote & Decorative Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                p: { xs: 3, sm: 4, md: 6 },
                bgcolor: "background.paper",
                border: "1px solid #E5E0D8",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Playfair Display",
                  fontStyle: "italic",
                  color: "primary.main",
                  lineHeight: { xs: 1.4, md: 1.6 },
                  textAlign: "center",
                  fontSize: { xs: "1.25rem", sm: "1.75rem", md: "1.75rem" }
                }}
              >
                “Sustainable business growth is driven not merely by financial
                performance, but by disciplined compliance, ethical conduct, and
                adherence to core principles.”
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 6, md: 12 }, borderColor: "#E5E0D8" }} />

        {/* Vision & Mission */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 6, md: 12 }, alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction="row" spacing={{ xs: 2, md: 3 }} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  p: { xs: 2.5, md: 3 },
                  color: "white",
                  display: 'flex',
                  borderRadius: '12px'
                }}
              >
                <VisibilityOutlined sx={{ fontSize: { xs: 28, md: 32 } }} />
              </Box>
              <Box>
                <Typography variant="h4" sx={{ mb: { xs: 1.5, md: 2 }, fontSize: { xs: "1.75rem", md: "2.125rem" } }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  To be a trusted advisory partner for businesses by delivering
                  reliable and value-driven professional services.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ borderTop: { xs: "1px solid #AA921C", md: "none" }, pt: { xs: 4, md: 0 } }}>
            <Stack direction="row" spacing={{ xs: 2, md: 3 }} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  bgcolor: "secondary.main",
                  p: { xs: 2.5, md: 3 },
                  color: "white",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '12px'
                }}
              >
                <FlagOutlined sx={{ fontSize: { xs: 28, md: 32 } }} />
              </Box>
              <Box>
                <Typography variant="h4" sx={{ mb: { xs: 1.5, md: 2 }, fontSize: { xs: "1.75rem", md: "2.125rem" } }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  To simplify regulatory complexities and provide strategic
                  insights that help businesses grow responsibly and
                  sustainably.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Core Values */}
        <Box
          sx={{ bgcolor: "primary.main", p: { xs: 4, md: 8 }, color: "white" }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: { xs: 4, md: 8 }, fontSize: { xs: "2rem", md: "3rem" }, color: "white" }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((val, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Stack
                    spacing={2}
                    sx={{ alignItems: "center", textAlign: "center" }}
                  >
                    <Box sx={{ color: "secondary.main" }}>{val.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {val.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {val.desc}
                    </Typography>
                  </Stack>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
