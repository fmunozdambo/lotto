#!/bin/bash

if [ $1 == 'install' ]
then
	sudo docker build -t lotto-postgres .
	sudo docker run -d --name my-postgres -p 5432:5432 lotto-postgres
elif [ $1 == 'uninstall' ]
then
	sudo docker container stop my-postgres
	sudo docker container rm my-postgres
	sudo docker image rm lotto-postgres
	sudo docker image rm postgres
else
	echo 'Type install or uninstall'
fi
