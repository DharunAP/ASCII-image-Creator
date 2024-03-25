from pyweb import pydom 
import urllib.request
from PIL import Image 
from pyscript import display,document
val = ['@','#','$','%','?','*','+',';',':','.',]
def click(event):
    print(pydom['img#img'][0].html)
    path = document.querySelector('img').getAttribute('src')[5:]
    # urllib.request.urlretrieve(path,'ing.png')
    print(type(path),path)
    try:
        image = Image.open('ing.png')
        # print(image.getdata())
    except Exception as e:
        print("some err",e)
    print("hello wor")

print("hello terminal")