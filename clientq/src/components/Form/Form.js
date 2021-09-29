import React,{useState,useEffect} from "react";
import useStyles from './styles'
import {TextField,Button,Typography} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {createQuestion, updateQuestion} from '../../actions/questions'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';


const Form = ({currentId,setCurrentId})=>{
    const [questionData,setQuestionData]=useState({
        question:'',answer:'',creator:'',difficulty:''
    });
    const question = useSelector((state) => currentId ? state.questions.find((p) => p._id === currentId) : null);
   const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(question) setQuestionData(question)
    },[question])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentId){
            console.log('Should be updated')
            dispatch(updateQuestion(currentId, questionData));
            clear();
        }
        else{
            dispatch(createQuestion(questionData));
            clear();
        }
        console.log(questionData)
    }


    const clear = ()=>{
            setCurrentId(0);
            setQuestionData({question:'',answer:'',creator:'',difficulty:''})
    }


    return(
        <Card elevation={12} >
            <Typography 
             variant="h6">{currentId ? `Editing "${question.question}"` : 'Creating a Question'}
            </Typography>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            {/* <Typography variant="h6">{currentId ? `Editing "${post.question}"` : 'Creating a Question'} */}
            
            <TextField 
                
                margin="dense"
                name="question" 
                required
                variant="outlined"
                label="Question"
                fullWidth
                value={questionData.question}
                onChange={(e)=>setQuestionData({...questionData, question: e.target.value})}
            />  
             <TextField 
                multiline
                rows={20}
                margin="dense"
                name="answer" 
                variant="outlined"
                label="Answer"
                fullWidth
                value={questionData.answer}
                onChange={(e)=>setQuestionData({...questionData, answer: e.target.value})}
            /> 
             <TextField 
                sx={{ m: 1, width: '25ch' }}
                margin="dense"
                name="creator" 
                variant="outlined"
                label="Creator"
                required
                fullWidth
                value={questionData.creator}
                onChange={(e)=>setQuestionData({...questionData, creator: e.target.value})}
            /> 
            
                <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>          
                <Select  
                    labelId="demo-simple-select-label"       
                    margin="dense"
                    fullWidth
                    id="select"
                    value={questionData.difficulty}
                    label="Difficulty"
                    onChange={(e)=>setQuestionData({...questionData, difficulty: e.target.value})}
                    >
                    <MenuItem value={1}>Entry</MenuItem>
                    <MenuItem value={2}>Junior</MenuItem>
                    <MenuItem value={3}>Mid</MenuItem>
                    <MenuItem value={4}>Senior</MenuItem>
                    <MenuItem value={5}>Expert</MenuItem>
                </Select>
            

            <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
            <Button onClick={clear}>Clear</Button>
            </form >

        </Card>
    );
};

export default Form;