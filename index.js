const path = require('path')
const sharp = require('sharp')
const fs = require('fs')

const args = process.argv.slice(2)
const tmp_input_path = args[0]
const file_basename = args[1]

await sharp(path.join(tmp_input_path))
  .png({
    quality: 100,
  })
  .tile({
    size: 256,
  })
  .toFile(`/tmp/${file_basename}/output.dz`, function (err, info) {
    console.log('err:', err)
    console.log('info:', info)
  })

console.log('tile success')
