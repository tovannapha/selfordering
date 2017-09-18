const Acl =`
	#############################################################
###  Acl type
#############################################################
type Acl{
	id:ID
	app_name:String
	role:String
	resource:[AclResources]
	action: String
	attributes:[String]
	description:String
	code:String
	created_user:User
	updated_date:String
	created_date:String
}

input AclInput{
	id:ID
	app_name:String
	role:String
	resource:[String]
	action: String
	attributes:[String]
	description:String
	code:String
	created_user:String
	updated_date:String
	created_date:String
}

type AclResources{
	id:ID
	app_name:String
	resource_name:String
	backfront: String
	description:String
	code:String
	created_user:User
	updated_date:String
	created_date:String
}

input AclResourcesInput
{
	id:ID
	app_name:String
	resource_name:String
	backfront: String
	description:String
	code:String
	created_user:String
	updated_date:String
	created_date:String
}

`

export default Acl;