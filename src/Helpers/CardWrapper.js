import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import React from "react";

const CardWrapper = ({ children, component, onSubmit }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100&",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 500,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Stack
          textAlign="center"
          component={component}
          onSubmit={onSubmit}
          spacing={4}
          p={2}
        >
          {children}
        </Stack>
      </Card>
    </Box>
  );
};

export default CardWrapper;
