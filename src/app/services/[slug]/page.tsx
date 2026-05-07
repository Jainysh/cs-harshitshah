import React from "react";
import { Box, Container, Typography, IconButton, Breadcrumbs } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { ServiceSection } from "@/components/ServiceContent";

export default async function ServiceDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  
  const resolvedSearchParams = await searchParams;
  const tab = resolvedSearchParams?.tab || "0";
  const backLink = `/services?tab=${tab}`;
  
  // Extract id from slug (format: title_id)
  const parts = slug.split("_");
  const id = parts[parts.length - 1];

  let foundSection = null;
  for (const category of servicesData) {
    const section = category.sections.find((s) => s.id === id);
    if (section) {
      foundSection = section;
      break;
    }
  }

  if (!foundSection) {
    notFound();
  }

  return (
    <Box sx={{ pt: 15, pb: 10, bgcolor: "white", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
          <Link href={backLink} passHref>
            <IconButton sx={{ color: "primary.main", bgcolor: "rgba(201, 168, 76, 0.1)", "&:hover": { bgcolor: "rgba(201, 168, 76, 0.2)" } }}>
              <ArrowBack />
            </IconButton>
          </Link>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link href={backLink} passHref style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Services
              </Typography>
            </Link>
            <Typography color="text.primary" sx={{ fontWeight: 600 }}>{foundSection.title}</Typography>
          </Breadcrumbs>
        </Box>

        <Box sx={{ py: 2 }}>
          <ServiceSection
            title={foundSection.title}
            subtitle={foundSection.subTitle}
            description={foundSection.description}
            items={foundSection.items}
          />
        </Box>
      </Container>
    </Box>
  );
}
