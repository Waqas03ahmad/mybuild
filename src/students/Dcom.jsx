import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Grid } from "@mui/material";

export default function Dcom() {
  return (
    <>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <Grid item key={e} xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                position: "relative",
                overflow: { xs: "auto", sm: "initial" },
              }}
            >
              {/* <Box
                sx={{
                  position: "absolute",
                  display: "block",
                  width: "1px",
                  bgcolor: "warning.300",
                  left: "500px",
                  top: "-24px",
                  bottom: "-24px",
                  "&::before": {
                    top: "4px",
                    content: '"vertical"',
                    display: "block",
                    position: "absolute",
                    right: "0.5rem",
                    color: "text.tertiary",
                    fontSize: "sm",
                    fontWeight: "lg",
                  },
                  "&::after": {
                    top: "4px",
                    content: '"horizontal"',
                    display: "block",
                    position: "absolute",
                    left: "0.5rem",
                    color: "text.tertiary",
                    fontSize: "sm",
                    fontWeight: "lg",
                  },
                }}
              /> */}
              <Card
                orientation="horizontal"
                sx={{
                  width: "100%",
                  flexWrap: "wrap",
                  [`& > *`]: {
                    "--stack-point": "500px",
                    minWidth:
                      "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                  },
                  overflow: "auto",
                }}
              >
                <AspectRatio
                  flex
                  ratio="1"
                  sx={{ minWidth:130 }}
                >
                  <img src="../../../student.jpg" alt="student" />
                </AspectRatio>
                <CardContent>
                  <Typography fontSize="xl" fontWeight="lg">
                    Waqas Ahmad
                  </Typography>
                  <Typography
                    level="body-sm"
                    fontWeight="lg"
                    textColor="text.tertiary"
                  >
                    Bs-Computer Science
                  </Typography>
                  <Sheet
                    sx={{
                      bgcolor: "background.level1",
                      borderRadius: "sm",
                      p: 1.5,
                      my: 1.5,
                      display: "flex",
                      gap: 2,
                      "& > div": { flex: 1 },
                    }}
                  >
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Semester
                      </Typography>
                      <Typography fontWeight="lg">4</Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        GPA
                      </Typography>
                      <Typography fontWeight="lg">3.64</Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Years
                      </Typography>
                      <Typography fontWeight="lg">2024</Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Position
                      </Typography>
                      <Typography fontWeight="lg">1st</Typography>
                    </div>
                  </Sheet>
                  
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
