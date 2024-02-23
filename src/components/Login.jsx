import { useState } from "react";
import { Alert, TextField, Button, Grid, Snackbar } from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      if (data.message) {
        setSuccess(null);
        setError("Login failed. Please check your credentials.");
      } else {
        setSuccess("Login successful!");
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setSuccess(null);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <Grid container spacing={2} alignItems="center" justify="center">
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Grid>
      {/* see https://mui.com/material-ui/react-snackbar/ */}
      {error && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          onClose={() => setError(null)}
        >
          <Alert severity="error">{error}</Alert>
        </Snackbar>
      )}
      {success && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          onClose={() => setSuccess(null)}
        >
          <Alert severity="success">{success}</Alert>
        </Snackbar>
      )}
    </Grid>
  );
}