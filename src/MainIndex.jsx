import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { modechanger } from "./store/ToggleState";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";



const drawerWidth = 240;

function MainComponent(props) {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const dispatch = useDispatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton component={NavLink} to={"/"}>
          <ListItemIcon>
            <MdDashboard size={25} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <FaUserTie size={25} />
          </ListItemIcon>
          <ListItemText primary="Professors" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" sx={{ marginY: 0, paddingY: 0 }}>
            <ListItemButton
              sx={{ pl: 4, marginY: 0, paddingY: 0 }}
              component={NavLink}
              to={"/D.Com"}
            >
              <ListItemIcon>
                <FaGreaterThan />
              </ListItemIcon>
              <ListItemText primary="D.Com" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4, marginY: 0, paddingY: 0 }}
              component={NavLink}
              to={"/BSCS"}
            >
              <ListItemIcon>
                <FaGreaterThan />
              </ListItemIcon>
              <ListItemText primary="BSCS" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4, marginY: 0, paddingY: 0 }}
              component={NavLink}
              to={"/DIT"}
            >
              <ListItemIcon>
                <FaGreaterThan />
              </ListItemIcon>
              <ListItemText primary="DIT" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick1}>
          <ListItemIcon>
            <FaUserGroup size={25} />
          </ListItemIcon>
          <ListItemText primary="Students" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" sx={{ marginY: 0, paddingY: 0 }}>
            <ListItemButton sx={{ pl: 4, marginY: 0, paddingY: 0 }}>
              <ListItemIcon>
                <FaGreaterThan />
              </ListItemIcon>
              <ListItemText primary="All" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, marginY: 0, paddingY: 0 }}>
              <ListItemIcon>
                <FaGreaterThan />
              </ListItemIcon>
              <ListItemText primary="TopStudents" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, marginY: 0, paddingY: 0 }}>
              <ListItemIcon>
                <FaGreaterThan />
              </ListItemIcon>
              <ListItemText primary="WarnnedStudents" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick2}>
          <ListItemIcon>
            <FaBookReader size={25} />
          </ListItemIcon>
          <ListItemText primary="Courses" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" sx={{ marginY: 0, paddingY: 0 }}>
            <ListItemButton sx={{ pl: 4, marginY: 0, paddingY: 0 }}>
              <ListItemIcon>
                <FaGreaterThan />
              </ListItemIcon>
              <ListItemText primary="DIT" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, marginY: 0, paddingY: 0 }}>
              <ListItemIcon>
                <FaGreaterThan />
              </ListItemIcon>
              <ListItemText primary="BSCS" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, marginY: 0, paddingY: 0 }}>
              <ListItemIcon>
                <FaGreaterThan />
              </ListItemIcon>
              <ListItemText primary="D.Com" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, marginY: 0, paddingY: 0 }}>
              <ListItemIcon>
                <FaGreaterThan />
              </ListItemIcon>
              <ListItemText primary="BS.Commerce" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick3}>
          <ListItemIcon>
            <FaBook size={25} />
          </ListItemIcon>
          <ListItemText primary="Books" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" sx={{ marginY: 0, paddingY: 0 }}>
            <ListItemButton
              sx={{ pl: 4, marginY: 0, paddingY: 0 }}
              component={NavLink}
              to={"/ditbooks"}
            >
              <ListItemIcon>
                <IoBookOutline />
              </ListItemIcon>
              <ListItemText primary="DIT Books" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4, marginY: 0, paddingY: 0 }}
              component={NavLink}
              to={"/bscsbooks"}
            >
              <ListItemIcon>
                <IoBookOutline />
              </ListItemIcon>
              <ListItemText primary="BSCS Books" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4, marginY: 0, paddingY: 0 }}
              component={NavLink}
              to={"/dcom"}
            >
              <ListItemIcon>
                <IoBookOutline />
              </ListItemIcon>
              <ListItemText primary="D.Com Books" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4, marginY: 0, paddingY: 0 }}
              component={NavLink}
              to={"/bscommerbooks"}
            >
              <ListItemIcon>
                <IoBookOutline />
              </ListItemIcon>
              <ListItemText primary="BS.Com Books" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick4}>
          <ListItemIcon>
            <FaClipboardList size={25} />
          </ListItemIcon>
          <ListItemText primary="Notice Board" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" sx={{ marginY: 0, paddingY: 0 }}>
            <ListItemButton
              sx={{ pl: 4, marginY: 0, paddingY: 0 }}
              component={NavLink}
              to={"/ditbooks"}
            >
              <ListItemIcon>
                <FaClipboardCheck />
              </ListItemIcon>
              <ListItemText primary="Recent" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4, marginY: 0, paddingY: 0 }}
              component={NavLink}
              to={"/bscsbooks"}
            >
              <ListItemIcon>
                <FaClipboardCheck />
              </ListItemIcon>
              <ListItemText primary="Prev_Months" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4, marginY: 0, paddingY: 0 }}
              component={NavLink}
              to={"/dcom"}
            >
              <ListItemIcon>
                <FaClipboardCheck />
              </ListItemIcon>
              <ListItemText primary="Warnings" />
            </ListItemButton>
      
          </List>
        </Collapse>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            GCMS
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Button onClick={() => dispatch(modechanger())}>click</Button>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

MainComponent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default MainComponent;
