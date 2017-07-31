const Cupon = `
#############################################################
###  Cupon Type
#############################################################

type Cupon{
  id: ID
  name: String
	description: String
	type: [String]
	period: Period
  created_at :String
}

input CuponInput{
  name: String
	description: String
	type: [String]
	period: PeriodInput
  created_at :String
}
`

export default Cupon;

