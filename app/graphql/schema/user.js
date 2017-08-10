const User = `
#############################################################
###  User Type
#############################################################

type User{
  id: ID
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
  social_login: [Sociallinks]
  secret: String
  created_at:String
  level:[Acl]
  working_restaurant:[WorkingRestaurant]
}

type WorkingRestaurant{
  position:Acl
  restaurant_id:Restaurant
}

input UserInput{
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
  social_login: [SociallinksInput]
  secret: String
  created_at:String
  level:String
  working_restaurant:[WorkingRestaurantInput]
}

input WorkingRestaurantInput{
  position:String
  restaurant_id:String
}

`

export default User;

