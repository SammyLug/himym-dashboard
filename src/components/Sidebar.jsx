import {
  ListItem,
  ListItemIcon, 
  List,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { pink } from '@mui/material/colors';

function Sidebar() {
  return (
    <div className="side-nav">
      
      <List sx={{ width: "100%", bgcolor: "secondary" }}>
        
        <ListItem key="Home">
          <Button>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
          </Button>
        </ListItem>


        <ListItem key="Home">
          <Button>
            <ListItemIcon>
              <HomeIcon color="secondary" />
            </ListItemIcon>
          </Button>
        </ListItem>


        <ListItem key="Home">
          <Button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </Button>
        </ListItem>


        <ListItem key="Home">
          <Button>
            <ListItemIcon>
              <HomeIcon sx={{ color: pink[500] }} />
            </ListItemIcon>
          </Button>
        </ListItem>


      </List>
    </div>
  );
}

export default Sidebar