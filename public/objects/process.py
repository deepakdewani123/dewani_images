#!/usr/bin/python

# py process.py album_number
# -*- coding: utf-8 -*-
import os
import sys
import string
import random
import json
from collections import OrderedDict


def rename_files():
    images = []
    directory = os.listdir(os.getcwd())
    album_name = 'album-' + str(sys.argv[1])
    baseURL = "https://s3-ap-southeast-1.amazonaws.com/kr-app-content/images/"
    for file_name in directory:
        if file_name.endswith('jpg'):
            print('dfa')
            new_file_name = id_generator()
            os.rename(file_name, new_file_name + '.jpg')
            images.append(OrderedDict([('imageId', new_file_name),('imageName', new_file_name),('imageURL', baseURL + album_name + '/' + new_file_name + '.jpg'),('albumName', album_name),('likes', 0),('views', 0)]))

    album = ('name', album_name), ('coverImageURL', baseURL + album_name + '/cover.jpg'), ('coverTitle', album_name)
    image_file = open('image' + '.json', 'w')
    image_file.write(json.dumps(images, sort_keys=False))

    album_file = open('album' + '.json', 'w')
    album_file.write(json.dumps(album, sort_keys=False))

def id_generator(size=6, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


rename_files()

