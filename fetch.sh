#!/bin/bash

FILE=$1
FOLDER="pouchdb-$1"
URL="https://codeload.github.com/pouchdb/pouchdb/zip/$FILE"
curl $URL -o $FILE
unzip $FILE
rm $FILE
mkdir -p lib
cp -r $FOLDER/lib/ lib/
rm -rf $FOLDER
VERSION=$FILE node writePackage.js