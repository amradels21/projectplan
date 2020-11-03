export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        //make async call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstname: profile.firstname,
            authorLastname: profile.lastname,
            authorId: authorId,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project: project
            });
        })
        .catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err: err
            });
        })
      
    } 
}