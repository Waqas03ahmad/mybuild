import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export default function TeacherCard() {
  return (
    <Card
      data-resizable
      sx={{
        textAlign: "center",
        alignItems: "center",
        maxWidth: "100%",
        overflow: "auto",
        "--icon-size": "130px",
      }}
    >
      <CardOverflow variant="solid" color="warning">
        <AspectRatio
          variant="outlined"
          color="warning"
          ratio="1"
          sx={{
            m: "auto",
            transform: "translateY(50%)",
            borderRadius: "50%",
            width: "var(--icon-size)",
            boxShadow: "sm",
            bgcolor: "background.surface",
            position: "relative",
          }}
        >
          <div>
            <img src="https://res.cloudinary.com/dt6z3lqko/image/upload/v1714834988/sajjad_supjyp.png" alt="teacher"  />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: "calc(var(--icon-size) / 2)" }}>
      Sajjad Khan Prof
      </Typography>
      <CardContent sx={{ maxWidth: "40ch" }}>
        Gold Middlist of Networking profession as lecturer in Gcms Shabqadar for 2 years.
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          "--Button-radius": "40px",
          width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
        }}
      >
        <Button variant="solid" color="warning">
          Share
        </Button>
        <Button variant="plain" color="neutral">
          Skip
        </Button>
      </CardActions>
    </Card>
  );
}
