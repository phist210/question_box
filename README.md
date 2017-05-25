# Question Box
## Welcome to Question Box!

To see our app live on Heroku, go to:
https://sheltered-citadel-50707.herokuapp.com/

Feel free to explore the app, but you'll find a main page filled with a current list of all the questions, a profile page, a page to ask a new question, and a logout button all located in the main menu once you've signed up and logged in (see the menu option to do so if not).  Once on the main page, you can click through on any question to see a more detailed page with answers and comments.

Nearly finished features include seeing all your contributions on your profile page, voting on questions and answers, and choosing an accepted answer.

Upcoming planned features include editing or removing questions within certain constraints and tags for tracking keywords on questions.

Thanks for visiting!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [PostgreSQL](https://www.postgresql.org/download/) - An open source object-relational database system
* [Postico](https://eggerapps.at/postico/) - A Modern PostgreSQL Client for OSX

Python3:

```
pip install python3
```

Run this to connect local server to database using PostgresSQL:

```
$ export DATABASE_URL=postgres:///<NAME OF DATABASE>
```

### Installing

Install project requirements:

```
$ pip install -r requirements.txt
```

## Local Deployment

To run the server and access the main page:

```
$ ./manage.py runserver
```

Then navigate [here](http://127.0.0.1:8000/).

## Built With

* [Python](https://www.python.org/) - Primary programming language used
* [Django](https://www.djangoproject.com/) - Web framework
* [JavaScript](https://www.javascript.com/) - Programming language for interactive web effects

## Authors

* **Josh Friese** - [phist210](https://github.com/phist210)
* **Dana Walker** - [CodeHeeler](https://github.com/CodeHeeler)
* **Will Warren** - [Portfolio](https://willwile4.github.io)

## Acknowledgments

* The Iron Yard!
