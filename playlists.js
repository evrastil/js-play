"use strict";

const fs = require("fs");
const ph = require('path');

let path = "/music";

generate(path);

function generate(path) {
    fs.readdir(path, function (err, files) {
        if (err) {
            return console.log(err);
        }
        files.forEach(item => {
            let pathItem = `${path}/${item}`;
            if (fs.statSync(pathItem).isDirectory()) {
                traverseDirs(pathItem, item);
            }
        });
    });


    function traverseDirs(path, playlistName) {
        fs.readdir(path, function (err, files) {
            if (err) {
                return console.log(err);
            }
            let songs = [];
            files.forEach(item => {
                let pathItem = `${path}/${item}`;
                if (fs.statSync(pathItem).isDirectory()) {
                    traverseDirs(pathItem, `${playlistName}_${item}`);
                } else if (fs.statSync(pathItem).isFile() && ph.extname(item) === ".mp3") {
                    songs.push(item)
                }

            });
            if (songs.length > 0) {
                createPlayList(songs, playlistName, path);
            }
        });
    }

    function createPlayList(songs, name, path) {
        let playlistName = `${name}.m3u`;
        let file = fs.createWriteStream(`${path}/${playlistName}`);
        file.on('error', function (err) {
            console.log(err)
        });
        songs.forEach(function (song) {
            file.write(song + '\n');
        });
        file.end();
        console.log(`The file ${playlistName} was saved on path ${path}`);
    }

}