"use client";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Disclaimer() {
  return (
    <Box sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 6, md: 10 }, bgcolor: "white", minHeight: "60vh" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: { xs: 4, md: 6 },
              pt: 2,
              fontSize: { xs: "2rem", md: "3.5rem" },
              position: "relative",
            }}
          >
            Disclaimer
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

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            The information and contents published on this website is for general informational purposes only and shall not be construed as legal advice or opinion, Tax Advice, regulatory advice or investment advice.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            While every effort has been made to ensure that the information on this website is accurate and up to date, we make no representations or warranties, express or implied, regarding the completeness, accuracy, or reliability of the content or information. Laws and regulations are subject to change. Users are advised to independently verify the accuracy and completeness before acting on any information contained in this website.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            We shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of, or reliance on the information contained on this website.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            The contents of the website shall not be copied, reproduced, or used for any commercial benefit, whether fully or partially, without prior written consent.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
