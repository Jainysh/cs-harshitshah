// src/components/Footer.tsx
"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
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
            <Typography
              variant="h5"
              sx={{ fontFamily: "Playfair Display", fontWeight: 700, mb: 2 }}
            >
              CS Harshit Shah<span style={{ color: "#C9A84C" }}>.</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#6B7280", mb: 3, fontStyle: "italic" }}
            >
              Precision. Compliance. Growth.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "#C9A84C" } }}
              >
                {/* <Linkedin size={20} /> */}
              </IconButton>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "#C9A84C" } }}
              >
                {/* <Twitter size={20} /> */}
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
              <Stack
                direction="row"
                spacing={2}
                //   alignItems="center"
              >
                <Phone size={18} color="#C9A84C" />
                <Typography variant="body2" sx={{ color: "#6B7280" }}>
                  +91 98765 43210
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                //   alignItems="center"
              >
                <Mail size={18} color="#C9A84C" />
                <Typography variant="body2" sx={{ color: "#6B7280" }}>
                  contact@firmname.com
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                //   alignItems="flex-start"
              >
                <MapPin
                  size={18}
                  color="#C9A84C"
                  style={{ marginTop: "4px" }}
                />
                <Typography variant="body2" sx={{ color: "#6B7280" }}>
                  Suite 402, Professional Towers,
                  <br />
                  Bandra Kurla Complex, Mumbai - 400051
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "rgba(229, 224, 216, 0.1)" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: "#6B7280" }}>
            © {new Date().getFullYear()} [CS Harshit Shah]. All rights reserved.
          </Typography>
          <Link href="/disclaimer" style={{ textDecoration: "none" }}>
            <Typography
              variant="caption"
              sx={{ color: "#6B7280", "&:hover": { color: "white" } }}
            >
              Disclaimer
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
