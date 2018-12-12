const crypto = require('crypto');
module.exports = {
  md5(origin){
    let hash = crypto.createHash('md5');
    hash.update(origin+'qgame');
    return hash.digest('hex');
  }
}