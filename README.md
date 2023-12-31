# MVC Tech Blog

</br>

![Github License](https://img.shields.io/badge/license-MIT-blue.svg)

</br>

---

##   📝 Description


---

</br>

The purpose of this repository is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site is build from scartch and deployed in Heroku. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

</br>

---


##   ⌨️ Programming Languages & Technologies
---

</br>

<div style="display: inline_block">

[![JavaScript](./assets/javascript.svg)](https://devdocs.io/javascript/)
&nbsp;&nbsp;
[![NodeJS](./assets/nodejs.svg)](https://nodejs.org/en/docs)
&nbsp;&nbsp;
[![ExpressJS](./assets/expressjs.svg)](https://expressjs.com/en/4x/api.html)
&nbsp;&nbsp;
[![.ENV](./assets/dotenv.svg)](https://www.npmjs.com/package/dotenv)
&nbsp;&nbsp;
[![HandlebarsJS](./assets/handlebars.svg)](https://www.npmjs.com/package/handlebars)
&nbsp;&nbsp;
[![Sequelize](./assets/sequelize.svg)](https://sequelize.org/api/v6/identifiers)
&nbsp;&nbsp;
[![MySQL](./assets/mysql.svg)](https://dev.mysql.com/doc/)
&nbsp;&nbsp;
[![Bulma](./assets/bulma.svg)](https://bulma.io/documentation/)
&nbsp;&nbsp;
[![Heroku](./assets/heroku.svg)](https://devcenter.heroku.com/categories/reference)

</div>

</br>


---

## 📑 Table of Contents

---

</br>

- [Installation](#💿-installation)
- [Usage](#💻-usage)
- [License](#🔏-license)
- [Credits](#🖋️-credits)
- [Tests](#🧪-tests)
- [User Story](#✍️-user-story)
- [Acceptance Criteria](#👏-acceptance-criteria)


</br>


---

##  💿 [Installation](#📑-table-of-contents)

---

</br>

1. Fork and clone repository to local machine 
2. Run `npm i` to install dependencies in local project directory



</br>


---

##   💻 [Usage](#📑-table-of-contents)

---

</br>

1. Open integrated terminal
2. Run `mysql -u root -p` to connect to mysql
3. Run `source db/schema.sql` to create the database
3. Run `npm run seed` to populate the database with seeds
4. Run `npm start` to initialize the server
5. Go to `http://localhost:3001` to access the app
6. Alternatively, you can visit the deployed app in [Heroku](https://devdocs.io/javascript/)


</br>

The github URL containing the code for this project is located at:

https://github.com/Maelikah/M14_MVCTechBlog

</br>


Heroku Page:

https://mighty-lake-87878-5a33997e292c.herokuapp.com/


</br>


---

##  🔏 [License](#📑-table-of-contents)

---

</br>


 This project is licensed under the terms of the `MIT` license. 


</br>


---

## 🖋️ [Credits](#📑-table-of-contents)

---

</br>


- https://shields.io/category/license
- https://github.com/devicons/devicon/tree/master/icons
- https://nodejs.org/en/docs
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/
- https://sequelize.org/api/v6/identifiers
- https://dev.mysql.com/doc/


</br>


---

##   🧪 [Tests](#📑-table-of-contents)

---

</br>



NA


</br>


---

## ✍️ [User Story](#📑-table-of-contents)

---

</br>

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

```


</br>

---

## 👏 [Acceptance Criteria](#📑-table-of-contents)

---

</br>


```md
GIVEN a CMS-style blog site
- WHEN I visit the site for the first time
    - THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option
    - THEN I am taken to the homepage
- WHEN I click on any other links in the navigation
    - THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
    - THEN I am prompted to create a username and password
- WHEN I click on the sign-up button
    - THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
    - THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
    - THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation
    - THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post
    - THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in
    - THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation
    - THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post
    - THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post
    - THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
 -WHEN I click on one of my existing posts in the dashboard
    - THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation
    - THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time
    - THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

 
```

</br>


---

[Back to Top](#mvc-tech-blog)

