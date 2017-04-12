#!/bin/bash

echo "DEPLOYING"
ssh $SSH_USER@$SSH_HOST << EOF #hello 
ls
pwd 
EOF
