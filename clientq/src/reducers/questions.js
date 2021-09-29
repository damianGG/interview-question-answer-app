const  questionsReducer=(questions=[],action)=>{
    switch (action.type) {
        case 'DELETE':
            return questions.filter((post) => post._id !== action.payload)
        case 'UPDATE':
            return questions.map((question)=>question._id === action.payload._id ? action.payload : question)
        case 'LIKE':
            return questions.map((question)=>question._id === action.payload._id ? action.payload : question)
        case 'DISLIKE':
                return questions.map((question)=>question._id === action.payload._id ? action.payload : question)
        case 'FETCH_ALL':
            return action.payload;           
        case 'CREATE':
            return [...questions,action.payload];
        default:
            return questions;
    }
}

export default questionsReducer;