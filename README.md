# About Breeze Mapper

### What is this app?

This is a coding assignment written to demonstrate skills in creating full stack web applications. Given three sets of data (users, transactions, locations), the assignment is to use this data along with an interactive map to show something meaningful for a potential user.

### Features

You will be able to select a user and see their earnings and charges over time, their locations, and a comparison of their total earnings/charges against the rest of the users.

Smaller features include autofit of map to display all markers, mouse hover tooltips for markers, sort and search within data table, and mobile responsive design.

### Tech Stack

Written in Rails and AngularJS. The back end involvement is quite simple, serving only a few routes to the front-end heavy application.

I chose Chart.js as a library to visualize some of the data - however chart.js is not as robust as I would have liked, and certain limitations made manipulating and displaying meaningful data more difficult.

I chose ui-router originally because I wanted a single page app with nested views and tabs within them - however, later I decided against this and went with multiple views on the home page.

### Challenges

The single biggest challenge for this assignment was not having the entire structure planned out from the beginning. What I did, partly for my own education, was to build and connect certain points, such as a single service to get data from my rails controller. As I was able to connect certain key pieces of my application, I was able to see what made sense, what I could do given a certain timeframe. Over time, the goal was to see how those decisions affected things like my ability to make changes. As code maintenance and extensibility are very important in larger applications, I wanted to experience the impacts of my own design changes.

The most significant change was the refactoring of how data flowed through the app. Originally, I had separate services all gathering their individual pieces of data. Later, I realized it would be fun to try and structure all the relevant data on the back end before serving it up to Angular. There is a more indepth explanation on this in user-services.js.

### Failures

Being a coding assignment in hopes of landing an interview, timing was definitely a concern. What I got out of this was the ability to experiment with various technologies and strategies which took longer than expected. This is a long worded excuse for, "oops, I took too long".

I could definitely have benefited more from planning - had I decided on a look, and an internal structure of how I wanted to serve my JSON data, I could have saved much more time.

### Successes

This looks like "a real application that does stuff" - Jennifer Lu

### Lessons Learned

I learned more about the impact of architecture on your code. When using my data-service, for example, I had to add complexity to my rails controller to package my data, and then add more code to do what I want with it inside individual controllers, such as the user-controller.js. This complexity adds initial cost as well as the potential for technical debt later down the road, all careful considerations when working with a larger code base.

I became much more familiar with AngularJS and certain patterns, such as using $rootScope to broadcast events.

Smaller things:

*   Rails configurations for javascript compression
*   Do not fuck with the Rails asset pipeline
*   Angular, array injection, and minification
*   If Bootstrap, use the grid system, duh
*   Plan more now, save time later
*   Heroku's different build packages
*   Heroku and Asset precompilation
*   I should contribute to Chart.js library because I love charts.