import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <>
      <Stack
        marginTop={"70px"}
        height={"629px"}
        width={"1298px"}
        direction={"row"}
        gap={"90px"}
        paddingLeft={"50px"}
        marginLeft={"250px"}
        bgcolor={"#0E2222"}
        borderRadius={"40px"}
        padding={"40px 40px 40px"}
      >
        <Stack direction={"column"}>
          <Typography
            sx={{
              color: "white",
              textTransform: "uppercase",
              fontSize: "16px",
              fontWeight: "900",
              fontFamily: "Satoshi",
              textAlign: "start",
              marginTop: "90px",
            }}
          >
            get started
          </Typography>
          <Typography
            sx={{
              marginTop: "50px",
              color: "white",
              fontSize: "48px",
              fontWeight: "700",
              fontFamily: "Satoshi",
              width: "542px",
              height: "159px",
              textAlign: "start",
            }}
          >
            Download the App to find hundreds of books at your fingertips now.
          </Typography>
          <Typography
            sx={{
              color: "#9CC4C4",
              fontSize: "20px",
              fontWeight: "500",
              fontFamily: "Satoshi",
              height: "56px",
              width: "541px",
              marginTop: "80px",
              textAlign: "start",
            }}
          >
            Read top-tier manga, BD & fiction—and submit your own work. Join
            creator contests. Win prizes. Build your fanbase.
          </Typography>
          <Stack direction={"row"} sx={{ marginTop: "70px", gap: "25px" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                height: "52px",
                width: "180px",
                borderRadius: "8px",
              }}
            >
              <Stack direction={"row"} sx={{ bgcolor: "transparent" }}>
                <img src="./images/play.png" alt="..." />

                <Stack direction={"column"}>
                  <Typography
                    sx={{
                      color: "black",
                      bgcolor: "transparent",
                      fontSize: "12px",
                      fontWeight: "500",
                      textTransform: "none",
                    }}
                  >
                    Disponible sur
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Satoshi",
                      fontSize: "16px",
                      color: "black",
                      bgcolor: "transparent",
                      textTransform: "none",
                      fontWeight: "900",
                      marginLeft: "5px",
                    }}
                  >
                    Google Play
                  </Typography>
                </Stack>
              </Stack>
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                height: "52px",
                width: "180px",
                borderRadius: "8px",
              }}
            >
              <Stack direction={"row"} sx={{ bgcolor: "transparent" }}>
                <img
                  src="./images/apple.png"
                  alt="..."
                  style={{ left: "-25px" }}
                />

                <Stack direction={"column"}>
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      color: "black",
                      bgcolor: "transparent",
                      fontSize: "12px",
                      fontWeight: "500",
                      textTransform: "none",
                    }}
                  >
                    Télécharger sur
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: "17px",
                      fontFamily: "Satoshi",
                      fontSize: "16px",
                      color: "black",
                      bgcolor: "transparent",
                      textTransform: "none",
                      fontWeight: "900",
                    }}
                  >
                    App Store
                  </Typography>
                </Stack>
              </Stack>
            </Button>
          </Stack>
        </Stack>
        <img src="./images/dual.png" alt="..." />
      </Stack>
    </>
  );
};

export default Home;
