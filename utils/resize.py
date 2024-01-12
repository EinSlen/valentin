#!/usr/bin/python

import os
from PIL import Image


path = "../public/projets/"

dirs = os.listdir( path )
TAILLE = (900, 615)

def resize():
    for item in dirs:
        if os.path.isfile(path+item):
            im = Image.open(path+item)
            f, e = os.path.splitext(path+item)
            imResize = im.resize(TAILLE, Image.ANTIALIAS)
            imResize.save(f, 'JPEG', quality=90)
resize()
def resize_images(path):
  for filename in os.listdir(path):
    filepath = os.path.join(path, filename)
    if os.path.isfile(filepath) and filepath.endswith(".PNG") or filepath.endswith(".png") or filepath.endswith(".jpg"):
      image = Image.open(filepath)
      image = image.resize((900, 615))
      image.save(filepath)

if __name__ == "__main__":
  resize_images(path)
print('resize finish')