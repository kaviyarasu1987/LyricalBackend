const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccount.json');

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(serviceAccount, 'https://musicbox-b9c5e.firebaseio.com');
    console.log('Firebase Initialized');

    await firestoreService.restore('./Album.json');
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
