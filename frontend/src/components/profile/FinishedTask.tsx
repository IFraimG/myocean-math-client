import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { ProfileTasksInterface } from "../../core/store/interfaces/auth";
import { Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { SERVER_URLS } from "../../core/constants/urls";

const FinishedTask: React.FC<ProfileTasksInterface> = ({ item }) => {
  return (
    <Card style={{ marginBottom: "50px", width: "100%" }}>
      <CardContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <Typography variant="h6">{item.title}</Typography>
          <img
            src={`${SERVER_URLS.FILES_URL}/${item.src}`}
            style={{ maxWidth: "300px", objectFit: "cover" }}
          />
        </div>
        <Alert variant="outlined">Правильный ответ: {item.answer}</Alert>
      </CardContent>
    </Card>
  );
};

export default FinishedTask;
