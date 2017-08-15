const Menu = `
#############################################################
###  Menu Type
#############################################################

type Menu{
  id: ID
  restaurant_id : Restaurant
  name :String
  category: [MenuCategory]
  pictures : [Pictures]
  price: Int
  currency: String
  description : String
  discount : String  ##Check!!
}
input MenuInput{
  restaurant_id : ID!
  name :String
  category: [String]
  pictures : [PicturesInput]
  price: Int
  currency: String
  description : String
  discount : String  ##Check!!
}
`

export default Menu;

