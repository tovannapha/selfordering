const Acl =`
	#############################################################
###  Acl type
#############################################################
type Acl{
	id:ID
	role:String
	resource:[String]
	action: String
	attributes:[String]
	updated_date:String
}

input AclInput{
	id:ID
	role:String
	resource:[String]
	action:String
	attributes:[String]
	updated_date:String
}

`

export default Acl;