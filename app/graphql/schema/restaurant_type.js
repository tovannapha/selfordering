const RestaurantType = `
#############################################################
###  RestaurantType Type
#############################################################

type RestaurantType{
  id: ID!
  name :String
  slug : String
  description : String
}
input RestaurantTypeInput{
  name :String
  slug : String
  description : String
}
`

export default RestaurantType;

