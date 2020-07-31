export {fetchQuestion, fetchQuestions}

const fetchQuestions = async () =>{
    return fetch(`http://localhost:8080/api/questions/`)
        .then((response)=>
            response.json()
    );
}

const fetchQuestion = async (id) =>{
    return fetch(`http://localhost:8080/api/questions/${id}`)
        .then((response)=>
            response.json()
    );
}