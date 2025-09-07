import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div>
      <AppBar
        sx={{
          height: "117px",
          width: "100%",
          bgcolor: "black",
        }}
      >
        <Toolbar
          sx={{
            padding: "32px 80px 32px 80px",
            gap: "8px",
            justifyContent: "space-between",
          }}
        >
          <Stack direction={"row"}>
            <Typography fontFamily={"satoshi"} marginLeft={"50px"}>
              <img src="./images/Logo.png" alt="..." />
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              gap={"48px"}
              marginLeft={"430px"}
              marginRight={"430px"}
              marginTop={"15px"}
            >
              <Typography
                fontFamily={"satoshi"}
                color="#85C6C5"
                fontSize={"16px"}
                fontWeight={"500"}
              >
                About Us
              </Typography>
              <Typography
                fontFamily={"satoshi"}
                color="#85C6C5"
                fontSize={"16px"}
                fontWeight={"500"}
              >
                Browse books
              </Typography>
              <Typography
                fontFamily={"satoshi"}
                color="#85C6C5"
                fontSize={"16px"}
                fontWeight={"500"}
              >
                Pricing
              </Typography>
              <Typography
                fontFamily={"satoshi"}
                color="#85C6C5"
                fontSize={"16px"}
                fontWeight={"500"}
              >
                FAQ
              </Typography>
              <Typography
                fontFamily={"satoshi"}
                color="#85C6C5"
                fontSize={"16px"}
                fontWeight={"500"}
              >
                Blogs
              </Typography>
              <Typography
                fontFamily={"satoshi"}
                color="#85C6C5"
                fontSize={"16px"}
                fontWeight={"500"}
              >
                {" "}
                Contact Us
              </Typography>
            </Stack>
            <Button
              sx={{
                bgcolor: "#00ACA9",
                color: "white",
                borderRadius: "68px",
                textTransform: "none",
                height: "52px",
                width: "175px",
                fontWeight: "700",
                fontSize: "16px",
                fontFamily: "satoshi",
              }}
            >
              Download App
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
