import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ListItemButton, AvatarProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";

interface StyledAvatarProps {
  color?: string;
}

const StyledListItemButton = styled(ListItemButton)<{
  component?: React.ElementType;
}>(({ theme }) => ({
  minHeight: 100,
  boxShadow: theme.shadows[1],
  marginTop: 8,
  borderRadius: 4,
  marginBottom: 8,
  backgroundColor: `${theme.palette.background.default}`,
  "&:hover, &.Mui-focusVisible": {
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: `${theme.palette.background.default}`,
    "& > .MuiListItemAvatar-root": {
      "& > .MuiAvatar-root  ": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        border: "1px solid",
        transition: "all 0.5s",
        borderColor: theme.palette.primary.main
      }
    }
  }
}));

const StyledAvatar = styled(
  ({ color, ...other }: StyledAvatarProps & AvatarProps) => (
    <Avatar {...other} />
  )
)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.common.white,
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    border: "1px solid",
    borderColor: theme.palette.primary.main
  }
}));

export default function LoginOne() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        maxWidth: 420,
        padding: 8,
        margin: "auto"
      }}
    >
      <Typography gutterBottom fontSize={18} color="text.secondary">
        To begin this journey, tell us what type of account you’d be accessing.
      </Typography>
      <Typography fontSize={30} fontWeight="bold">
        I am a/an
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360
        }}
      >
        {[
          {
            primary: "Liv Agent",
            secondary: "View Analytics",
            icon: () => <PersonIcon />,
            onClick: () => navigate("/2")
          },
          {
            primary: "Designer",
            secondary: "View Analytics, Optimize Q Agents",
            icon: () => <PersonAddIcon />,
            onClick: () => navigate("/2")
          },
          {
            primary: "Admin",
            secondary: "Setup Agents, View Analytics, Optimize Q Agents",
            icon: () => <SupervisorAccountIcon />,
            onClick: () => navigate("/2")
          }
        ].map((item) => (
          <StyledListItemButton onClick={item.onClick} component="li">
            <ListItemAvatar>
              <StyledAvatar color="theme.palette.primary.main">
                <item.icon />
              </StyledAvatar>
            </ListItemAvatar>
            <ListItemText primary={item.primary} secondary={item.secondary} />
          </StyledListItemButton>
        ))}
      </List>
    </div>
  );
}
