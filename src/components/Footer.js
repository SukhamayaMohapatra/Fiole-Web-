import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "linear-gradient(to top,#113534,#0A1212)",
          height: "706px",
          width: "1440px",
          padding: "40px 80px 40px 80px",
          marginLeft: "150px",
        }}
      >
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <Typography
              sx={{
                fontFamily: "Satoshi",
                fontSize: "24px",
                fontWeight: "900",
                color: "white",
                textTransform: "uppercase",
                height: "68px",
                width: "330px",
                textAlign: "start",
              }}
            >
              Subscribe to Our news letter
            </Typography>
            <TextField
              placeholder="Enter Your Email id"
              sx={{
                marginTop: "20px",
                gap: "32px",
                width: "321px",
                height: "52px",
                borderRadius: "78px",
                border: "1px solid #7F7F7F",
                paddingLeft: "16px",
                "& .MuiInputBase-input::placeholder": {
                  color: "#C9C9C9",
                  opacity: 1,
                  fontSize: "14px",
                  fontWeight: "500",
                  position: "absolute",
                  top: 17,
                },
                "& fieldset": {
                  border: "none",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      sx={{
                        width: "152px",
                        height: "52px",
                        bgcolor: "#B78A08",
                        color: "white",
                        textTransform: "none",
                        borderRadius: "68px",
                        position: "absolute",
                        right: "0",
                        top: 0,
                      }}
                    >
                      Subscribe
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack direction={"column"} sx={{ marginLeft: "400px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "900",
                fontFamily: "Satoshi",
                color: "#72D6D2",
                marginBottom: "20px",
              }}
            >
              Download App
            </Typography>
            <Stack direction={"row"} gap={"25px"} sx={{ marginLeft: "220px" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  width: "150px",
                  height: "42px",
                }}
              >
                <Stack direction={"row"}>
                  <img
                    src="./images/play.png"
                    alt="..."
                    style={{ height: "25px", width: "25px", marginTop: "5px" }}
                  />
                  <Stack direction={"column"} sx={{ marginLeft: "12px" }}>
                    <Typography
                      sx={{
                        width: "91px",
                        height: "18px",
                        fontFamily: "Satoshi",
                        textAlign: "start",
                        fontSize: "12px",
                      }}
                    >
                      Get it on
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "start",
                        width: "91px",
                        height: "18px",
                        textTransform: "none",
                        fontFamily: "Satoshi",
                        fontSize: "16px",
                        fontWeight: "900",
                        paddingBottom: "7px",
                      }}
                    >
                      Google play
                    </Typography>
                  </Stack>
                </Stack>
              </Button>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  width: "150px",
                  height: "42px",
                }}
              >
                <Stack direction={"row"}>
                  <img
                    src="./images/apple.png"
                    alt="..."
                    style={{ height: "25px", width: "25px", marginTop: "5px" }}
                  />
                  <Stack direction={"column"} sx={{ marginLeft: "12px" }}>
                    <Typography
                      sx={{
                        width: "91px",
                        height: "18px",
                        fontFamily: "Satoshi",
                        textAlign: "start",
                        fontSize: "12px",
                        textTransform: "none",
                      }}
                    >
                      Download on the
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "start",
                        width: "91px",
                        height: "18px",
                        textTransform: "none",
                        fontFamily: "Satoshi",
                        fontSize: "16px",
                        fontWeight: "900",
                        paddingBottom: "7px",
                      }}
                    >
                      Apple Store
                    </Typography>
                  </Stack>
                </Stack>
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Divider
          sx={{
            border: "1px solid #12403F",
            marginTop: "35px",
            marginBottom: "35px",
          }}
        />
        <Stack direction={"row"} gap={"24px"}>
          <ul
            style={{
              listStyle: "none",
              textAlign: "start",
              fontFamily: "Satoshi",
              fontSize: "16px",
              fontWeight: "900",
            }}
          >
            <li style={{ color: "#72D6D2" }}>About</li>
            <li style={{ color: "white", marginTop: "12px" }}>About Fiole</li>
            <li style={{ color: "white", marginTop: "12px" }}>Blog</li>
            <li style={{ color: "white", marginTop: "12px" }}>Contact Us</li>
            <li style={{ color: "white", marginTop: "12px" }}>FAQ</li>
          </ul>

          <ul
            style={{
              marginLeft: "150px",
              listStyle: "none",
              textAlign: "start",
              fontFamily: "Satoshi",
              fontSize: "16px",
              fontWeight: "900",
            }}
          >
            <li style={{ color: "#72D6D2" }}>Fiole</li>
            <li style={{ color: "white", marginTop: "12px" }}>Browse Books</li>
            <li style={{ color: "white", marginTop: "12px" }}>Contests</li>
            <li style={{ color: "white", marginTop: "12px" }}>Pricing</li>
          </ul>

          <ul
            style={{
              marginLeft: "120px",
              listStyle: "none",
              textAlign: "start",
              fontFamily: "Satoshi",
              fontSize: "16px",
              fontWeight: "900",
            }}
          >
            <li style={{ color: "#72D6D2" }}>Legal</li>
            <li style={{ color: "white", marginTop: "12px" }}>Terms</li>
            <li style={{ color: "white", marginTop: "12px" }}>Privacy</li>
            <li style={{ color: "white", marginTop: "12px" }}>
              Rules of Contest
            </li>
            <li style={{ color: "white", marginTop: "12px" }}>
              Publication Contract
            </li>
            <li style={{ color: "white", marginTop: "12px" }}>
              Protection of Personal Data
            </li>
            <li style={{ color: "white", marginTop: "12px" }}>CGU</li>
            <li style={{ color: "white", marginTop: "12px" }}>Legal Notices</li>
            <li style={{ color: "white", marginTop: "12px" }}>Subscriptions</li>
          </ul>

          <ul
            style={{
              marginLeft: "70px",
              listStyle: "none",
              textAlign: "start",
              fontFamily: "Satoshi",
              fontSize: "16px",
              fontWeight: "900",
            }}
          >
            <li style={{ color: "#72D6D2" }}>Social</li>
            <li style={{ color: "white", marginTop: "12px" }}>Instagram</li>
            <li style={{ color: "white", marginTop: "12px" }}>Facebook</li>
            <li style={{ color: "white", marginTop: "12px" }}>TikTok</li>
          </ul>

          <ul
            style={{
              marginLeft: "150px",
              listStyle: "none",
              textAlign: "start",
              fontFamily: "Satoshi",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <li style={{ color: "#72D6D2" }}>Contact</li>

            <li
              style={{
                color: "white",
                marginTop: "12px",
                width: "201px",
                height: "66px",
              }}
            >
              <Stack direction={"row"}>
                <img
                  src="./images/Vector2.png"
                  alt="..."
                  style={{ marginRight: "5px", width: "21px", height: "20px" }}
                />
                37 Rue du général de Gaulle • Châtenois-les-Forges, 90700 •
                France
              </Stack>
            </li>

            <li style={{ color: "white", marginTop: "12px" }}>
              <Stack direction={"row"}>
                <img
                  src="./images/Vector3.png"
                  alt="..."
                  style={{ marginRight: "8px", width: "20px", height: "15px" }}
                />
                service-fiole@fiole.app
              </Stack>
            </li>
          </ul>
        </Stack>
        <Divider
          sx={{
            border: "1px solid #12403F",
            marginTop: "35px",
            marginBottom: "35px",
          }}
        />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            sx={{
              fontFamily: "Satoshi",
              fontSize: "16px",
              fontWeight: "500",
              color: "white",
            }}
          >
            {" "}
            All Copyright Reserved
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              width: "225px",
              height: "52px",
              borderRadius: "78px",
              border: "1px solid #7F7F7F",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                bgcolor: "transparent",
                color: "#C9C9C9",
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Satoshi",
                marginTop: "15px",
                marginLeft: "30px",
              }}
            >
              English
            </Typography>
            <KeyboardArrowDownIcon
              sx={{
                color: "white",
                marginRight: "30px",
                fontSize: "large",
                marginTop: "16px",
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
