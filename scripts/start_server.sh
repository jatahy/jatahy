#!/bin/bash

cd $HOME/jatahy
pm2 stop all
pm2 start ecosystem.config.js