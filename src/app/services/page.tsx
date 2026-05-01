// src/app/services/page.tsx
"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Tabs, Tab } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/data/servicesData";
import { ServiceSection } from "@/components/ServiceContent";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ pt: 15, pb: 10, bgcolor: "white", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, textAlign: "center" }}>
          Our Specialized Services
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            centered
            textColor="secondary"
            indicatorColor="secondary"
            sx={{
              "& .MuiTab-root": {
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: 1,
              },
            }}
          >
            {servicesData.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ py: 4 }}>
              {servicesData[activeTab].sections.map((section, idx) => (
                <ServiceSection
                  key={idx}
                  title={section.title}
                  subtitle={section.subTitle}
                  description={section.description}
                  items={section.items}
                />
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
