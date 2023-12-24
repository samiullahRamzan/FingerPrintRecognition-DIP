import os
import base64
from PIL import Image
from io import BytesIO
import cv2
import numpy as np

# Get the image data from the environment variable
image_data = os.environ.get('IMAGE_DATA')

# Decode base64 string to bytes
image_bytes = base64.b64decode(image_data)

# Convert bytes to a NumPy array
image_np = np.frombuffer(image_bytes, np.uint8)

# Decode the image using OpenCV
image_cv2 = cv2.imdecode(image_np, cv2.IMREAD_COLOR)

# Display the image using OpenCV
cv2.imshow('Image', image_cv2)
cv2.waitKey(0)
cv2.destroyAllWindows()

# Print a message to indicate that the processing is complete
print('Image processing complete')
