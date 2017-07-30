const Common =`
type Period{
    fromDate : String
    toDate: String
}
input PeriodInput{
    fromDate : String
    toDate: String
}



type Pictures{
  filename: String
  picURL: String
}

input PicturesInput{
  filename: String
  picURL: String
}


type Sociallinks{
  sns_type: String
  link : String
}
input SociallinksInput{
  sns_type: String
  link : String
}

`

export default Common;