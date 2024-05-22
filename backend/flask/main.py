from flask import Flask,request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
from PIL import Image

ASCII_CHARS = ["@", "#", "S", "%", "?", "*", ";", ":", ",", ".",' ']

def resize_image(image, new_width=50):
    width, height = image.size
    ratio = height/width
    print('-----------------------',ratio)
    new_height = int(new_width * ratio)
    # new_height = 100
    resized_image = image.resize((new_width, new_height))
    return(resized_image)

def grayify(image):
    grayscale_image = image.convert("L")
    return(grayscale_image)
    
def pixels_to_ascii(image):
    pixels = image.getdata()
    characters = "".join([ASCII_CHARS[pixel//25] for pixel in pixels])
    return(characters)    

def main(path,new_width=50):
    try:
        image = Image.open(path)
    except Exception as e:
        print(e)
        return
  
    new_image_data = pixels_to_ascii(grayify(resize_image(image)))
    
    pixel_count = len(new_image_data)  
    ascii_image = "\n".join([new_image_data[index:(index+new_width)] for index in range(0, pixel_count, new_width)])
    
    print(ascii_image)
    return (ascii_image,pixel_count)



@app.route("/",methods=['POST'])
def hello():
    print('reqest received...')
    if 'image' in request.files:
        image_file = request.files['image']
        # Do something with the image file, such as saving it
        val = main(image_file)
        response = app.response_class(
            response=json.dumps({'value':val[0],'count':val[1]}),
            mimetype='application/json'
        )
        return response
    else:
        return 'No image data found in request.'

app.run(debug=True)
