const Rate = `
#############################################################
###  Rate Type
#############################################################
  type Rate{
    id:ID
    user_id: User
    restaurant_id: Restaurant
    rate_point: Int
    comment: String
  }

  input RateInput{
    user_id: ID!
    restaurant_id: ID!
    rate_point: Int
    comment: String
  }
`

export default Rate;

