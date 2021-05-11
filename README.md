# TrackMyCal - GA Project Four.

## Brief

Week long fourth project for the Software Engineering Immersive course. Solo project with the following requirements:

* Build a full-stack application by making your own back-end and front-end.
* Use a Python Django API using the Django REST framework to serve your data from a Postgres database.
* Project must have at least 1 one-to-many and 1 many-to-many relationship with CRUD functionality.
* Must be designed well.

## Deployment

App has been deployed with Heroku can be viewed here: [TrackMyCal](https://trackmycal.herokuapp.com/)

## Technologies Used

### Backend

* Python
* Django
* Django REST Framework
* PostgreSQL
* PyJWT
* Psycopg2

### Frontend

* React Hooks
* JavaScript (ES6)
* HTML5
* SCSS
* React-Bootstrap
* Axios
* React Router Dom
* Http-proxy-middleware
* React select

### Dev tools

* VS Code
* Insomnia
* TablePlus
* Yarn
* Git
* GitHub
* Excalidraw (Wireframing)
* Heroku (Deployment)


## Overview and Concept

TrackMyCal is an app designed for the user to add foods to their logbook and keep a diary of how many calories they are consuming. The food nutrition content is key to this app and designed for users to decide what food they want to consume while keeping track of their calorie intake. We were encouraged to clone other apps as that would give us more time to focus on functionality as the styling and concept would already be done, since I decided to go solo, knowing time would work different for me as opposed to being in a group, I based this app on one of my favourites - [myfitnesspal](https://www.myfitnesspal.com/)

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/homepage2.png)

## Approach Taken

### Planning

First I had to plan what the relationships would look like for my project and what functionality I wanted the users to have. As I had set out to have a user who can create multiple log books which exclusively belonged to them, this was the one-to-many relationship between the user and log books. The many-to-many relationship was created between the log books and the foods available, enabling the user to add foods to their respective logbooks (demonstrated in the diagram below):

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/diagram.png)

The diagram above also shows the structure of how my ‘foods’ model would look like. After finalising the relationships and the ‘foods’ model, I planned to create dummy data in order to test. 

## Process

With the planning complete, the next phase to complete the back-end and add all the functionality that my users would be able to use. We were required to use a PostgreSQL database in our project, this required us to connect Django to it. After that, the relationships were completed on the logbooks model, one as a many-to-many with the foods model and the next being a one-to-many with the user. 

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/logbookmodel.png)

Once set up, I was able to test these relationships in TablePlus and look at how the relationships were working. One user is able to create many logbooks, and many logbooks can have many foods stored within them. The diagram below is a representation of the flow:

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/tableflow.png)

Building the models, views and serializers in the Django REST Framework took  2/3 days. The most challenging part was to add a POST request in views for the logbook which enables the user to add food to it. 

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/logbookdetail.png)

Another functionality that was crucial to this app, allows users to view their logbooks. Testing the data showed that any user could view all logbooks that were ever made, regardless of who the user was. Going through the Django documentation and with the help of my instructors, we were able to find a solution to filter out the users that the logbooks belonged to, adding the authentication on top, users were now able to view only their logbooks only once they were signed in. This can be seen in the objects filter below, where the owner ID is checked against the ID of the user making the request.

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/logbooklist.png)

On the front-end, the ability to see their logbooks, which calculates how many logbooks the user has, as well as who the user is.

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/logbookfrontend.png)

### Other components

Food index page, which shows all the foods available to view and potentially add to your logbook. Some nutrition available in this view to make the user journey easier.

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/foodindex.png)

Food show page, which gives a more in-detail look at the nutrition content and allows the user to add to their logbooks. This part was particularly challenging, setting up the POST request to a specific logbook. 

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/handleexist.png)

In order to tackle this, I had to create an object within the handle for submitting the request for the food to be added to the specific logbook. The ‘selectedlogbook.id’ is based on a state for when the user clicks a logbook in the React-select. Based on that information, the endpoint changes for the API.

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/foodshow.png)

Lastly, the logbook page, which adds the food based on what the user has input and creates a total to give the user an experience of a diary being kept that calculates their calories. Reduce method was used to calculate the total of all the foods that have been input by the user.

![screenshots](https://github.com/HamzaaMB/SEI-project-four/blob/main/client/screenshots/userlogbook.png)

## Wins, Challenges & Bugs

### Wins

A huge win was attempting this project solo and completing it as a functioning full-stack app. As we had only been taught Python and Django for a couple of days before this project commenced, it was comforting to see the progress I had made throughout the course and end up at this point. 

### Challenges

* From setting up all the requests in the views for the logbook model in Django to filtering objects based on the user shown in screenshots above. Getting familiar with the syntax after keeping it JavaScript heavy was particularly challenging.

* Going solo was definitely another huge challenge, previously in projects you’re able to fill knowledge gaps and work on code together, which wasn’t the case in this project. The timeline also works very differently as most of the NTH’s are hard to meet. Learning how my process works, being responsible for the creation of everything from front-end to back-end and working through all the bugs and blockers along the way.

* Being stuck with the POST request for logbooks, for users to add food to was by far the biggest challenge, our presentations were lined up at 1.30pm, and only managed to fix the request by 12.55pm. Rewarding but equally as painful. 


## Bugs and Blockers

Due to being stuck on the POST request mentioned earlier, I was unable to add ‘create’ a logbook and ‘delete’ a logbook for the users. Currently users are only able to add foods to existing logbooks.

## Future Content & Improvements

* Style the react-select
* Give users the ability to and food and delete logbooks from their profile.
* Functionality where individual food can be deleted from individual logbooks
* Users can add their own food and nutrition content.
* improvement on error handling

## Key Learnings

The learning process was massive on this project for me individually, I learnt a lot more during this project and now feel much confident in creating a full-stack app and believing in my ability to get through problems by my much improved documentation reading/googling skills. 