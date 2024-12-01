#!/bin/bash

docker build -t mnr-transaction-id .

docker run -d --name mnr-transaction-id -p 5500:5500 mnr-transaction-id

./node_modules/.bin/jest './test/integration'

docker exec mnr-transaction-id kill -SIGINT 1

sleep 3

docker rm -f mnr-transaction-id
