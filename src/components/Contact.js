import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          height: "500px",
          width: "1294px",
          bgcolor: "black",
          marginTop: "100px",
          marginLeft: "300px",
        }}
      >
        <Box
          sx={{
            width: "1291px",
            height: "420px",
            backgroundImage: "linear-gradient(#0C2A29,#00CFCC)",
            borderRadius: "40px",
            position: "relative",
            marginTop: "100px",
          }}
        >
          <Stack direction={"row"}>
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "40px",
                  fontWeight: "900",
                  marginTop: "50px",
                  textTransform: "uppercase",
                }}
              >
                Get in touch
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "20px",
                  textTransform: "none",
                  marginLeft: "40px",
                  height: "84px",
                  width: "330px",
                  textAlign: "start",
                }}
              >
                Have questions, feedback, or partnership ideas? We’d love to
                hear from you.
              </Typography>
              <Stack direction={"row"}>
                <DraftsOutlinedIcon
                  sx={{
                    color: "#FBBC05",
                    marginLeft: "35px",
                    marginTop: "30px",
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontWeight: "500",
                    marginTop: "30px",
                    textAlign: "start",
                    marginLeft: "10px",
                  }}
                >
                  hello-fiole@fiole.app
                </Typography>
              </Stack>

              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  fontWeight: "500",
                  marginTop: "10px",
                  textAlign: "start",
                  marginLeft: "35px",
                  width: "294px",
                  height: "44px",
                }}
              >
                <img
                  src="./images/Vector.png"
                  alt="..."
                  style={{ marginRight: "5px", color: "#FBBC05" }}
                />
                37 Rue du général de Gaulle • Châtenois-les-Forges, 90700 •
                France
              </Typography>
            </Stack>
            <img
              src="./images/person.png"
              alt="..."
              style={{
                position: "absolute",
                top: "-90px",
                marginLeft: "270px",
              }}
            />
            <Stack
              direction={"column"}
              sx={{
                marginLeft: "420px",
                marginTop: "50px",
                gap: "8px",
                backgroundImage: "linear-gradient(to top,#112E2D,#163B3900)",
                borderRadius: "32px",
                padding: "8px 16px 8px 16px",
              }}
            >
              <TextField
                placeholder="Enter Your Name *"
                sx={{
                  marginTop: "8px",
                  width: "430px",
                  height: "52px",
                  borderRadius: "78px",
                  border: "1px solid #7F7F7F",
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    opacity: 1,
                  },
                  "& fieldset": {
                    border: "none",
                  },
                }}
              />
              <TextField
                placeholder="Enter Your mail id *"
                sx={{
                  width: "430px",
                  height: "52px",
                  borderRadius: "78px",
                  border: "1px solid #7F7F7F",
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    opacity: 1,
                  },
                  "& fieldset": {
                    border: "none",
                  },
                }}
              />
              <TextField
                placeholder="Enter Your Message"
                sx={{
                  width: "430px",
                  height: "120px",
                  borderRadius: "32px",
                  border: "1px solid #7F7F7F",
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    opacity: 1,
                  },
                  "& fieldset": {
                    border: "none",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  width: "430px",
                  height: "52px",
                  bgcolor: "#B78A08",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "68px",
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
