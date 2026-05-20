// src/components/Footer.tsx
"use client";
import { CompanyDetails } from "@/utils/constants";
import {
  FmdGoodOutlined,
  LinkedIn,
  MailOutlineOutlined,
  PhoneAndroidOutlined,
  X,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/services" },
  // { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#0A1628", color: "white", pt: 8, pb: 4 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Column 1: Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: 32, marginRight: 4 }}
              />
              <Typography
                variant="h5"
                sx={{ fontFamily: "Playfair Display", fontWeight: 700 }}
              >
                {CompanyDetails.proprieter}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#6B7280", mb: 3, fontStyle: "italic" }}
            >
              {CompanyDetails.tagLine}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href={CompanyDetails.linkedIn}
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "#C9A84C" } }}
              >
                <LinkedIn sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                href={CompanyDetails.twitter}
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "#C9A84C" } }}
              >
                <X sx={{ fontSize: 20 }} />
              </IconButton>
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 3, color: "#C9A84C" }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6B7280",
                      "&:hover": { color: "white" },
                      transition: "color 0.2s",
                    }}
                  >
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Contact Us */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 3, color: "#C9A84C" }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2.5}>
              <Box
                component="a"
                href={`tel:${CompanyDetails.phone}`}
                sx={{
                  display: "flex",
                  gap: 2,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover .MuiTypography-root": { color: "white" },
                }}
              >
                <PhoneAndroidOutlined sx={{ fontSize: 18, color: "#C9A84C" }} />
                <Typography variant="body2" sx={{ color: "#6B7280", transition: "color 0.2s" }}>
                  {CompanyDetails.phone}
                </Typography>
              </Box>
              <Box
                component="a"
                href={`mailto:${CompanyDetails.email}`}
                sx={{
                  display: "flex",
                  gap: 2,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover .MuiTypography-root": { color: "white" },
                }}
              >
                <MailOutlineOutlined sx={{ fontSize: 18, color: "#C9A84C" }} />
                <Typography variant="body2" sx={{ color: "#6B7280", transition: "color 0.2s" }}>
                  {CompanyDetails.email}
                </Typography>
              </Box>
              <Box
                component="a"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CompanyDetails.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  gap: 2,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover .MuiTypography-root": { color: "white" },
                }}
              >
                <FmdGoodOutlined sx={{ fontSize: 18, color: "#C9A84C" }} />
                <Typography variant="body2" sx={{ color: "#6B7280", transition: "color 0.2s" }}>
                  {CompanyDetails.address}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(229, 224, 216, 0.1)" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: "#6B7280" }}>
            © {new Date().getFullYear()} {CompanyDetails.proprieter}. All rights reserved.
          </Typography>
          {/* <Link href="/disclaimer" style={{ textDecoration: "none" }}>
            <Typography
              variant="caption"
              sx={{ color: "#6B7280", "&:hover": { color: "white" } }}
            >
              Disclaimer
            </Typography>
          </Link> */}
        </Box>
      </Container>
    </Box>
  );
}
