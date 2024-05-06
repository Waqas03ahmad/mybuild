import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Teacher from "./Teacher";
import Card2 from "./Card2";
import Charts from "./Charts";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card2/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card2/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card2/>
        </Grid>
        <Grid container spacing={2} item xs={12}>
        <Grid item xs={12} sm={8}>
        <Item><Charts/></Item>
          
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item><Teacher/></Item>
        </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
