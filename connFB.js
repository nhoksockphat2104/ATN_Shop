var admin = require("firebase-admin");

/*
Firebase service account
firebase-adminsdk-z72y4@webcloud-53c9b.iam.gserviceaccount.com
*/

var serviceAccount = require("./webcloud-53c9b-firebase-adminsdk-z72y4-e4bb8c3b00.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://webcloud-53c9b-default-rtdb.firebaseio.com"
});

var db = admin.database();

const ref = db.ref('/user-data');

const childref = ref.child('users');

childref.set({
	NNTu: {
		birthday: "21/4/2001",
		fullname: "HVPhat"
	}
	
});