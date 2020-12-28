import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { TaskDTO } from './api/dto/task.dto';
import { TaskAPI } from './api/task.api';
import './App.css';
import { Task } from './components/Task';

function App() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  useEffect(() => {
    async function fetchAll() {
      const resp = await TaskAPI.getAll();

      setTasks(resp);
    }

    fetchAll();
  },[]);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            Task Management
          </Typography>
          <Button color="secondary" variant="contained">Create task</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={1} style={{padding: 10}}>
        {
          tasks.map(task => {
            return (
              <Grid item xs={3} key={task.id}>
                <Task data={task}/>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
}

export default App;
