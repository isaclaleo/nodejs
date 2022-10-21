const sharp = require('sharp');

sharp('last.jpg')
.resize(90)
.grayscale(100)
.toFile('last-resize.jpg')