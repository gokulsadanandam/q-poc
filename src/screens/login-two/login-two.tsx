import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";

export default function LoginTwo() {
  return (
    <div
      style={{
        width: 400,
        padding: 8,
        margin: "auto"
      }}
    >
      <Typography
        mb={0.5}
        fontSize={30}
        fontWeight="bolder"
        color="text.primary"
      >
        Welcome to CXT
      </Typography>
      <Typography mb={3} fontSize={18} color="text.secondary">
        Sign in to your account.
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          minHeight: 400
        }}
      >
        <div style={{ flex: 1 }}>
          <Button size="large" variant="outlined" fullWidth>
            Continue with Google
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between"
          }}
        >
          <FormControl fullWidth>
            <FormLabel required htmlFor="email">
              Username or Email
            </FormLabel>
            <TextField
              id="email"
              placeholder="Username or Email"
              variant="outlined"
              fullWidth
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel required htmlFor="password">
              Password
            </FormLabel>
            <TextField
              id="password"
              placeholder="Password"
              variant="outlined"
              type="password"
              fullWidth
            />
          </FormControl>
          <FormControlLabel
            value="end"
            control={<Checkbox color="secondary" />}
            label="Keep me Signed In"
            labelPlacement="end"
          />
          <Button size="large" variant="contained" fullWidth>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
