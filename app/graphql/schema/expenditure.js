const Expenditure = `
#############################################################
###  Expenditure Type
#############################################################
  type Expenditure{
    id:ID
    restaurant_id:Restaurant
		purchase_date:String
		product_id:Product
		process_date:String
		process_by:User
		comment:String
  }

  input ExpenditureInput{
    restaurant_id:String
		purchase_date:String
		product_id:String
		process_date:String
		process_by:String
		comment:String
  }
`

export default Expenditure;

