import React from 'react';
import MyTasksForm from "./MytasksForm";
import MyTasksList from "./MytasksList";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="container" maxWidth="sm">
        <Card>
          <CardContent>
            <h3>Trabalhe em suas sprints com o MyTasks!</h3>
            <MyTasksForm />
            <MyTasksList />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
