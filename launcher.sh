#!/bin/bash
fuser -k 3000/tcp

service redis_6379 start
cd ./oj-server

nodemon server.js &
cd ../oj-client

ng build --watch

echo "================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES." PRESSKEY

fuser -k 3000/tcp
service redis_6379 stop