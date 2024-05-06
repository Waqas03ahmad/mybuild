import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Teacher() {
  return (
    <>
      <Box
        sx={{
          marginX: 1,
          marginTop: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography color="initial">Top Teachers</Typography>
        <Link component={NavLink} to={"/professors"} sx={{ cursor: "pointer" }}>
          view all
        </Link>
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {[
          {
            name: "Sajjad Ahmad",
            position: "Lecturer",
            department: "BSCS",
            photo: "../../../public/sajjad.png",
          },
          {
            name: "Sajjad Ahmad",
            position: "Lecturer",
            department: "BSCS",
            photo: "../../../public/sajjad.png",
          },
          {
            name: "Sajjad Ahmad",
            position: "Lecturer",
            department: "BSCS",
            photo: "../../../public/sajjad.png",
          },
          {
            name: "Sajjad Ahmad",
            position: "Lecturer",
            department: "BSCS",
            photo: "../../../public/sajjad.png",
          },
          {
            name: "Sajjad Ahmad",
            position: "Lecturer",
            department: "BSCS",
            photo: "../../../public/sajjad.png",
          },
        ].map((e) => (
          <ListItem key={e} sx={{ margin: 1, padding: 0 }}>
            <ListItemAvatar>
              <Avatar>
                <img
                  src={e.photo}
                  alt="sajjad"
                  style={{ width: "100%", height: "100%" }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={e.name}
              secondary={`${e.position} ${e.department}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
[
  {
    name: "Sajjad Ahmad",
    position: "Lecturer",
    department: "BSCS",
    photo: "../../../public/sajjad.png",
  },
];
