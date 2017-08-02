const Cupon = `
#############################################################
###  Cupon Type
#############################################################

type Cupon{
  id: ID
  name: String
	description: String
	cupon_type:[CuponType]
	period: Period
  created_at :String
}
#######added#####
type CuponType{
	x:String
	y:String
}

input CuponInput{
  name: String
	description: String
	cupon_type: [CuponTypeInput]
	period: PeriodInput
  created_at :String
}
input CuponTypeInput{
	x:String
	y:String
}
`

export default Cupon;

