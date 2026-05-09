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
  const [showAnimation, setShowAnimation] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1000);
     const timer2 = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Box sx={{ pt: { xs: 12, md: 15 }, pb: { xs: 6, md: 10 }, bgcolor: "white", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography sx={{ mb: { xs: 4, md: 6 },  textAlign: "center", typography: { xs: 'h3', md: 'h2' } }}>
          <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' }, fontSize: { xs: '2rem', md: 'inherit' } }}>Our Services</Box>
          <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Our Specialized Services</Box>
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: { xs: 4, md: 6 } }}>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor="secondary"
            indicatorColor="secondary"
            sx={{
              "& .MuiTab-root": {
                fontWeight: 700,
                fontSize: { xs: "0.8rem", md: "0.9rem" },
                letterSpacing: 1,
              },
              "& .MuiTabScrollButton-root": {
                opacity: 1,
                width: 32,
                // overflow: "visible",
                transition: "all 0.3s",
                ...(showAnimation && {
                  bgcolor: "rgba(170, 146, 28, 0.3)",
                  borderRadius: "8px",
                }),
                "&.Mui-disabled": {
                  opacity: 0.2,
                  bgcolor: "transparent",
                },
                "&:not(.Mui-disabled)": {
                  color: "secondary.main",
                  animation: showAnimation ? "bounceArrow 1.2s ease-in-out infinite" : "none",
                },
              },
              "@keyframes bounceArrow": {
                "0%, 100%": { transform: "scale(1) translateX(0)", opacity: 0.75 },
                "30%": { transform: "scale(1.25) translateX(0)", opacity: 1 },
                "60%": { transform: "scale(1) translateX(0)", opacity: 0.75 },
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
    <Suspense fallback={<Box sx={{ pt: { xs: 12, md: 15 }, pb: { xs: 6, md: 10 }, bgcolor: "white", minHeight: "100vh" }}><Container maxWidth="lg" /></Box>}>
      <ServicesContent />
    </Suspense>
  );
}
