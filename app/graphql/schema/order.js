const Order = `

#############################################################
###  Order Type
#############################################################

type Order{
  id: ID!
  barcode_id :  String
  people : Int
  checkin_time: String
	checkout_time: String
  order_menu_id: [OrderMenu]
  table_no: String,
  move_history:[String] ##
	restaurant_id: Restaurant
	total_price: Int
  #reservation_id : Reservation
}
input OrderInput{
  barcode_id :  String
  people : Int
  checkin_time: String
	checkout_time: String
  order_menu_id: [OrderMenuInput]
  table_no: String,
  move_history:[String] ##
	restaurant_id: String
	total_price: Int
  #reservation_id : ID
}

type OrderMenu{
  id: ID!,
  menu_id:  Menu,
	comment: String
	ordered_at: String
  ordered_by: User
}
input OrderMenuInput{
  menu_id: ID!,
	amount: Int
	comment: String
	ordered_at: String
  ordered_by: ID
}
`

export default Order;

