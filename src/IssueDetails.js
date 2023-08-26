// src/IssueDetails.js

import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const IssueDetails = ({ issue }) => {
  return (
    <Container style={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom>
        Issue Details
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <Typography variant="h6">Issue Key: {issue.key}</Typography>
        <Typography variant="body1">Type: {issue.fields.issuetype.name}</Typography>
        <Typography variant="body1">Description: {issue.fields.issuetype.description}</Typography>
        <Typography variant="body1">Status: {issue.fields.status.name}</Typography>
        <Typography variant="body1">Priority: {issue.fields.priority.name}</Typography>
        <Typography variant="body1">Assignee: {issue.fields.assignee.displayName}</Typography>
        <Typography variant="body1">Reporter: {issue.fields.reporter.displayName}</Typography>
        {/* Add more fields as needed */}
      </Paper>
    </Container>
  );
};

export default IssueDetails;
