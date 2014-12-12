# Lumiata Angular Seed
---
##getting started
1. Prerequisites
  1. Make sure you have registered your SSH keys with github. Here is the [link on how to set this up]
     (https://help.github.com/articles/generating-ssh-keys/)
  1. Install [Homerew](http://brew.sh/).
    * You can first veify you have it in the console ```$ brew```
    * to install brew ```$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```
    * once installed, run ```$ brew doctor``` and ```$ brew update```. This will check that all is good and bring down a fresh catalog of packages

  2. Install [Node.js](http://nodejs.org/) using homebrew with ```$ brew install node```
  3. Install [Bower](http://bower.io/) using homebrew with ```$ brew install bower```
  4. Install [Grunt](http://gruntjs.com/) using npm (Node Package Manager) ```$ npm install -g grunt```. The -g means globally.
2. Make sure you have a code directory in your home folder ```$ cd ~/``` and then ```$ mkdir code```
3. Switch to the code directory and the clone this repo ```git clone git@github.com:lumiata/AngularSeedProject.git```
4. Setup a new remote repo where you see fit to store your project on github
5. You should have a new folder in your code folder called AngularSeedProject. Rename this to whatever you want(e.g., fooProject)
6. Switch to this directory and run git remote delete origin ```git remote remove origin```
7. Add your new repo to the origin ```git remote add origin git@github.com:lumiata/TomsAwesomeProject.git``` (NOTE you need to put in the address of the repo you created in step 5.
8. Push up this proejct to your repo ```git push origin```
9. Install the dependencies with ```npm install``` and then ```bower install```
10. Start the app! ```grunt serve```
11. Run unit\e2e tests ```npm test```


