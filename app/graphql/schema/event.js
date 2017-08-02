const Event = `
#############################################################
###  Event Type
#############################################################

type Event{
  id: ID
  user_id: User
  period: Period
  name : String
  pictures:[Pictures]
  details: String
  status : String
  comment : String
  process_date: String
}

input EventInput{
  user_id: ID
  period: PeriodInput
  name : String
  pictures: [PicturesInput]
  details: String
  status : String
  comment : String
  process_date: String
}

`

export default Event;

