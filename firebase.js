const admin = require("firebase-admin");

const serviceAccount = require("./selfordering-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://selfordering-cafc3.firebaseio.com"
});


module.exports.checkToken = async (req, res, next) => {
	// GET firebase's TokenId from req header
	//var tokenId = req.get("TokenId")
	var tokenId = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk5YmY1YTM4NWE3YmFiZGFiNTkwMDA4OTM2YjJlNjc2ZGFiMzgxNTkifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2VsZm9yZGVyaW5nLWNhZmMzIiwibmFtZSI6IlRPeHggVE94eCDjg4jjg7zjg4jjg7wiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zY29udGVudC54eC5mYmNkbi5uZXQvdi90MS4wLTEvcDEwMHgxMDAvMTIyNDY3ODZfMTE5MDkxODUyMDkyMjk0N183NDEyMzI2NTc4NjI2NTI0NDY3X24uanBnP29oPTQ3NTVlYmM3ZTFlZjNiYzIzMzZkOGVkYTI1Yzg3ZDMyJm9lPTVBMDhBMTczIiwiYXVkIjoic2VsZm9yZGVyaW5nLWNhZmMzIiwiYXV0aF90aW1lIjoxNTAxMjUzMTc5LCJ1c2VyX2lkIjoidzc3RENGZkxNaVhBYksyR0tPQUxxS0lXZERNMiIsInN1YiI6Inc3N0RDRmZMTWlYQWJLMkdLT0FMcUtJV2RETTIiLCJpYXQiOjE1MDEzMzkzMzEsImV4cCI6MTUwMTM0MjkzMSwiZW1haWwiOiJ0b192YW5uYXBoYTRAeWFob28uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImZhY2Vib29rLmNvbSI6WyIxNzg2NTA0NzExMzY0MzIyIl0sImVtYWlsIjpbInRvX3Zhbm5hcGhhNEB5YWhvby5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJmYWNlYm9vay5jb20ifX0.I7RWlPyLLKKGBTYOT19i646Gb7DzYjMTrnaJag8JoOJueab7LyRvHnzCdzmWy_tGyWZg_aN_sQZCay5OG24EzRUC_v6VFXRPV2AkCGFQgzW2s9GW-qzTydfrQNym0GPsCZtx5gevJGPO0enlaayO7r8_niwiS_E4nxEjdkfpHiuB6PQYEBL8GvcGBHXnZxZRjQ6_Wqr7sYowl8S-ozaG1osuTbDxS8fWbco9Fe19NHAd-eXMVF9Zx_nl57e_LgO8xTfs88d8inzDhw5hX6tI6mdIj5ufNWuPUwuUFWYOx65rmL5Sx9OL-hAypg3uckXImbjOnPXL5ir_cL5tjelclw"

	// Verify tokenId
	if(tokenId){
	await admin.auth().verifyIdToken(tokenId)	
	  .then(function(decodedToken) {
	    // Attach decodedToken(user object) in to req.user
	    req.user = decodedToken

	    
	  }).catch(function(error) {
	    console.log("No user detail")
	    req.user = "NULL"
	  })
	}else{
	 req.user = "NULL"
	}

	next()
	 
}
