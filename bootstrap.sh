#!/usr/bin/env bash

add-apt-repository -y ppa:nginx/stable
apt-get update
apt-get install -qq nginx

rm /etc/nginx/sites-enabled/default

echo """server {
    listen 80;
    server_name outpost.dev;
    root /vagrant/deploy;
    index index.html;
}""" > /etc/nginx/sites-available/outpost.dev

ln -s /etc/nginx/sites-available/outpost.dev /etc/nginx/sites-enabled/outpost.dev

service nginx restart

echo "Finished provisioning"
