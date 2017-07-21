'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


/*
	restaurant schema
*/
const restaurant_schema = new Schema({
	name: String,
	location: { x: String, y: String },
	type: { type: ObjectId, ref: "RestaurantType" },
	address: { province: String, district: String, detail: String },
	phones: [String],
	socillinks: [String],
	pictures: [String],
	tags: [String],
	budgets: { lowerbound: Number, upperbound: Number, currency: String },
	rate: Number,
	available_table_no: [String],
	reservable: Boolean,
	access: [{ detail: String }],
	operation_days: Object,			// need more detail
	cards: Object,
	capacity: { tables: Number, chairs: Number },
	parking_lot: { status: Boolean, capacity: Number },
	feature: String,
	remark: String
})


/*
	restaurant type
*/
const restaurant_type_schema = new Schema({
	name: String,
	slug: String,
	description: String
})


/*
	menu schema
*/
const menu_schema = new Schema({
	restaurant_id: {type: ObjectId, ref: "Restaurant"},
	name: String,
	category: [String],
	pictures: [String],
	price: Number,
	currency: String,
	description: String,
	discount: Object
})


/*
	menu category schema
*/
const menu_category_schema = new Schema({
	name: String,
	slug: String,
	description: String
})


/*
	order schema
*/
const order_schema = new Schema({
	barcode_id: String,
	people: Number,
	checkin_time: Date,
	checkout_time: Date,
	menus: [{
		menu_id: {type: ObjectId, ref: "Menu"},
		amount: Number,
		comment: String,
		ordered_at: Date,
		ordered_by: { isEmployee: Boolean, orderer_id: String },
	}],
	table_no: String,
	restaurant_id: {type: ObjectId, ref: "Restaurant"},
	total_price: Number
})



/*
	User schema
*/
const user_schema = new Schema({
	_id: Schema.Types.ObjectId,		// To create custom _id
	name: String,
	fullname: String,
	password: String,
	email: String,
	user_uuid: String,
	phonenumber: String,
	last_login: Date,
	social_login: [String],
	secret: String
})


/*
	owner or Employee schema
*/
const ownerOrEmployee_schema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	password: String,
	email: String,
	phonenumber: String,
	employee_id: String,
	last_login: Date,
	restaurant_id: {type: ObjectId, ref: "Restaurant"},
	position: Object,
	social_login: [String],
	phonenumber: String
})


/*
	cupon schema
*/
const cupon_schema = new Schema({
	name: String,
	description: String,
	type: [String],
	period: { fromDate: String, toDate: String}
})


/*
	review schema
*/
const review_schema = new Schema({
	user_id: {type: ObjectId, ref: "User"},
	restaurant_id: {type: ObjectId, ref: "Restaurant"},
	review_detail: String,
})


/*
	rate schema
*/
const rate_schema = new Schema({
	user_id: {type: ObjectId, ref: "User"},
	restaurant_id: {type: ObjectId, ref: "Restaurant"},
	rate_point: Number,
	comment: String
})



/*********************
	Models
***********************/
module.exports.Restaurant = mongoose.model("Restaurant", restaurant_schema, "Restaurant")
module.exports.RestaurantType = mongoose.model("RestaurantType", restaurant_type_schema, "RestaurantType")
module.exports.Menu = mongoose.model("Menu", menu_schema, "Menu")
module.exports.Menu_category = mongoose.model("Menu_category", menu_schema, "Menu_category")
module.exports.Order = mongoose.model("Order", order_schema, "Order")
module.exports.User = mongoose.model("User", user_schema, "User")
module.exports.OwnerOrEmployee = mongoose.model("OwnerOrEmployee", ownerOrEmployee_schema, "OwnerOrEmployee")
module.exports.Cupon = mongoose.model("Cupon", cupon_schema, "Cupon")
module.exports.Review = mongoose.model("Review", review_schema, "Review")
module.exports.Rate = mongoose.model("Rate", rate_schema, "Rate")

















