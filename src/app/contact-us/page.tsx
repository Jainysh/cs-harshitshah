// src/app/contact-us/page.tsx
"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  IconButton,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  X,
  LinkedIn,
  FmdGoodOutlined,
  MailOutlineOutlined,
  PhoneAndroidOutlined,
  SendOutlined,
  WhatsApp,
} from "@mui/icons-material";
import { CompanyDetails } from "@/utils/constants";

const countryCodes = [
  { code: "+91", label: "🇮🇳 India" },
  // { code: "+1", label: "🇺🇸 USA" },
  // { code: "+44", label: "🇬🇧 UK" },
  // { code: "+971", label: "🇦🇪 UAE" },
];

export default function ContactUs() {
  const [countryCode, setCountryCode] = useState("+91");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    phone: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with country code:", e.target);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", company: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 15 },
        pb: { xs: 6, md: 10 },
        minHeight: "100vh",
        position: "relative",
        backgroundImage: "url(/homepage/contact-bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(15,32,64,0.78) 0%, rgba(15,32,64,0.65) 60%, rgba(15,32,64,0.55) 100%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }}>
          {/* Section 1: Let's meet over coffee */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                sx={{
                  mb: { xs: 4, md: 6 },
                  textAlign: "center",
                  typography: { xs: "h3", md: "h2" },
                  color: "white",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: { xs: "inline", sm: "none" },
                    fontSize: { xs: "2rem", md: "inherit" },
                  }}
                >
                  Let&apos;s meet ☕️
                </Box>
                <Box
                  component="span"
                  sx={{ display: { xs: "none", sm: "inline" } }}
                >
                  Let&apos;s meet over coffee
                </Box>
              </Typography>

              <Stack spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
                <Box
                  component="a"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CompanyDetails.address)}`}
                  target="_blank"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover p": { color: "#C9A84C" },
                  }}
                >
                  <FmdGoodOutlined sx={{ fontSize: 24, color: "#C9A84C" }} />
                  <Typography
                    variant="body1"
                    sx={{
                      transition: "color 0.2s",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {CompanyDetails.address}
                  </Typography>
                </Box>

                {/* Email */}
                <Box
                  component="a"
                  href={`mailto:${CompanyDetails.email}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover p": { color: "#C9A84C" },
                  }}
                >
                  <MailOutlineOutlined
                    sx={{ fontSize: 24, color: "#C9A84C" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {CompanyDetails.email}
                  </Typography>
                </Box>

                {/* Phone */}
                <Box
                  component="a"
                  href={`tel:${CompanyDetails.phone}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover p": { color: "#C9A84C" },
                  }}
                >
                  <PhoneAndroidOutlined
                    sx={{ fontSize: 24, color: "#C9A84C" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {CompanyDetails.phone}
                  </Typography>
                </Box>

                {/* Socials */}
                <Stack
                  direction="row"
                  spacing={{ xs: 2.5 }}
                  sx={{
                    pt: { xs: 3, sm: 5 },
                    justifyContent: { xs: "space-evenly", sm: "flex-start" },
                  }}
                >
                  <IconButton
                    component="a"
                    href={CompanyDetails.whatsapp}
                    target="_blank"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.12)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.25)",
                      "&:hover": { bgcolor: "#C9A84C", borderColor: "#C9A84C" },
                    }}
                  >
                    <WhatsApp />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={CompanyDetails.linkedIn}
                    target="_blank"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.12)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.25)",
                      "&:hover": { bgcolor: "#C9A84C", borderColor: "#C9A84C" },
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={CompanyDetails.twitter}
                    target="_blank"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.12)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.25)",
                      "&:hover": { bgcolor: "#C9A84C", borderColor: "#C9A84C" },
                    }}
                  >
                    <X />
                  </IconButton>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          {/* Section 2: Reach out to us (The Form) */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 6 },
                  border: "1px solid #E5E0D8",
                  bgcolor: "#F7F5F0",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1,
                    fontSize: { xs: "1.7rem", md: "1.5rem" },
                  }}
                >
                  💡Enquiry? We are here.
                </Typography>
                {/* <Typography
                  variant="body2"
                  sx={{
                    mb: 4,
                    color: "text.secondary",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Let&apos;s get to know each other
                </Typography> */}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="standard"
                        value={form.name}
                        onChange={handleChange}
                        name="name"
                        required
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="standard"
                        value={form.email}
                        onChange={handleChange}
                        name="email"
                        required
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "end" }}
                      >
                        <TextField
                          select
                          variant="standard"
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          sx={{ width: "100px" }}
                        >
                          {countryCodes.map((option) => (
                            <MenuItem key={option.code} value={option.code}>
                              {option.code}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          fullWidth
                          label="Contact Number"
                          variant="standard"
                          required
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </Stack>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        variant="standard"
                        value={form.company}
                        onChange={handleChange}
                        name="company"
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="standard"
                        multiline
                        rows={4}
                        required
                        value={form.message}
                        onChange={handleChange}
                        name="message"
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        variant="contained"
                        size="large"
                        endIcon={<SendOutlined sx={{ fontSize: 18 }} />}
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          px: 6,
                          py: 1.5,
                          "&:hover": { bgcolor: "secondary.main" },
                        }}
                      >
                        {status === "loading" ? "Sending..." : "Submit"}
                      </Button>
                      {status === "success" && (
                        <Typography
                          variant="body2"
                          color="success.main"
                          sx={{ mt: 1 }}
                        >
                          Message sent! We&apos;ll get back to you soon.
                        </Typography>
                      )}
                      {status === "error" && (
                        <Typography
                          variant="body2"
                          color="error.main"
                          sx={{ mt: 1 }}
                        >
                          Something went wrong. Please try again.
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
