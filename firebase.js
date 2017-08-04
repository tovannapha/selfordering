const admin = require("firebase-admin");

const serviceAccount = require("./selfordering-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://selfordering-cafc3.firebaseio.com"
});


module.exports.checkToken = async (req, res, next) => {
	// GET firebase's TokenId from req header
	//var tokenId = req.get("TokenId")
	var tokenId = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImIyYmRjZDkyNGZhNWI1ZThhYjkwNTQ3M2ZjZTYxMGU3MWU0MjJlNmQifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2VsZm9yZGVyaW5nLWNhZmMzIiwibmFtZSI6IlRPeHggVE94eCDjg4jjg7zjg4jjg7wiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zY29udGVudC54eC5mYmNkbi5uZXQvdi90MS4wLTEvcDEwMHgxMDAvMTIyNDY3ODZfMTE5MDkxODUyMDkyMjk0N183NDEyMzI2NTc4NjI2NTI0NDY3X24uanBnP29oPTQ3NTVlYmM3ZTFlZjNiYzIzMzZkOGVkYTI1Yzg3ZDMyJm9lPTVBMDhBMTczIiwiYXVkIjoic2VsZm9yZGVyaW5nLWNhZmMzIiwiYXV0aF90aW1lIjoxNTAxNjgzNDcyLCJ1c2VyX2lkIjoidzc3RENGZkxNaVhBYksyR0tPQUxxS0lXZERNMiIsInN1YiI6Inc3N0RDRmZMTWlYQWJLMkdLT0FMcUtJV2RETTIiLCJpYXQiOjE1MDE2ODM0NzIsImV4cCI6MTUwMTY4NzA3MiwiZW1haWwiOiJ0b192YW5uYXBoYTRAeWFob28uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImZhY2Vib29rLmNvbSI6WyIxNzg2NTA0NzExMzY0MzIyIl0sImVtYWlsIjpbInRvX3Zhbm5hcGhhNEB5YWhvby5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJmYWNlYm9vay5jb20ifX0.iGiOkyIKBfqdfVJtkvAlN3nqtza0q6RuTJ4Ufqyock31ApJq6PUsRdYAQC6PC2U6bUawxHhmILE7kc2L1FMmkVYY8gNlZAo75_8exdaM5HYKF5ue4eXkyvsUAcD01jW0_hPdzul83Ccw-fzebQHUm7WMb1fUNNqXlHj-YRVHJJhqT3ynWRQ1N9eDw1o7cqBefY-rrkMhNkLFRMahA80X8mT5q6JKi53-YlN94lzjfSYtKaV-pwemvx5w5I4zzdDR03xqGzl1-Iaf0GrtJbna2JW1W3tAKZFWhDj-NbYO80-1JSHy63bWPxWOLw40YHlAGW6yblpANSqHCCoRpurkQw"
	// Verify tokenId
	if(tokenId){
	await admin.auth().verifyIdToken(tokenId)	
	  .then(function(decodedToken) {
	    // Attach decodedToken(user object) in to req.user
	    req.user = decodedToken

	    console.log(decodedToken)
	  }).catch(function(error) {
	    //console.log("No user detail")
	    req.user = "NULL"
	  })
	}else{
	 req.user = "NULL"
	}

	next()
	 
}
