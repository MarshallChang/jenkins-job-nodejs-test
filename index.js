import path from 'path'
import sharp from 'sharp'

const args = process.argv.slice(2)
const tmp_input_path = args[0]
const tmp_output_path = args[1]

console.log(`file to tile: ${tmp_input_path}, output path: ${tmp_output_path}`)

try {
  await sharp(path.join(tmp_input_path))
    .png({
      quality: 100,
    })
    .tile({
      size: 256,
    })
    .toFile(tmp_output_path)
} catch (error) {
  console.log(`error: ${error}`)
}

console.log('tile success')
