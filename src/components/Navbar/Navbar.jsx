import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Sidebar } from "../index";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isAuthentificated = true;

  return (
    <>
      <AppBar posotion="fixed">
        <Toolbar className="nav-toolbar">
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              className="nav-menuButton"
              onClick={() => {setMobileOpen((prevMobileOpen) => !prevMobileOpen)}}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton
            style={{ marginLeft: isMobile ? 0 : "240px" }}
            color="inherit"
            sx={{ ml: 1 }}
            onClick={() => {}}
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && "Search..."}
          <div>
            {!isAuthentificated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={"/profile/123"}
                className="nav-linkButton"
                onClick={() => {}}
              >
                {!isMobile && <>My movies&nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="../../../public/images/avatar-placeholder.jpg"
                />
              </Button>
            )}
          </div>
          {isMobile && "Search..."}
        </Toolbar>
      </AppBar>
      <div>
        <nav className="nav-drawer">
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className="nav-drawerPaper"
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer className="nav-drawerPaper" variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
