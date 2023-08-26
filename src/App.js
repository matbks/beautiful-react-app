import React from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

function App() {
  const mockData = [
    { id: 1, issue: "Issue 1", description: "Description for issue 1" },
    { id: 2, issue: "Issue 2", description: "Description for issue 2" },
    // ... add more mock data as needed
  ];

  return (
    <Container style={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom>
        Mocked Issues Table
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Issue</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.issue}</TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;
