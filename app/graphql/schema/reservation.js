const Reservation = `
#############################################################
###  Reservation Type
#############################################################

type Reservation{
    id:ID
	restaurant_id:Restaurant
	user_id:User
	nonuser_info:nonuserInto
	people:Int
	menus:[Menu]
	comment:String
	reserve_time:Period
	process_time:String
	created_at:String
}
input ReservationInput{
	restaurant_id:String
	user_id:String
	nonuser_info:nonuserIntoInput
	people:Int
	menus:[String]
	comment:String
	reserve_time:PeriodInput
	process_time:String
	created_at:String
}


type nonuserInto{
    phone:String,
	name:String
}
input nonuserIntoInput{
    phone:String,
	name:String
}

`

export default Reservation;
