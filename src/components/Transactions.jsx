import { mockTransactions } from "../mockData";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Container from "@mui/material/Container";

export default function Transactions() {
  return (
    <>
      <Container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {mockTransactions.map((transaction) => (
          <Card key={transaction.txId} sx={{ maxWidth: 345, m: 2 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardMedia
              component="img"
              height="194"
              image={transaction.image}
              alt="Placeholder image"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <b>User:</b> {transaction.user}
                <br />
                <b>Cost:</b> ${transaction.cost}
                <br />
                <b>Drink:</b> {transaction.drink}
              </Typography>
            </CardContent>
          
          </Card>
        ))}
      </Container>
    </>
  );
}