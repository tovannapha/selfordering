const Product = `
#############################################################
###  Product Type
#############################################################
  type Product{
    id:ID
	name:String
	price:Int
	amount:Int
	pictures: [Pictures]
	product_type: ProductType
	expire_date:String
	created_date:String
	added_by:User
	restaurant_id:Restaurant
  }

  input ProductInput{
    name:String
		price:Int
		amount:Int
		pictures: [PicturesInput]
		product_type: String
		expire_date:String
		created_date:String
		added_by:String
		restaurant_id:String
  }
`

export default Product;

