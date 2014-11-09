Outpost
=======

## Set up
`npm install -g grunt-cli`
`npm install`

## Local development

`vagrant up`
The app is now served from http://127.0.0.1:8000/.

You can also run: `echo '192.168.20.20    outpost.dev' >> /etc/hosts` to access 
the app on http://outpost.dev/.

`grunt`
The app will now be automatically checked by jshint and compiled to the web 
directory as you work on it.

## Issue tracking

http://redmine.hughgrigg.com/projects/outpost

## Workflow

http://nvie.com/posts/a-successful-git-branching-model/

In short:
 - Never push to master or develop
 - Start with latest develop by pulling from remote
 - Branch new features / issues / tasks from develop
 - Develop can only be changed by merging feature branches in Github
 - Master can only be changed by merging develop in Github
