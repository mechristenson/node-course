## Deploying to Heroku

Since this app does not define its package.json or any code in the
root directory, you may run into some issues deploying to heroku.
To resolve these issues try running the `git subtree` command from
the root of this repo:
- Ex. `git subtree push --prefix web-server heroku master`
