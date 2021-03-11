#!/bin/bash

if [ -z "$(ls -A /var/www/public_html/)" ]; then
   echo "Empty"
else
sudo rm -R  /var/www/public_html/server
sudo rm -R  /var/www/public_html/client
fi
