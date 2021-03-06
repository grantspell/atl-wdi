[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.
 //

var projects = {
  name: "projectsName", // this will label the project name
  type:  "work", // this can be used for classifying and organization
  completeStatus: "False" // this will show the % of how much of the project is completed
}

var tasks = {
  name: 'taskName';, // identifies the task name
  duration: "1.5 Hours", // lists the time it will take to complete each task
  completeStatus: "Complete" // this will display whether or not the tasks have been completed "True" / "False"
}

```javaScript


### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

There should be an input for the user to select the image he/she would like to upload. A description of the image. A classification for each image. And there should be a profile page with all photos listed that a user has uploaded.

``profile
  - displays all images
  - give user's name

``image upload
  - prompt for uploading
  - image description
  - image class


```javaScript
let profile = {
  name: prompt("User enter desired username"),
  images: [image1, image2, image3],
}

let image = {
  img: prompt("Prompt user for img src URL"),
  imgDesc: "Description of image",
  imgClass: "#vacation" // will group user's photos in an album collection
}

let albums = {
  albumsClass = "#vacation" // will show photo's grouped under the same classification
}

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

The app will need to have selectors for temperature and lights. Within temperature the user should be able to adjust the temperature.  Under lights there should be a switch for turning on and off lights.

```Home
  - adjust temperature
  - pick a room to adjust lights

```Lights
  - select light
  - toggle light
  - adjust brightness

  ```javaScript
let home = {
    temp: "73 degrees!",
    roomSelector: "Living Room"
  }
let light = {
    lightSelector: "Bulb 1",
    lightLit: False,
    bulbBrightness: "100%"
} 

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

There will need to be three variables, product, cart and savedCart. The product will give a breakdown of the product itself, the cart will display all items in the cart and also save the cart data for future orders.

```Product
  - image
  - description
  - price
  - add to cart

cart
  - lists each product added to cart
  - price
  - quantity

prevOrder
  - item shipped (T/F)
  - estimated arrival time

```javaScript
let product = {
  image: "productSrcImgURL",
  description: "This product is absolutely amazing! You need this product!",
  price: "$5Mill",
  button: "Add to cart"
}

let cart = {
  itemsInCart: "product",
  total: "$5Mil",
  qnty: 1,
}

let prevOrder = {
  shipStatus: True, //meaning shipped
  eta: "Your package will arrive on December 3rd, 2021.",
}


## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

An advantage of this example would be each station name is listed and can be found by looking for its name. A disadvantage would be that the passenger's stop information is not being recorder, which is one of the main purposes of the app.

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

> The first option would seem to be a good option for the doctor to use because it looks like it would break down his day with all of his appointments, while its disadvantage would be that it doesn't do the same for the patient. The second option seems to make more sense for a patient application because it lists the patient info, doctor info, and then all the appointment information. But with the given structure, it seems like all patients would have access to all appointments.

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

  > Player
    - name
    - character
  > Game
    - Player 1
    - Play 2
  > Action
    - switch to show who's turn it is

b.  How might those entities be represented in JavaScript code?

  ```js
  let player = {
    name: "Name Here",
    character: "Player X"
  }
let game = {
  player1: "Your turn",
  player2: "Wait your turn."
}
let action = {
  turn: "player1",
}
```
c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

  > I chose these entities becaue there needs to be a system for keeping track of the players and who's turn it is. Also there needs to be a prompt for letting the player know when it is his/her turn. I know there is a better way to code the javaScript for player's turn, but that is necessary to keep a point system.
