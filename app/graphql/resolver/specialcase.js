var User = require('../../models/models').User
var Review = require('../../models/models').Review
var Rate = require('../../models/models').Rate
import ac from './acl';
import * as _ from "lodash"

exports.checkLevel = (user, restaurant_id) => {
	var lv
	//console.log("user-lever:",user.level)
	if(user.level == "RESTAURANT"){
	    lv = _.find(user.working_restaurant,{'restaurant_id':restaurant_id})
	}else{
	    lv = { position: user.level }
			//console.log("lv:",lv)
	}
	return lv
}

exports.case1 = async  function (user,route,restaurant_id){

	var lv;

	if(user.level == "RESTAURANT"){
	    lv = _.find(user.working_restaurant,{'restaurant_id': restaurant_id})
	}else{
	    lv = { position: user.level }
	}
	console.log("case1",lv)
	if(lv){
		var permission = ac.can(lv.position).readAny(route);
		return permission.granted;
	}else{
		return false
	}
}


exports.case2 = (user, accessroute, restaurant_id) => {
	var collection = ""
	// Define which collection
	if (accessroute.indexOf("Review") >= 0){
		collection = "Review"
	}else if(accessroute.indexOf("Rate") >= 0){
		collection = "Rate"
	}else if(accessroute.indexOf("User") >= 0){
		collection = "User"
	}

	switch (collection) {
		case "Review":
			Review.find({"user_id": user.id, "restaurant_id": restaurant_id}, (err, data) => {
				if (data) { return true }
				else return false
			})
		case "Rate":
			Rate.find({"user_id": user.id, "restaurant_id": restaurant_id}, (err, data) => {
				if (data) { return true }
				else return false
			})
		case "User":
			User.find({"id": user.id}, (err, data) => {
				if (data) { return true }
				else return false
			})
		default:
			return true
	}
}


//ma hord ni man acl process leo, to t pen x man ja thuek reject
// thar pen admin lue developer si bor process to ni
const OWNERCANDO = ["RES_OWNER", "RES_MANAGER", "RES_WORKER"]
const MANAGERCANDO = ["RES_MANAGER", "RES_WORKER"]
exports.case3 = (user, input) => {
	switch (user.level) {
		case "RES_OWNER":
			if (OWNERCANDO[input.level]) { return true }
			else return false
		case "RES_MANAGER":
			if (MANAGERCANDO[input.level]) { return true }
			else return false
	}

}
