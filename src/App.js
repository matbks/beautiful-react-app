// src/App.js

import React, { useState } from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import IssueDetails from './IssueDetails';

function App() {
  const mockData = [
    // ... (your existing mock data)
  ];

  const [selectedIssue, setSelectedIssue] = useState(null);

  if (selectedIssue) {
    return <IssueDetails issue={selectedIssue} />;
  }

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
              <TableRow key={row.id} onClick={() => setSelectedIssue(row)}>
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
