const MenuCategory = `
#############################################################
###  MenuCategory Type
#############################################################

type MenuCategory{
  id: ID!
  name :String
  slug : String
  description : String
}
input MenuCategoryInput{
  name :String
  slug : String
  description : String
}

`

export default MenuCategory;

