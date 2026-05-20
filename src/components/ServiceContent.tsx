// src/components/ServiceContent.tsx
import { CheckCircle } from "@mui/icons-material";
import { Box, Typography, Stack, Grid } from "@mui/material";

interface SectionProps {
  title: string;
  description: string;
  subtitle?: string;
  items: string[] | { label: string; subItems: string[] }[];
}

export const ServiceSection = ({
  title,
  subtitle,
  description,
  items,
}: SectionProps) => (
  <Box sx={{ mb: { xs: 5, md: 8 } }}>
    <Typography
      sx={{
        fontFamily: "Playfair Display",
        mb: 3,
        color: "primary.main",
        typography: { xs: "h5", md: "h4" },
        fontWeight: 600,
        position: "relative",
      }}
    >
      {title}
      <Box
        component="span"
        sx={{
          display: "block",
          width: 60,
          height: 4,
          bgcolor: "secondary.main",
          mt: 1.5,
          borderRadius: 1,
        }}
      />
    </Typography>
    {/* {subtitle && (
      <Typography sx={{ mb: 2, color: "text.secondary", typography: { xs: "subtitle1", md: "h6" } }}>
        {subtitle}
      </Typography>
    )} */}
    <Typography
      variant="body1"
      sx={{ mb: 3, color: "text.secondary", maxWidth: "800px" }}
    >
      {description}
    </Typography>
    <Grid container spacing={2}>
      {items.map((item, idx) => (
        <Grid size={{ xs: 12, sm: 6 }} key={idx}>
          {typeof item === "string" ? (
            <Stack
              direction="row"
              spacing={1.5}
              sx={{ alignItems: "flex-start" }}
            >
              <CheckCircle
                sx={{ color: "#C9A84C", fontSize: "18px" }}
                style={{ marginTop: "4px", flexShrink: 0 }}
              />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {item}
              </Typography>
            </Stack>
          ) : (
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: "primary.main" }}>
                {item.label}
              </Typography>
              <Stack direction="column" spacing={1} sx={{ pl: 3 }}>
                {item.subItems.map((subItem, subIdx) => (
                  <Stack
                    key={subIdx}
                    direction="row"
                    spacing={1.5}
                    sx={{ alignItems: "flex-start" }}
                  >
                    <CheckCircle
                      sx={{ color: "#C9A84C", fontSize: "18px" }}
                      style={{ marginTop: "4px", flexShrink: 0 }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {subItem}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  </Box>
);
