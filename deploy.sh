#!/bin/sh

rm -rf _site && 

npm run build && 
npm run build:sass && 

ssh solis 'rm -rf docker/webserver/public/koendev.nl' && 

scp -r _site solis:~/docker/webserver/public/koendev.nl
