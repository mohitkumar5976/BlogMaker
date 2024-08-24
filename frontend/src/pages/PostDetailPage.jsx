import { Grid, Stack } from "@mui/material";
import { React } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Footer from "../components/Footer";
import RecentPosts from "../components/RecentPosts";
import Heading from "../components/Heading";

const PostDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <Grid container direction={"column"}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container padding={2}>
          <Grid item lg={8}>
            <Card sx={{ width: "100%", height: "100%" }} elevation={0}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                image={`/assets/images/image1.jpg`}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} padding={1}>
            <Grid gap={1}>
              <Stack spacing={1}>
              <Heading title={"Recent Posts"} variant={"h4"} />
              <RecentPosts />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default PostDetailPage;
