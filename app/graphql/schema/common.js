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
  filename: String!
  mime: String!
  picURL: String
}

input PicturesInput{
  filename: String!
  mime: String!
  dataImage : String!
}


type Sociallinks{
  sns_type: String
  link : String
}
input SociallinksInput{
  sns_type: String
  link : String
}



input UploadFile {
  filename: String!
  mime: String!
  dataImage : String!
}

`

export default Common;