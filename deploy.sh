#!/bin/bash

echo "DEPLOYING"
ssh $SSH_USER@$SSH_HOST << EOF 
./killContainers
#start containers
docker run -d -p 9000:9000 --name garvin gling8313/personal-site:0.1.$CIRCLE_BUILD_NUM
docker run -d -p 80:80 --link garvin:app --name nginx garvin/nginx
EOF
