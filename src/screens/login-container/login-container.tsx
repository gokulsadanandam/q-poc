import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import LoginOne from "../login-one/login-one";
import LoginTwo from "../login-two/login-two";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginContainer() {
  const navigate = useNavigate();

  return (
    <Grid direction="row" container style={{ height: "100%" }}>
      <Hidden mdDown>
        <Grid item md={6} lg={6} style={{ height: "100%" }}>
          <img
            width="100%"
            style={{ height: "inherit" }}
            src={require("../../assets/login.jpg")}
            alt="Login"
          />
        </Grid>
      </Hidden>
      <Grid item flex="1" md={6} lg={6} style={{ height: "100%" }}>
        <Paper
          square
          elevation={0}
          style={{
            display: "flex",
            flexDirection: "column",
            paddingInline: 16,
            height: "100%"
          }}
        >
          <Routes>
            <Route path="/2" element={<LoginTwo />} />
            <Route index element={<LoginOne />} />
          </Routes>
          <img
            onClick={() => navigate("/")}
            style={{ marginBottom: 16, width: 120 }}
            src={require("../../assets/login_footer.png")}
            alt="Powered By Q"
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
