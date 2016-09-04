Currently, this is a *very* WIP version of a game tracker (similar to The Backloggery) that was originally going to be built in Angular 1.5, but I decided to switch to React (mainly to get some chops in it). In doing so, I cleaned up my routes and changed up some behavior. Right now, everything pretty much runs in a development environment, as its far from production quality. This is set up to use both a Webpack sever (to handle Babelizing and hot module loading) and a Node/Express server (to handle a REST API).

To get a local copy up and running, it takes a few more steps beyond just simply running `npm install` and `npm start`:

* First off, ensure you have Postgres installed and running. Since I currently don't have any commands to build the database, you'll need to run a CREATE DATABASE <database name> command in whatever your flavor of handling Postgres is (whether its the GUI or the CLI).
* Second, run `npm install`
* Third, you'll need to set up a `settings.json` file in the root, which will hold all of your connection data, as such:
```
{
 "connection": {
        "host": "127.0.0.1",
        "user": postgres_user_name,
        "password": postgres_user_password,
        "database": your_database_name
    }
}
```
* After that, you can run `knex migrate:latest` to create the appropriate table for the backend to use.
* Finally, use `npm start` to start up the Webpack server and then `npm run-script run` to start up the Node server and go to `localhost:7777`.
