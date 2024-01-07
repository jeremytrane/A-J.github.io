from PIL import Image, ExifTags
img1 = Image.open("C:/Users/Jeremy/Desktop/1.JPG")
exif1 = { ExifTags.TAGS[k]: v for k, v in img1._getexif().items() if k in ExifTags.TAGS }
print(exif1)
img2 = Image.open("C:/Users/Jeremy/Desktop/2.JPG")
exif2 = { ExifTags.TAGS[k]: v for k, v in img2._getexif().items() if k in ExifTags.TAGS }
print(exif2)