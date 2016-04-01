/**
 * Created by jj on 3/31/16.
 */

const fs = require('fs');
const AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';
const bucketName = 'jjblah';


module.exports = function(req, res)
{
    var body = fs.createReadStream('/Users/jj/CarpStreet/LandingPage/video-editting/shirt.mp4');

    var s3obj = new AWS.S3({params: {Bucket: bucketName, Key: "videofile"}});


    s3obj.upload({Body: body})
        .on('httpUploadProgress', function (evt) {
            console.log(evt);
        })
        .send(function (err, data) {
            console.log(err, data)
        });

    res.send({ done: true});

};