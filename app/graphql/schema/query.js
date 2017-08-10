const Query = `
# This type specifies the entry points into our API
type Query {
  restaurants: [Restaurant]
  restaurant(id: ID!) : Restaurant
  restaurant_types: [RestaurantType]
  restaurant_type(id: ID!): RestaurantType
  events: [Event]
  event(id: ID!): Event
  menus :[Menu]
  menu(id: ID!) : Menu
  menu_categories : [MenuCategory]
  menu_category(id: ID!) : MenuCategory
  orders: [Order]
  order(barcode_id: ID!): Order
  users: [User]
  user(id: ID!) : User
  cupons : [Cupon]
  cupon(id: ID!): Cupon
  reviews: [Review]
  review(id : ID!): Review
  rate(id : ID!): Rate
  expenditures: [Expenditure]
  expenditure(id : ID!): Expenditure
  products :[Product]
  product(id : ID!) : Product
  product_types :[ProductType]
  product_type(id : ID!) :ProductType
  reservations : [Reservation]
  reservation(id : ID!) : Reservation
  acls:[Acl]
  acl(id:ID!):Acl
}
`

export default Query;

