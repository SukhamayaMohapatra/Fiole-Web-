import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${"./images/HeroBg.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          height: "90rem",
          backgroundSize: "contain",
          marginTop: "115px",
        }}
      >
        <Box sx={{ width: "100%", height: "48px", bgcolor: "#223A3A" }}>
          <Stack direction={"row"}>
            <Typography
              sx={{
                color: "#639393",
                fontSize: "16px",
                fontWeight: "500",
                marginTop: "15px",
                marginLeft: "70px",
              }}
            >
              1/2
            </Typography>
            <Stack direction={"row"}>
              <EmojiEventsIcon
                sx={{
                  color: "#FFE32D",
                  marginTop: "15px",
                  marginLeft: "570px",
                }}
              />
              <Typography
                sx={{
                  marginTop: "15px",
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#FFE32D",
                  marginLeft: "5px",
                }}
              >
                Win a professional publishing contract and distribution in
                bookstores!
              </Typography>
              <Typography
                sx={{
                  marginTop: "15px",
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "white",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
              >
                Participate now !
              </Typography>
            </Stack>
            <KeyboardArrowRightIcon
              sx={{ marginTop: "15px", marginLeft: "530px", color: "white" }}
            />
          </Stack>
        </Box>
        <Typography
          fontFamily={"satoshi"}
          fontWeight={"900"}
          fontSize={"16px"}
          textTransform={"uppercase"}
          color="#FFFFFF"
          paddingTop={"80px"}
        >
          Welcome to FIOLE
        </Typography>
        <Typography
          height={"178px"}
          width={"916px"}
          fontFamily={"satoshi"}
          fontWeight={"700"}
          fontSize={"64px"}
          textTransform={"none"}
          color="#00CFCC"
          paddingTop={"15px"}
          paddingLeft={"480px"}
          textAlign={"center"}
          justifyContent={"center"}
        >
          Discover Books & Stories. Earn Rewards.
        </Typography>
        <Typography
          height={"56px"}
          width={"748px"}
          fontFamily={"satoshi"}
          fontWeight={"500"}
          fontSize={"20px"}
          textTransform={"none"}
          color="#FFFFFF"
          paddingTop={"40px"}
          paddingLeft={"560px"}
          textAlign={"center"}
        >
          Read top-tier manga, BD & fiction—and submit your own work. Join
          creator contests. Win prizes. Build your fanbase.
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"16px"}
          marginTop={"20px"}
        >
          <Button
            variant="outlined"
            sx={{
              width: "309px",
              height: "52px",
              textTransform: "none",
              borderRadius: "68px",
              color: "#00CFCC",
            }}
          >
            Browse our Books collection
            <OutboundOutlinedIcon
              sx={{ color: "#00CFCC", marginLeft: "8px" }}
            />
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "209px",
              height: "52px",
              borderRadius: "68px",
              textTransform: "none",
              bgcolor: "#00CFCC",
              color: "#FFFFFF",
            }}
          >
            Download App
            <OutboundOutlinedIcon sx={{ color: "white", marginLeft: "8px" }} />
          </Button>
        </Stack>

        <Stack
          direction={"row"}
          marginTop={"200px"}
          gap={"25px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src="./images/mobile1.png" alt="..." />
          <img src="./images/mobile3.png" alt="..." />
          <img src="./images/mobile2.png" alt="..." />
        </Stack>
      </Box>
    </>
  );
};

export default HeroSection;
