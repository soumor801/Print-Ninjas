# Print-Ninjas

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Print Ninjas** is a digital & physical print ecommerce webite that allows user to create, view, and edit all your favorite anime characters, all in one place. 


<br>

## MVP
- Use Ruby on Rails to deploy the backend
- Use React to create the front-end
- Use multiple functional components
- Give user capability for full CRUD 
- Deploy to Heroku and Netlify
- Authorization and Authentication (user sign in and sign up)
- CSS styling to match wireframe and branding
  Include media queries

_The **Print Ninjas** MVP is to use react on rails to deliver a full CRUD functionality, using multiple functional components. Adding Authorization and Authentication to deliver a full user experience.
<br>

### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |  Front-end                                 |
|   React Router   | _Front-end path navigation_                |
|     Rails        | _Backend for database management_          |


<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![WireFrame](https://www.figma.com/file/rmfJyU0PWRT7GoOVZ7QSEY/Print-Ninjas?node-id=0%3A1)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://www.figma.com/file/qFqGM14to69allQJT7NLCv/Untitled?node-id=6%3A29)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ components/
      |__ about.jsx
      |__ layout.jsx
|__ services/
      |__ ApiConfig.jsx
      |__ Authentication.jsx
|__ screens/
      |__ Prints/
          |__ Prints.jsx
          |__ SinglePrint.jsx
          |__ EditPrint.jsx
          |__ createPrint.jsx
      |__ PrintsCSS/
          |__ Prints.css
          |__ SinglePrint.css
          |__ EditPrint.css
          |__ createPrint.css
            
      |__ SignUp/SignIn/    
          |__ SignIn.jsx
          |__ SignUp.jsx
          |__ SignIn.css
          |__ SignUp.css
|__ services/
```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Forms        |    H     |     3 hrs      |       hrs     |     TBD     |
| Create CRUD Backend |    H     |     10 hrs     |       hrs     |     TBD     |
| Create CRUD Frontend|    H     |     6 hrs      |       hrs     |     TBD     |
| Create Services Comp|    H     |     3 hrs      |       hrs     |     TBD     |
| CSS Styling         |    H     |     10 hrs     |       hrs     |     TBD     |
| Mobile Friendly     |    L     |     3 hrs      |       hrs     |     TBD     |
| TOTAL               |          |     35 hrs     |       hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
