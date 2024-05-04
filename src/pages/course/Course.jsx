import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Grid } from "@mui/material";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";

export default function Course() {
  return (
    <>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <Grid item key={e} xs={12} sm={4}>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img
                    src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                    srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="title-md">Yosemite National Park</Typography>
                <Typography level="body-sm">California</Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    6.3k views
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    1 hour ago
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
