import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceTileProps {
  title: string;
  description?: string;
  imageUrl: string;
  link: string;
}

export default function ServiceTile({
  title,
  description,
  imageUrl,
  link,
}: ServiceTileProps) {
  return (
    <Box
      component={motion.div}
      whileHover="hover"
      initial="rest"
      sx={{
        position: "relative",
        height: { xs: "300px", md: "400px" },
        width: "100%",
        overflow: "hidden",
        borderRadius: "2px", // Sharper professional corners
        display: "flex",
        alignItems: "flex-end",
        cursor: "pointer",
        border: "1px solid rgba(201, 168, 76, 0.2)", // Subtle gold border
      }}
    >
      {/* Background Image with Motion */}
      <Box
        component={motion.div}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />

      {/* Gradient Overlay (Deep Navy to Transparent) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to top, rgba(15, 32, 64, 0.95) 0%, rgba(15, 32, 64, 0.4) 50%, rgba(15, 32, 64, 0.1) 100%)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <Stack
        spacing={2}
        sx={{
          position: "relative",
          zIndex: 3,
          p: { xs: 3, md: 4 },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontFamily: "Playfair Display",
            fontWeight: 600,
            textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
            typography: { xs: "h5", md: "h4" },
          }}
        >
          {title}
        </Typography>

        {description && (
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "90%",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
        )}

        <Box>
          <Button
            component={Link}
            href={link}
            variant="text"
            endIcon={<KeyboardArrowRight sx={{ fontSize: 18 }} />}
            sx={{
              color: "#C9A84C", // Secondary Gold
              p: 0,
              fontWeight: 700,
              letterSpacing: 1,
              "&:hover": {
                bgcolor: "transparent",
                color: "white",
                "& .MuiButton-endIcon": { transform: "translateX(5px)" },
              },
              "& .MuiButton-endIcon": { transition: "transform 0.2s" },
            }}
          >
            KNOW MORE
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
