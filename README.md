# BrewDay
An app built by rogu2 on GitHub

Client Repo: https://github.com/rogu2/BrewDay-client
Client Production URL: https://rogu2.github.io/BrewDay-client/
API Repo: https://github.com/rogu2/BrewDay-API
Heroku URL: https://dashboard.heroku.com/apps/brew-day

## Introduction

Welcome to BrewDay! This app is a single page application for creating, storing,
modifying and deleting your homebrew beer recipes. The app also boasts a global
read feature so that you can find recipes created by others.

This app enables users to create an account by signing up with an email and
password. A token will be assigned to the user on sign-in and used for
authentication. On sign-in users are able to change passwords and sign out.

While signed in, users can create a new beer recipe by filling out the brew's
name, recipe, steps and brewing notes. The user can retrieve all recipes that
he/she has created, which will be displayed in a table via handlebars. The user
then is able to update the brew recipe by filling out all the fields after selecting
update and also deleting a recipe if so desired.

All users have access to the full database containing beer recipes, however, they
are unable to modify recipes on this table.

## Development Story

Version 1 of this app was built with a 4 day time limit, which helped focus the
development process on the essentials. The timeline built for this app is as
follows:
Day 1: Build backend API and database with Ruby on Rails and Postgresql
Day 2: Build front end with JavaScript, HTMl, CSS/SASS, test cUrl and enable CRUD.
Day 3: Style the app
Day 4: Buffer day, deploy, user testing.


## User Stories

As a user I want to:
- Create an account
- Log in
- Change my password
- Sign out
- Create a brew recipe
- Retrieve all my recipes
- Update my recipe
- Delete my recipe
- Retrieve all recipes

## Wireframes

Link: https://imgur.com/gallery/h7UwRug

## ERD

Link: https://i.imgur.com/lDy1PuO.jpg

## Technologies Used

Ruby, Ruby on Rails, HTML, CSS, SASS, JavaScript, jQuery, AJAX, Git, Heroku,
Github, cUrl, Postgresql, Handlebars

## Version 2 and Beyond

Like any developer and their app, I have a long feature wishlist for BrewDay.

Immediate next versions will have improved styling and front end layout design.
The brew recipe cards presented through handle bars will include a transition
feature so that selecting update will flip the div element like a beer coaster.

Future versions may contain a more complex database structure with many-to-many
relationships to permit more robust recipe and step structures.

I would like to include ABV (alcohol by volume) and IBU (international bittering
unit) calculators for measuring approximate strength and 'hoppiness' of recipes.

I would like to include a social element to share recipes with friends.

I would like to include a voting system in the app with a ranking system so that
the top ranked recipes can be displayed.

I would like to include a method of sorting brew recipes by beer style (i.e.
IPA, Pale Ale, Lager, Porter, Stout, Wheat, etc.)


## API Routes

The API currently maps two tables within the database, users and brews, in a
one-to-many relationship where a user can have many brews and brews belong to a
single user.

The API has RESTful routes for the brews resource and a custom route for a user
GET request.

The API has custom routes for authentication outlined in the table below.
Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password`     | `users#changepw`  |
| DELETE | `/sign-out`            | `users#signout`   |

Brews

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/brews`               | `brews#index`     |
| POST   | `/brews`               | `brews#create`    |
| PATCH  | `/brews`               | `brews#update`    |
| DELETE | `/brews`               | `brews#destroy`   |
| GET    | `/user-brews`          | `brews#user_index`|
