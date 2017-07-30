const User = `
#############################################################
###  User Type
#############################################################

type User{
  id: ID!
  _id: ID
  firebase_uid:String
  user_uuid: String
  name: String
  fullname: String
  birthday:String
  password: String
  email: String
  phonenumber: String
  last_login: String
  social_login: [Sociallinks],
  level:String
  secret: String
  created_at:String
}

input UserInput{
  id: ID!
  _id: ID
  firebase_uid:String
  user_uuid: String
  name: String
  fullname: String
  birthday:String
  password: String
  email: String
  phonenumber: String
  last_login: String
  social_login: [SociallinksInput],
  level:String
  secret: String
  created_at:String
}
`

export default User;

