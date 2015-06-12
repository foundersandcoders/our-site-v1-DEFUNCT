# Our website

![A pic of us](http://pbs.twimg.com/profile_banners/971846516/1420718128/1500x500)

## Why
Founders and Coders is a lot of great people doing great work. Our current website doesn't let the word know who we are or what we're up to. Building a new one will let us show off and should improve our chances of getting interesting projects to work on.

## What
A website to showcase our work, our company and our school.

## How
Get involved! https://github.com/foundersandcoders/oursite/issues

Our site uses [Harp](http://harpjs.com/).
```
$ npm install -g harp 
$ cd Desktop
$ git clone https://github.com/foundersandcoders/oursite.git
$ cd oursite
$ harp server _harp
```

Do NOT compile your branch and merge with master.
The default branch is the master branch.
The master branch is not compiled (to keep our README intact and so we don't have to worry about compiling all the time)

The repo owner will merge your branch with master, merge master with gh-pages, then compile gh-pages... If you have to do this yourself, take care.

FYI when using harp with gh-pages, file structure is important. The development branch file structure needs to be the same as uncompiled part of the compiled branch file structure. For example, in this project our development branch (master) has everything inside a folder called _harp. The compiled production branch (gh-pages) has the uncompiled site in a folder also called _harp.

We merge the uncompiled part of the production branch with the uncompiled dev branch, then compile production and commit.