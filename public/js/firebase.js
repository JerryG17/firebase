var config = {
    apiKey: "AIzaSyDSQnJksIbrayLWBunQpjOQCMhsbcR-YEM",
    authDomain: "tel-hub.firebaseapp.com",
    databaseURL: "https://tel-hub.firebaseio.com",
    projectId: "tel-hub",
    storageBucket: "tel-hub.appspot.com",
    messagingSenderId: "377189389362"
};
firebase.initializeApp(config);

const provider = new firebase.auth.FacebookAuthProvider();
const auth = firebase.auth();

//auth state changed
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        signedIn(user);
    } else {
        console.log('No hay usuario');
        signedOut();
    }
});