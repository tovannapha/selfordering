const Mutation = `
# The mutation root type, used to define all mutations
type Mutation {
  addRestaurant(data: RestaurantInput!) : Restaurant
  editRestaurant(id:ID data:RestaurantInput): Restaurant
  deleteRestaurant(id:ID): Restaurant

  addRestaurantType(data:RestaurantTypeInput!) : RestaurantType
  editRestaurantType(id:ID  data:RestaurantTypeInput!) : RestaurantType
  deleteRestaurantType(id:ID) : RestaurantType

  addEvent(data:EventInput):Event
  editEvent(id:ID data:EventInput):Event
  deleteEvent(id:ID):Event

  addMenu(data: MenuInput!): Menu
  editMenu(id:ID data: MenuInput!): Menu
  deleteMenu(id:ID): Menu

  addMenuCategory(data: MenuCategoryInput!): MenuCategory
  editMenuCategory(id:ID data: MenuCategoryInput!): MenuCategory
  deleteMenuCategory(id:ID): MenuCategory

  addOrder(data: OrderInput!): Order
  editOrder(id:ID data: OrderInput!): Order
  deleteOrder(id:ID): Order

  addUser(data:UserInput):User
  editUser(id:ID  data:UserInput):User
  deleteUser(id:ID):User

  addCupon(data:CuponInput):Cupon
  editCupon(id:ID data:CuponInput):Cupon
  deleteCupon(id:ID):Cupon

  addReview(data:ReviewInput):Review
  editReview(id:ID  data:ReviewInput):Review
  deleteReview(id:ID):Review

  addRate(data:RateInput):Rate
  editRate(id:ID data:RateInput):Rate
  deleteRate(id:ID):Rate

  addExpenditure(data:ExpenditureInput):Expenditure
  editExpenditure(id:ID data:ExpenditureInput):Expenditure
  deleteExpenditure(id:ID):Expenditure

  addProduct(data:ProductInput):Product
  editProduct(id:ID data:ProductInput):Product
  deleteProduct(id:ID):Product

  addProductType(data:ProductTypeInput):ProductType
  editProductType(id:ID data:ProductTypeInput):ProductType
  deleteProductType(id:ID):ProductType

  addReservation(data:ReservationInput):Reservation
  editReservation(id:ID data:ReservationInput):Reservation
  deleteReservation(id:ID):Reservation

  addAcl(data:AclInput):Acl
  editAcl(id:ID data:AclInput):Acl
  deleteAcl(id:ID data:AclInput):Acl
}
`

export default Mutation;

