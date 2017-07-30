const ProductType = `
#############################################################
###  ProductType Type
#############################################################
  type ProductType{
    id: ID!
    name :String
    slug : String
    description : String
  }

  input ProductTypeInput{
    name :String
    slug : String
    description : String
  }
`

export default ProductType;

