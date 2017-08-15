const Restaurant = `
#############################################################
###  Restaurant Type
#############################################################

type Restaurant{
  id : ID!
  name : String
  location : Location
  address : Address
  phones : [String]
  sociallinks : [Sociallinks]
  pictures : [Pictures]
  tags : [String]
  budgets : Budget
  rate : Int
  available_table_no : [String]
  reservable : String
  access : Access
  operation_days : OperationDays   ###check!
  cards : Card
  capacity : [Capacity]
  parking_lot : ParkingLot
  feature : String
  remark : String
  event_id: Event
  worker: [User]
}

input RestaurantInput{
  name : String
  location : LocationInput
  address : AddressInput
  phones: [String]
  sociallinks: [SociallinksInput]
  pictures:[PicturesInput]
  tags : [String]
  budgets : BudgetInput
  rate : Int
  available_table_no : [String]
  reservable : String
  access : AccessInput
  operation_days : OperationDaysInput
  cards : CardInput
  capacity : [CapacityInput]
  parking_lot : ParkingLotInput
  feature : String
  remark : String
  event_id: String
  worker:[String] 
}


type Location{
  x: String
  y: String
}
input LocationInput{
  x: String
  y: String
}

type Address{
  province : String
  district : String
  detail : String
}
input AddressInput{
  province : String
  district : String
  detail : String
}



type Budget{
  lowerbound: Int
  upperbound: Int
  currency: String
}
input BudgetInput{
  lowerbound: Int
  upperbound: Int
  currency: String
}

type Access{
  detail : String
} 
input AccessInput{
  detail : String
} 

type OperationDays {
  days: [String]
  time: String
}
input OperationDaysInput{
  days: [String]
  time: String
}


type Card{
  cardinfo: String
}
input CardInput{
  cardinfo: String
}


type Capacity{
  table : Int
  seats: Int
}
input CapacityInput{
  table : Int
  chairs: Int
}


type ParkingLot{
  status: String
  capacity : Int
}
input ParkingLotInput{
  status: String
  capacity : Int
}
`




export default Restaurant;