const admin = require("firebase-admin");

const serviceAccount = require("./selfordering-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://selfordering-cafc3.firebaseio.com"
});


module.exports.checkToken = (req, res, next) => {
	// GET firebase's TokenId from req header
	var tokenId = req.get("TokenId")

	// Verify tokenId
	admin.auth().verifyIdToken(tokenId)	
	  .then(function(decodedToken) {
	    // Attach decodedToken(user object) in to req.user
	    req.user = decodedToken

	    next()

	  }).catch(function(error) {
	    res.send("Invalid Token")
	  });
	 
}
