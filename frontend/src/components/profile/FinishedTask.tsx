import React from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { ProfileTasksInterface } from "../../core/store/interfaces/auth"
import { Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const FinishedTask: React.FC<ProfileTasksInterface> = ({ item }) => {
  return (
    <Card style={{ marginBottom: "50px", maxWidth: "700px" }}>
      <CardContent style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
        <Typography variant="h4">{item.title}</Typography>
        <img src={"https://myoceanmathserver.herokuapp.com/files/" + item.src} style={{maxWidth: "300px", objectFit: "cover"}} />
        <Alert variant="filled">Правильный ответ: {item.answer}</Alert>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}

export default FinishedTask