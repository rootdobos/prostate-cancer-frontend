envsubst < /usr/share/nginx/html/assets/config.template.json > /usr/share/nginx/html/assets/config.json && exec 


nginx -c '/etc/nginx/nginx.conf' -g 'daemon off;'