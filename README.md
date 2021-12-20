# Print-Ninjas

- [Overview](#overview)
- [MVP](#mvp)
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
## Deployed Site
https://print-ninjas.netlify.app/

## Overview

**Print Ninjas** is a digital & physical print ecommerce website that allows user to create, view, and edit all your favorite anime characters, all in one place. 


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

The **Print Ninjas** MVP is to use react on rails to deliver a full CRUD functionality, using multiple functional components. Adding Authorization and Authentication to deliver a full user experience.
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

![WireFrame](![Screen Shot 2021-12-10 at 9 35 16 AM](https://user-images.githubusercontent.com/90592683/145590849-24ed9876-11c5-46bc-8083-fd79eee0def8.png))

![Branding](![Screen Shot 2021-12-10 at 9 38 41 AM](https://user-images.githubusercontent.com/90592683/145591356-6cffc9dd-4773-491f-a7d2-9a9bdb1098a2.png))


#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://www.figma.com/file/qFqGM14to69allQJT7NLCv/Untitled?node-id=6%3A29)

![Tree Sample](!![Screen Shot 2021-12-10 at 9 45 35 AM](https://user-images.githubusercontent.com/90592683/145592411-299cdf04-8fcf-4338-ad5a-c29cd6501a97.png))


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

[ERD Sample](https://drive.google.com/file/d/1D0V15y37HwTZBPGsMSgNJAt9AYGWsMzc/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
