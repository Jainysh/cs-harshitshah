// src/app/services/page.tsx
"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Box, Container, Typography, Tabs, Tab, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { ServiceSection } from "@/components/ServiceContent";
import ServiceTile from "@/components/ServiceTile";

const ServicesContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get("tab");
  const initialTab = tabParam ? parseInt(tabParam, 10) : 0;

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (tabParam) {
      setActiveTab(parseInt(tabParam, 10));
    } else {
      setActiveTab(0);
    }
  }, [tabParam]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    router.replace(`${pathname}?tab=${newValue}`, { scroll: false });
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
              {servicesData[activeTab].sections.length < 3 ? (
                servicesData[activeTab].sections.map((section, idx) => (
                  <ServiceSection
                    key={idx}
                    title={section.title}
                    subtitle={section.subTitle}
                    description={section.description}
                    items={section.items}
                  />
                ))
              ) : (
                <Grid container spacing={{ xs: 2, md: 4 }}>
                  {servicesData[activeTab].sections.map((section, idx) => (
                    <Grid size={{ xs: 12, md: 6 }} key={idx}>
                      <ServiceTile
                        title={section.title}
                        description={section.description}
                        imageUrl={section.imageUrl || ""}
                        link={`/services/${section.title.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase().replace(/^-|-$/g, "")}_${section.id}?tab=${activeTab}`}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<Box sx={{ pt: 15, pb: 10, bgcolor: "white", minHeight: "100vh" }}><Container maxWidth="lg" /></Box>}>
      <ServicesContent />
    </Suspense>
  );
}
