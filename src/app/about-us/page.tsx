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
    icon: <FlagOutlined sx={{ fontSize: 24 }} />,
    title: "Client First",
    desc: "Your business priorities are at the heart of everything we do.",
  },
  {
    icon: <Diamond sx={{ fontSize: 24 }} />,
    title: "Value Driven",
    desc: "Every engagement is focused on delivering meaningful outcomes.",
  },
  {
    icon: <GppGoodOutlined sx={{ fontSize: 24 }} />,
    title: "Zero Tolerance",
    desc: "An uncompromising stance on non-compliance.",
  },
  {
    icon: <CheckCircleOutlineOutlined sx={{ fontSize: 24 }} />,
    title: "Integrity & Independence",
    desc: "Honest counsel, free from conflict, every time.",
  },
];

export default function AboutUs() {
  return (
    <Box sx={{ pt: 15, pb: 10, bgcolor: "white" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Typography variant="h2" sx={{ mb: 6, position: "relative" }}>
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

        <Grid container spacing={8}>
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
              Commerce Graduate from the University of Ahmedabad, bringing over
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
            <Grid container spacing={2}>
              {expertise.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    //   alignItems="flex-start"
                  >
                    <Box sx={{ color: "secondary.main", mt: 0.5 }}>•</Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
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
                p: 6,
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
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                “Sustainable business growth is driven not merely by financial
                performance, but by disciplined compliance, ethical conduct, and
                adherence to core principles.”
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 12, borderColor: "#E5E0D8" }} />

        {/* Vision & Mission */}
        <Grid container spacing={6} sx={{ mb: 12 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction="row" spacing={3}>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  p: 2,
                  color: "white",
                  height: "fit-content",
                }}
              >
                <VisibilityOutlined />
              </Box>
              <Box>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  To be a trusted advisory partner for businesses by delivering
                  reliable and value-driven professional services.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction="row" spacing={3}>
              <Box
                sx={{
                  bgcolor: "secondary.main",
                  p: 2,
                  color: "white",
                  height: "fit-content",
                }}
              >
                <FlagOutlined />
              </Box>
              <Box>
                <Typography variant="h4" sx={{ mb: 2 }}>
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
            sx={{ mb: 8, color: "white" }}
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
