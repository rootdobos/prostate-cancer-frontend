#!/bin/sh
set -e

echo "Writing config.json..."

echo "{\"backend_url\": \"$BACKEND_URL\", \"placeholder_image\": \"$PLACEHOLDER_IMAGE\", \"images_url\": \"$IMAGES_URL\"}" > /usr/share/nginx/html/config.json

exec nginx -c /etc/nginx/nginx.conf -g 'daemon off;'