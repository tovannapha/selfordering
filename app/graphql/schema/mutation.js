const Mutation = `
# The mutation root type, used to define all mutations
type Mutation {
  addRestaurant(data: RestaurantInput!) : Restaurant
  editRestaurant(id:ID data:RestaurantInput): Restaurant

  addRestaurantType(data:RestaurantTypeInput!) : RestaurantType
  editRestaurantType(id:ID  data:RestaurantTypeInput!) : RestaurantType

  addEvent(data:EventInput):Event
  editEvent(id:ID data:EventInput):Event

  addMenu(data: MenuInput!): Menu
  editMenu(id:ID data: MenuInput!): Menu

  addMenuCategory(data: MenuCategoryInput!): MenuCategory
  editMenuCategory(id:ID data: MenuCategoryInput!): MenuCategory

  addOrder(data: OrderInput!): Order
  editOrder(id:ID data: OrderInput!): Order

  addUser(data:UserInput):User
  editUser(id:ID  data:UserInput):User

  addCupon(data:CuponInput):Cupon
  editCupon(id:ID data:CuponInput):Cupon

  addReview(data:ReviewInput):Review
  editReview(id:ID  data:ReviewInput):Review

  addRate(data:RateInput):Rate
  editRate(id:ID data:RateInput):Rate

  addExpenditure(data:ExpenditureInput):Expenditure
  editExpenditure(id:ID data:ExpenditureInput):Expenditure

  addProduct(data:ProductInput):Product
  editProduct(id:ID data:ProductInput):Product

  addProductType(data:ProductTypeInput):ProductType
  editProductType(id:ID data:ProductTypeInput):ProductType

  addReservation(data:ReservationInput):Reservation
  editReservation(id:ID data:ReservationInput):Reservation
}
`

export default Mutation;

