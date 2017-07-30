const Review = `
#############################################################
###  Review Type
#############################################################

type Review{
  id:ID!
  user_id: User
  restaurant_id: Restaurant
  review_detail: String
}

input ReviewInput{
  id:ID!
  user_id: ID!
  restaurant_id: ID!
  review_detail: String
}


`

export default Review;

