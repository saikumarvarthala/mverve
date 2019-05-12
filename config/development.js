var ip = require("ip");
console.log(process.env.NODE_ENV);
module.exports = {
    host:ip.address()?ip.address():"0.0.0.0",
    port: '5500', 
    secret: '12333AIRTELTIAGOPTECH',
    mongodbURI:'mongodb://root:root12@ds133256.mlab.com:33256/whitefield'
}
