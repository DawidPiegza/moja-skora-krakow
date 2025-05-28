import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import nasz_zespol from "../../../public/images/nasz_zespol.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
export default function AboutUsView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMdAndLg = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <Container maxWidth="xl" sx={{ marginTop: "65px" }}>
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={(theme) => ({
                color: "text.secondary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: {
                  ...theme.typography.body1,
                },
              })}
            >
              Strona Główna
            </Link>
            <Typography
              sx={(theme) => ({
                color: "text.primary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: {
                  ...theme.typography.body1,
                },
              })}
            >
              Nasz zespół
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={12} paddingBottom={10}>
          <Grid
            container
            direction={downMd ? "column" : "row"}
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <Grid size={12}>
              <Grid
                container
                width="100%"
                display="flex"
                justifyContent="space-evenly"
              >
                <Grid size={12}>
                  <Divider
                    variant="fullWidth"
                    sx={{ bgcolor: "text.primary" }}
                  />
                </Grid>
                <Grid size={downMd ? 12 : 5} py={1}>
                  <Grid container direction="column" spacing={1}>
                    <Grid size={12}>
                      <Typography
                        variant="h2"
                        fontStyle="italic"
                        sx={(theme) => ({
                          color: "text.primary",
                          ...theme.typography.h4,
                          [theme.breakpoints.up("md")]: {
                            ...theme.typography.h3,
                          },
                          [theme.breakpoints.up("xl")]: {
                            ...theme.typography.h2,
                          },
                        })}
                      >
                        Karolina <br /> Sałdan
                      </Typography>
                      <Typography
                        sx={(theme) => ({
                          color: "text.primary",
                          ...theme.typography.h6,
                          [theme.breakpoints.up("xl")]: {
                            ...theme.typography.h5,
                          },
                        })}
                        fontStyle="italic"
                        gutterBottom
                      >
                        mgr. kosmetologii
                      </Typography>
                    </Grid>
                    <Grid size={12}>
                      <Typography
                        sx={(theme) => ({
                          color: "text.primary",
                          ...theme.typography.body1,
                          [theme.breakpoints.up("xl")]: {
                            ...theme.typography.h6,
                          },
                        })}
                        gutterBottom
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus molestie a quam eu auctor. Aenean elementum
                        ligula eu ipsum tristique, non dignissim massa congue.
                        Curabitur id felis quis orci convallis lacinia sit amet
                        quis eros. Mauris ultrices, leo sed sagittis egestas,
                        velit mauris fringilla lacus, a viverra ex justo nec
                        odio. Nunc sed lacus nulla. Sed est erat, mollis et
                        suscipit a, rhoncus aliquam nunc. Fusce lobortis nisl eu
                        vestibulum placerat. Sed vel varius nisl. Vestibulum
                        malesuada felis eu ex pharetra, quis dictum enim
                        tincidunt. Proin lobortis est lectus, sed facilisis enim
                        pretium gravida. Vestibulum vel mi vel orci viverra
                        venenatis sed quis leo. Praesent volutpat, lorem ut
                        pretium iaculis, velit massa maximus leo, nec fringilla
                        erat erat id nibh. Morbi faucibus dictum nibh, sed
                        pellentesque metus blandit id.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {!downMd && (
                  <Grid size={1}>
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Divider
                        orientation="vertical"
                        sx={{
                          width: "1px",
                          backgroundColor: "text.primary",
                        }}
                      />
                    </Box>
                  </Grid>
                )}
                <Grid
                  size={downMd ? 12 : 5}
                  display={"flex"}
                  alignItems="center"
                  justifyContent={betweenMdAndLg ? "flex-start" : "flex-end"}
                  py={1}
                >
                  <Card
                    component={Paper}
                    variant="outlined"
                    sx={{ padding: 2 }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: {
                          lg: "auto",
                          md: "600px",
                          sm: "500px",
                          xs: "auto",
                        },
                      }}
                      image={nasz_zespol}
                      alt="Description of the image"
                    />
                  </Card>
                </Grid>
                <Grid size={12}>
                  <Divider
                    variant="fullWidth"
                    sx={{ bgcolor: "text.primary" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12}>
              <Grid
                container
                width="100%"
                display="flex"
                justifyContent="space-evenly"
              >
                <Grid size={downMd ? 12 : 5} py={1}>
                  <Grid container direction="column" spacing={1}>
                    <Grid size={12}>
                      <Typography
                        variant="h2"
                        fontStyle="italic"
                        sx={(theme) => ({
                          color: "text.primary",
                          ...theme.typography.h4,
                          [theme.breakpoints.up("md")]: {
                            ...theme.typography.h3,
                          },
                          [theme.breakpoints.up("xl")]: {
                            ...theme.typography.h2,
                          },
                        })}
                      >
                        Karolina <br /> Sałdan
                      </Typography>
                      <Typography
                        sx={(theme) => ({
                          color: "text.primary",
                          ...theme.typography.h6,
                          [theme.breakpoints.up("xl")]: {
                            ...theme.typography.h5,
                          },
                        })}
                        fontStyle="italic"
                        gutterBottom
                      >
                        mgr. kosmetologii
                      </Typography>
                    </Grid>
                    <Grid size={12}>
                      <Typography
                        sx={(theme) => ({
                          color: "text.primary",
                          ...theme.typography.body1,
                          [theme.breakpoints.up("xl")]: {
                            ...theme.typography.h6,
                          },
                        })}
                        gutterBottom
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus molestie a quam eu auctor. Aenean elementum
                        ligula eu ipsum tristique, non dignissim massa congue.
                        Curabitur id felis quis orci convallis lacinia sit amet
                        quis eros. Mauris ultrices, leo sed sagittis egestas,
                        velit mauris fringilla lacus, a viverra ex justo nec
                        odio. Nunc sed lacus nulla. Sed est erat, mollis et
                        suscipit a, rhoncus aliquam nunc. Fusce lobortis nisl eu
                        vestibulum placerat. Sed vel varius nisl. Vestibulum
                        malesuada felis eu ex pharetra, quis dictum enim
                        tincidunt. Proin lobortis est lectus, sed facilisis enim
                        pretium gravida. Vestibulum vel mi vel orci viverra
                        venenatis sed quis leo. Praesent volutpat, lorem ut
                        pretium iaculis, velit massa maximus leo, nec fringilla
                        erat erat id nibh. Morbi faucibus dictum nibh, sed
                        pellentesque metus blandit id.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {!downMd && (
                  <Grid size={1}>
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Divider
                        orientation="vertical"
                        sx={{
                          width: "1px",
                          backgroundColor: "text.primary",
                        }}
                      />
                    </Box>
                  </Grid>
                )}
                <Grid
                  size={downMd ? 12 : 5}
                  display={"flex"}
                  alignItems="center"
                  justifyContent={betweenMdAndLg ? "flex-start" : "flex-end"}
                  py={1}
                >
                  <Card
                    component={Paper}
                    variant="outlined"
                    sx={{ padding: 2 }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: {
                          lg: "auto",
                          md: "600px",
                          sm: "500px",
                          xs: "auto",
                        },
                      }}
                      image={nasz_zespol}
                      alt="Description of the image"
                    />
                  </Card>
                </Grid>
                <Grid size={12}>
                  <Divider
                    variant="fullWidth"
                    sx={{ bgcolor: "text.primary" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={12}
          marginTop={3}
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        >
          <BottomNavigation showLabels component={Paper} variant="outlined">
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
            <BottomNavigationAction
              label="Instagram"
              icon={<InstagramIcon />}
            />
            <BottomNavigationAction label="Google" icon={<GoogleIcon />} />
          </BottomNavigation>
        </Grid>
      </Grid>
    </Container>
  );
}
