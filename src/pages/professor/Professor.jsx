import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TeacherCard from "../../assets/Card/Content";

export default function Professor() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
          <Grid key={e} xs={12} sm={4}>
            <TeacherCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
