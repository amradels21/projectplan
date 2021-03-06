const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Universe!");
});

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then( doc => console.log('notification added', doc));
}

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${project.authorFirstname} ${project.authorLastname}`,
            time: admin.firestore.FieldValue.serverTimestamp() 
        };
    return createNotification(notification);
});

exports.newUserJoin = functions.firestore
    .document('users/{userID}')
    .onCreate((snap, context) => {
        const user = snap.data();
        const displayName = `${user.firstname} ${user.lastname}`;   
        console.log(user, 'user');
        
        const noftification = {
            content: 'New user join our party',
            user: displayName ,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
    return createNotification(noftification);
});