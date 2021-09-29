import React from 'react';
import { Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import {deleteQuestion,likeQuestion,disLikeQuestion} from '../../../actions/questions.js';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Question = ({question,setCurrentId})=>{
    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState(false);
   

    return(
      
        <Paper sx={{ maxWidth: 1028, my: 1, mx: 'auto', p: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
              <Grid item xs={10}>
                <Typography variant="h6" align="center"> {question.question} </Typography>  
              </Grid>
            <Grid item xs={2}>
              <Rating size="small" name="read-only" value={question.difficulty}readOnly/>
            </Grid>

            <Button size="large" color="primary" onClick={()=>dispatch(likeQuestion(question._id))}>
                <KeyboardArrowUpIcon fontSize="large"/>
                   {question.likeCount}
            </Button>
            <Button size="large" color="primary" onClick={()=>dispatch(disLikeQuestion(question._id))}>
                <KeyboardArrowDownIcon fontSize="large"/>
            </Button>
            <Button size="small" color="primary" onClick={()=>dispatch(deleteQuestion(question._id))}>
                <DeleteIcon fontSize="small"/>
            </Button>
            <Button  size="small" onClick={() => setCurrentId(question._id)}>
                <EditIcon fontSize="small"/>
            </Button>
            <Button onClick={() => setVisible(!visible)}>
                  {visible ? 'Hide answer' : 'Show me answer'}
            </Button>
              {visible &&
            <Grid item xs={10} >
             <Typography variant="subtitle1" align="center" style={{ wordWrap: 'break-word' }}> {question.answer}</Typography>
            </Grid>
            }
          </Grid>
          </Box>
        </Paper>
    )
}

export default Question;