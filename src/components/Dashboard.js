import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import SliderComp from "./SliderComp";

const Dashboard = () => {
  return (
    <>
      <Stack direction={"column"}>
        <Typography
          sx={{
            height: "106px",
            width: "1155px",
            fontFamily: "Satoshi",
            fontWeight: "700",
            fontSize: "48px",
            color: "white",
            textAlign: "center",
            marginLeft: "350px",
          }}
        >
          A universe of Manga, Comics, BD & Novels at fingertips for readers.
        </Typography>
        <Typography
          sx={{
            width: "748px",
            height: "56px",
            fontFamily: "Satoshi",
            fontWeight: "500",
            fontSize: "20px",
            color: "#9CC4C4",
            textAlign: "center",
            marginLeft: "600px",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          Fiole gives every book lover access to a vast universe of Manga,
          Comics, BD & Novels—designed so nothing ever interrupts your reading
          flow.
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginLeft: "830px",
            width: "209px",
            height: "52px",
            borderRadius: "68px",
            textTransform: "none",
            bgcolor: "#00CFCC",
            color: "#FFFFFF",
            fontFamily: "Satoshi",
            marginTop: "20px",
          }}
        >
          Browse Books
          <OutboundOutlinedIcon sx={{ marginLeft: "8px" }} />
        </Button>
      </Stack>
      <img src="./images/dash1.png" alt="..." style={{ marginTop: "60px" }} />
      <Typography
        sx={{
          fontFamily: "Satoshi",
          fontWeight: "700",
          fontSize: "48px",
          color: "white",
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        Top rated books at your fingertips
      </Typography>
      <img src="./images/book.png" alt="..." />
      <img src="./images/dash2.png" alt="..." style={{ marginTop: "60px" }} />

      <Typography
        sx={{
          fontFamily: "Satoshi",
          fontSize: "48px",
          fontWeight: "700",
          color: "white",
          width: "898px",
          height: "106px",
          marginLeft: "500px",
          marginTop: "60px",
        }}
      >
        Get Rewarded for Reading your favourite books.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Satoshi",
          fontSize: "20px",
          fontWeight: "500",
          color: "#9CC4C4",
          width: "929px",
          height: "84px",
          marginLeft: "500px",
          marginTop: "30px",
        }}
      >
        Fiole has a reward system that rewards you for reading your favourite
        books. Earn points with every chapter you read, Manga, Comics, BD or
        Novels and track your progress with a filling Fiole specific to you.
      </Typography>
      <img src="./images/dash3.png" alt="..." style={{ marginTop: "20px" }} />
      <Box>
        <Button
          variant="contained"
          sx={{
            height: "52px",
            width: "278px",
            borderRadius: "68px",
            bgcolor: "#00ACA9",
            textTransform: "none",
            fontWeight: "700",
            fontSize: "16px",
            marginTop: "30px",
          }}
        >
          View all top rated books
          <OutboundOutlinedIcon sx={{ color: "white", marginLeft: "8px" }} />
        </Button>
      </Box>
      <Typography
        sx={{
          fontFamily: "Satoshi",
          fontSize: "48px",
          fontWeight: "700",
          color: "white",
          width: "898px",
          height: "53px",
          marginLeft: "500px",
          marginTop: "60px",
        }}
      >
        Fiole for Indie Creators/Authors
      </Typography>
      <Typography
        sx={{
          fontFamily: "Satoshi",
          fontSize: "20px",
          fontWeight: "500",
          color: "#9CC4C4",
          width: "949px",
          height: "56px",
          marginLeft: "500px",
          marginTop: "30px",
        }}
      >
        Publish your book in Minutes. No gatekeepers, no upfront fees. Simply
        upload your content and our team reviews it. Once approved, your story
        is available to readers instantly, across devices and platforms.
      </Typography>
      <img src="./images/dash4.png" alt="..." />
      <Box
        sx={{
          marginLeft: "500px",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "700",
                fontFamily: "Satoshi",
                color: "white",
              }}
            >
              Step: 1
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                fontFamily: "Satoshi",
                height: "75px",
                width: "294px",
              }}
            >
              Add your book by entering it’s details & uploading the Book in PDF
              or EPUB.
            </Typography>
          </Stack>
          <Stack direction={"column"}>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "700",
                fontFamily: "Satoshi",
                color: "white",
              }}
            >
              Step: 1
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                fontFamily: "Satoshi",
                height: "75px",
                width: "294px",
              }}
            >
              Add your book by entering it’s details & uploading the Book in PDF
              or EPUB.
            </Typography>
          </Stack>
          <Stack direction={"column"}>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "700",
                fontFamily: "Satoshi",
                color: "white",
              }}
            >
              Step: 1
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                fontFamily: "Satoshi",
                height: "75px",
                width: "294px",
              }}
            >
              Add your book by entering it’s details & uploading the Book in PDF
              or EPUB.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Typography
        sx={{
          color: "white",
          fontSize: "48px",
          fontWeight: "700",
          fontFamily: "Satoshi",
          height: "53px",
          width: "798px",
          marginLeft: "550px",
          marginTop: "40px",
        }}
      >
        What our users say
      </Typography>

      {/*    <Stack direction={"row"} sx={{ marginTop: "40px" }}>
        //card-1
        <Card
          sx={{
            marginLeft: "-180px",
            bgcolor: "#172828",
            height: "481px",
            width: "256px",
            borderRadius: "10px",
            padding: "32px",
            gap: "36px",
          }}
        >
          <Rating sx={{ color: "white" }} />
          <Typography
            sx={{
              bgcolor: "transparent",
              marginTop: "50px",
              color: "white",
              width: "192px",
              height: "275px",
              marginLeft: "30px",
            }}
          >
            Overall a very good app with extremely useful features like "Liquid
            mode". But, what I hate is the AI assistant thing and the overall
            performance. My phone is quite old and not very powerful and this
            app feels heavy when opening pdfs or scrolling through the
            documents.
          </Typography>
          <Stack
            direction={"row"}
            sx={{ gap: "15px", marginLeft: "40px", marginTop: "50px" }}
          >
            <Avatar
              src="./images/avatar.png"
              alt="..."
              sx={{ width: "50px", height: "50px" }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Alfonso Rosser
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                June 27, 2025
              </Typography>
            </Stack>
          </Stack>
        </Card>
        //card-2
        <Card
          sx={{
            bgcolor: "#172828",
            height: "481px",
            width: "256px",
            borderRadius: "10px",
            padding: "32px",
            gap: "36px",
          }}
        >
          <Rating sx={{ color: "white" }} />
          <Typography
            sx={{
              bgcolor: "transparent",
              marginTop: "50px",
              color: "white",
              width: "192px",
              height: "275px",
              marginLeft: "30px",
            }}
          >
            Overall a very good app with extremely useful features like "Liquid
            mode". But, what I hate is the AI assistant thing and the overall
            performance. My phone is quite old and not very powerful and this
            app feels heavy when opening pdfs or scrolling through the
            documents.
          </Typography>
          <Stack
            direction={"row"}
            sx={{ gap: "15px", marginLeft: "40px", marginTop: "50px" }}
          >
            <Avatar
              src="./images/avatar.png"
              alt="..."
              sx={{ width: "50px", height: "50px" }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Alfonso Rosser
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                June 27, 2025
              </Typography>
            </Stack>
          </Stack>
        </Card>
        //card-3
        <Card
          sx={{
            bgcolor: "#172828",
            height: "481px",
            width: "256px",
            borderRadius: "10px",
            padding: "32px",
            gap: "36px",
          }}
        >
          <Rating sx={{ color: "white" }} />
          <Typography
            sx={{
              bgcolor: "transparent",
              marginTop: "50px",
              color: "white",
              width: "192px",
              height: "275px",
              marginLeft: "30px",
            }}
          >
            Overall a very good app with extremely useful features like "Liquid
            mode". But, what I hate is the AI assistant thing and the overall
            performance. My phone is quite old and not very powerful and this
            app feels heavy when opening pdfs or scrolling through the
            documents.
          </Typography>
          <Stack
            direction={"row"}
            sx={{ gap: "15px", marginLeft: "40px", marginTop: "50px" }}
          >
            <Avatar
              src="./images/avatar.png"
              alt="..."
              sx={{ width: "50px", height: "50px" }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Alfonso Rosser
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                June 27, 2025
              </Typography>
            </Stack>
          </Stack>
        </Card>
        //card-4
        <Card
          sx={{
            bgcolor: "#172828",
            height: "481px",
            width: "256px",
            borderRadius: "10px",
            padding: "32px",
            gap: "36px",
          }}
        >
          <Rating sx={{ color: "white" }} />
          <Typography
            sx={{
              bgcolor: "transparent",
              marginTop: "50px",
              color: "white",
              width: "192px",
              height: "275px",
              marginLeft: "30px",
            }}
          >
            Overall a very good app with extremely useful features like "Liquid
            mode". But, what I hate is the AI assistant thing and the overall
            performance. My phone is quite old and not very powerful and this
            app feels heavy when opening pdfs or scrolling through the
            documents.
          </Typography>
          <Stack
            direction={"row"}
            sx={{ gap: "15px", marginLeft: "40px", marginTop: "50px" }}
          >
            <Avatar
              src="./images/avatar.png"
              alt="..."
              sx={{ width: "50px", height: "50px" }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Alfonso Rosser
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                June 27, 2025
              </Typography>
            </Stack>
          </Stack>
        </Card>
        //card-5
        <Card
          sx={{
            bgcolor: "#172828",
            height: "481px",
            width: "256px",
            borderRadius: "10px",
            padding: "32px",
            gap: "36px",
          }}
        >
          <Rating sx={{ color: "white" }} />
          <Typography
            sx={{
              bgcolor: "transparent",
              marginTop: "50px",
              color: "white",
              width: "192px",
              height: "275px",
              marginLeft: "30px",
            }}
          >
            Overall a very good app with extremely useful features like "Liquid
            mode". But, what I hate is the AI assistant thing and the overall
            performance. My phone is quite old and not very powerful and this
            app feels heavy when opening pdfs or scrolling through the
            documents.
          </Typography>
          <Stack
            direction={"row"}
            sx={{ gap: "15px", marginLeft: "40px", marginTop: "50px" }}
          >
            <Avatar
              src="./images/avatar.png"
              alt="..."
              sx={{ width: "50px", height: "50px" }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Alfonso Rosser
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                June 27, 2025
              </Typography>
            </Stack>
          </Stack>
        </Card>
        //card-6
        <Card
          sx={{
            bgcolor: "#172828",
            height: "481px",
            width: "256px",
            borderRadius: "10px",
            padding: "32px",
            gap: "36px",
            marginRight: "-120px",
          }}
        >
          <Rating sx={{ color: "white" }} />
          <Typography
            sx={{
              bgcolor: "transparent",
              marginTop: "50px",
              color: "white",
              width: "192px",
              height: "275px",
              marginLeft: "30px",
            }}
          >
            Overall a very good app with extremely useful features like "Liquid
            mode". But, what I hate is the AI assistant thing and the overall
            performance. My phone is quite old and not very powerful and this
            app feels heavy when opening pdfs or scrolling through the
            documents.
          </Typography>
          <Stack
            direction={"row"}
            sx={{ gap: "15px", marginLeft: "40px", marginTop: "50px" }}
          >
            <Avatar
              src="./images/avatar.png"
              alt="..."
              sx={{ width: "50px", height: "50px" }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Alfonso Rosser
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                June 27, 2025
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Stack> 
      
      <img src="./images/dots.png" alt="..." style={{ marginTop: "20px" }} />
      */}

      <SliderComp />
    </>
  );
};

export default Dashboard;
