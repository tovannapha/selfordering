const Mutation = `
# The mutation root type, used to define all mutations
type Mutation {
  addRestaurant(data: RestaurantInput!) : Restaurant
  addRestaurantType(data:RestaurantTypeInput!) : RestaurantType
  addMenu(data: MenuInput!): Menu
  addMenuCategory(data: MenuCategoryInput!): MenuCategory
  addOrder(data: OrderInput!): Order
}
`

export default Mutation;

