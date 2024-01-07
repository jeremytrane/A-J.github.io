from PIL import Image, ExifTags
import os

# Path where the images are stored
path = "C:/Users/Jeremy/Desktop/A-J/Photos"

# Loop through each image
for i in range(1, 140):  # Assuming images are numbered from 1 to 139
    image_path = os.path.join(path, f"{i}.png")  # Construct the full path for each image

    try:
        img = Image.open(image_path)
        exif_data = img._getexif()

        if exif_data is not None:
            exif = {ExifTags.TAGS[k]: v for k, v in exif_data.items() if k in ExifTags.TAGS}

            # Print the date if available
            if 'DateTimeOriginal' in exif:
                print(f"Image {i}: {exif['DateTimeOriginal']}")
            else:
                print(f"Image {i}: No 'DateTimeOriginal' tag found.")
        else:
            print(f"Image {i}: No EXIF data found.")

    except IOError:
        print(f"Image {i}: Could not open or find the image.")
