import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

function DashboardPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Card 1</Typography>
              <Typography variant="body2">Content for Card 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Card 2</Typography>
              <Typography variant="body2">Content for Card 2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Card 3</Typography>
              <Typography variant="body2">Content for Card 3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DashboardPage;
