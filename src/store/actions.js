export const setActiveLink = (link) => {
    return {
        type: 'SET_ACTIVE_LINK',
        payload: link
    }
};
export const removeStudent = (id) => {
    return {
        type: 'REMOVE_STUDENT',
        payload: id
    }
};

export const addNewStudent = (name, className, grade, score, result) => {
    let id = Date.now() 
    return {
        type: 'ADD_NEW_STUDENT',
        payload: {id, name, className, grade, score, result}
    }
}
export const updateStudent = (id, name, className, grade, score, result) => {
    return {
        type: 'UPDATE_STUDENT',
        payload: {id, name, className, grade, score, result}
    }
}