import React from 'react';
import { TaskDTO } from '../api/dto/task.dto';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

interface Props {
    data: TaskDTO;
}

export const Task = ({data}: Props) => {
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                {data.title}
                </Typography>
                <Typography variant="body2" component="p">
                {data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Container>
                    <Button size="small" variant="contained" color="primary">Edit</Button>
                    <Button size="small" variant="contained" color="secondary" style={{marginLeft: 10}}>Delete</Button>
                </Container>
            </CardActions>
        </Card>
    )
}
