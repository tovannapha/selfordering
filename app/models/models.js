'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


/*
	restaurant schema
*/
const restaurant_schema = new Schema({
	name: String,
	type: { type: ObjectId, ref: "RestaurantType" },
	location: { x: String, y: String },
	address: { province: String, district: String, detail: String },
	phones: [String],
	sociallinks: [{
		sns_type:String,
		link:String
	}],
	pictures: [{
		filename:String,
		picURL:String
	}],
	tags: [String],
	budgets: { lowerbound: Number, upperbound: Number, currency: String },
	rate: Number,
	available_table_no: [String],
	reservable: Boolean,
	access: [{ detail: String }],
	operation_days: {days:[String],time:String},			// need more detail
	cards: {cardinfo:String},
	capacity: { tables: Number,seats: Number },
	parking_lot: { status: Boolean, capacity: Number },
	feature: String,
	remark: String,
	event_id:{type:ObjectId,ref:"RestaurantEvent"},
})
/*
	restaurant_event Schema
*/
const restaurant_event_schema = new Schema({
	user_id:{type:ObjectId,ref:"User"},
	period:{fromDate:String,toDate:String},
	name:String,
	pictures: [{
		filename:String,
		picURL:String
	}],
	details:String,
	status:Boolean,
	comment:String,
	process_date:String
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
	category: [{
		type:ObjectId,ref:"Menu_category"
	}],
	pictures: [{
		filename:String,
		picURL:String
	}],
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
	status:String,
	people: Number,
	checkin_time: Date,
	checkout_time: Date,
	order_menu_id:[{type:ObjectId,ref:"OrderMenu"}],
	table_no: String,
	move_history:[Object],
	restaurant_id: {type: ObjectId, ref: "Restaurant"},
	total_price: Number,
	reservation_id:{type:ObjectId,ref:"Reservation"}
})

/*
	Order_menu Schema
*/
const order_menu_schema = new Schema({
	menu_id:[{
		type:ObjectId,ref:"Menu"
	}],
	comment:String,
	ordered_at:Date,
	ordered_by:{type:ObjectId,ref:"User"}
})

/*
	User schema
*/
const user_schema = new Schema({
	_id: Schema.Types.ObjectId,		// To create custom _id
	firebase_uid:String,
	user_uuid: String,
	name: String,
	fullname: String,
	birthday:Date,
	password: String,
	email: String,
	phonenumber: String,
	last_login: Date,
	social_login: [{
		sns_type:String,
		link: String,
	}],
	level:String,
	secret: String,
	created_at:Date
})


/*
	owner or Employee schema
*/
const ownerOrEmployee_schema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	password: String,
	email: String,
	phonenumber: [String],
	employee_id: String,
	last_login: Date,
	restaurant_id: {type: ObjectId, ref: "Restaurant"},
	position: Object,
	social_login: [String]
})


/*
	cupon schema
*/
const cupon_schema = new Schema({
	name: String,
	description: String,
	type: [Object],
	period: { fromDate: Date, toDate: Date},
	created_at:Date
})


/*
	review schema
*/
const review_schema = new Schema({
	user_id: {type: ObjectId, ref: "User"},
	restaurant_id: {type: ObjectId, ref: "Restaurant"},
	review_detail: String,
	created_at:Date
})


/*
	rate schema
*/
const rate_schema = new Schema({
	user_id: {type: ObjectId, ref: "User"},
	restaurant_id: {type: ObjectId, ref: "Restaurant"},
	rate_point: Number,
	comment: String,
	created_at:Date
})

/*expenditure Schema*/

const expenditure_schema = new Schema({
	restaurant_id:{type:ObjectId,ref:"Restaurant"},
	purchase_date:Date,
	product_id:{type:ObjectId,ref:"ProductType"},
	process_date:Date,
	process_by:{type:ObjectId,ref:"User"},
	comment:String
})

/*product Schema*/
const product_schema= new Schema({
	name:String,
	price:Number,
	amount:Number,
	pictures: [{
		filename:String,
		picURL:String
	}],
	type:{type:ObjectId,ref:"product_type"},
	expire_date:Date,
	created_date:Date,
	added_by:{type:ObjectId,ref:"User"},
	restaurant_id:{type:ObjectId,ref:"Restaurant"}
})

/* product_type Schema*/

const product_type_schema= new Schema({
	name:String,
	slug:String,
	description:String
})


/* Reservation schema*/

const reservation_schema = new Schema({
	restaurant_id:{type:ObjectId,ref:"Restaurant"},
	user_id:{type:ObjectId,ref:"User"},
	nonuser_info:{
		phone:String,
		name:String
	},
	people:Number,
	menus:[{
		type:ObjectId,ref:"OrderMenu"
	}],
	comment:String,
	reserve_time:{
		timeFrom:Date,
		timeTo:Date
	},
	process_time:Date,
	created_at:Date
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
//added model
module.exports.OrderMenu = mongoose.model("OrderMenu",order_menu_schema,"OrderMenu")
module.exports.RestaurantEvent = mongoose.model("RestaurantEvent",restaurant_event_schema,"RestaurantEvent")
module.exports.Expenditure = mongoose.model("Expenditure",expenditure_schema,"Expenditure")
module.exports.Product = mongoose.model("Product",product_schema,"Product")
module.exports.ProductType= mongoose.model("ProductType",product_type_schema,"ProductType")
module.exports.Reservation = mongoose.model("Reservation",reservation_schema,"Reservation")
