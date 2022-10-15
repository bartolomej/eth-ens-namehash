var sha3 = require('js-sha3').keccak_256
require('buffer')

function namehash (inputName) {
  // Reject empty names:
  var node = ''
  for (var i = 0; i < 32; i++) {
    node += '00'
  }

  // assume names are already normalized
  // var name = normalize(inputName)
  var name = inputName

  if (name) {
    var labels = name.split('.')

    for(var i = labels.length - 1; i >= 0; i--) {
      var labelSha = sha3(labels[i])
      node = sha3(new Buffer(node + labelSha, 'hex'))
    }
  }

  return '0x' + node
}

module.exports = {
  hash: namehash
}
