import * as api from '../api/index';

export const getQuestions = ()=> async(dispatch)=> {
        try {
            const {data} = await api.fetchQuestions();
            dispatch({type:'FETCH_ALL',payload:data});
        } catch (error) {
            console.log(error.message)
        }
}



export const createQuestion = (question) => async (dispatch) => {
    try {
      const { data } = await api.createQuestion(question);
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };


  export const updateQuestion = (id, question) => async (dispatch) => {
    try {
      const { data } = await api.updateQuestion(id, question);
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteQuestion = (id) => async (dispatch) => {
    try {
       await api.deleteQuestion(id);
       dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  export const likeQuestion = (id) => async (dispatch) => {
    try {
      const { data } = await api.likeQuestion(id);
  
      dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const disLikeQuestion = (id) => async (dispatch) => {
    try {
      const { data } = await api.disLikeQuestion(id);
  
      dispatch({ type: 'DISLIKE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
 
 