#!/bin/bash

git checkout -b build
rm -rf lib
rm package.json
VERSION=$1
./fetch.sh $VERSION
git add -f lib package.json
git commit -m 'build $1'
git tag $1
git push origin $1
npm publish
git checkout master
git branch -D build