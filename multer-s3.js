



var aws = require('aws-sdk')
aws.config.loadFromPath('./aws/s3_config.json');
var s3 = new aws.S3();

//var buf = new Buffer(aaa.replace(/^data:image\/\w+;base64,/, ""),'base64')

var dt= new Date();
console.log(dt.getTime())
/* var data = {
    Bucket: 'self-order',
    Key: "zzz12.jpg",
    Body: buf,
    ContentType: 'image/jpeg', 
    ACL: 'public-read'
};

console.log(delete data['Key'])

s3.putObject(data, function (err, data) {

    if (err) {

        console.log(err)

    } else {
        console.log(data);
        console.log("Successfully uploaded data to myBucket/myKey");

    }

}); */







