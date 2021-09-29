import axios from 'axios';


const url = 'https://interview-react-questions.herokuapp.com/questions'
export const fetchQuestions =()=> axios.get(url);

export const createQuestion = (newQuestion)=> axios.post(`${url}`,newQuestion);

export const updateQuestion = (id, updatedQuestion) => axios.patch(`${url}/${id}`, updatedQuestion);

export const deleteQuestion = (id) => axios.delete(`${url}/${id}`);

export const likeQuestion = (id) => axios.patch(`${url}/${id}/likeQuestion`);
export const disLikeQuestion = (id) => axios.patch(`${url}/${id}/disLikeQuestion`);

// export const fetchQuestion = await axios.get("http://localhost:3000/Question")
// export const createQuestion = await axios.get("http://localhost:3000/Question",newQuestion)