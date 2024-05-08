#!/bin/bash

SERVER="192.168.68.51"

if ping -q -c 1 -W 1 $SERVER  ; then
   echo "$SERVER server is up $(curl -s http://$SERVER:4000/health)"
else
    echo "server is down"
fi
