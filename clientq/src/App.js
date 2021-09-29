import React,{useState,useEffect} from "react";
import {Container,AppBar,Typography,Grow,Grid}
from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getQuestions} from './actions/questions.js';
import Questions from "./components/Questions/Questions.js";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import AddIcon from '@mui/icons-material/Add';
import {Button} from '@material-ui/core';



const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [visible, setVisible] = React.useState(false);
 

    useEffect(() => {
        dispatch(getQuestions());
      }, [currentId, dispatch]);

    return ( 
     <Container maxidt='lg'>
         <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className='classesName.heading' variant="h2" align="center">Question&Answer</Typography>
         </AppBar>
         <Grow in>
             <Container>    
                 <Grid>
                     <Button fontSize="large" onClick={() => setVisible(!visible)}>
                         {visible ? 'Hide form' : <AddIcon fontSize="large"/>}       
                    </Button>
                    {visible && 
                    <Grid>
                        <Form id="mainForm" currentId={currentId} setCurrentId={setCurrentId}/>                       
                    </Grid>
                    }
                    <Grid >
                        <Questions setCurrentId={setCurrentId}/>                      
                    </Grid>
                 </Grid>
             </Container>
         </Grow>
     </Container>
    );
}


export default App;