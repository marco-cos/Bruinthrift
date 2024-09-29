This was created during a 12-hour hackathon, UCLA HOTH X. Won "Best in Intersectional Environmentalism" prize. 

Link to project page and demo on DevPost:

https://devpost.com/software/bruinthrift

Setup: 

Clone the repo into your local device in the VSCode terminal with 

```
git clone https://github.com/brennakj3/HOTHX.git 
```

Inside the root directory of the project, run

```
cd client
npm install
```

Then, run 

```
cd ..
npm install 
```

To check if your server is working:
Open a terminal. Go to the root directory of this project and run:

```
cd server
node server.js
```

You should see a message in the terminal that the database connection was successful and which port the server is running in. 

Starting the react app:
Open a 2nd terminal. In this terminal, go to the root directory of this project and run:

```
cd frontend
npm start
```

You now have the basic react app open!

Inspiration:

We were given the theme "Intersectional Environmentalism" which led us to think about how UCLA college students engage in consumerism. With excess goods such as clothing (fast fashion) and furniture that are thrown out yearly, we wanted to find a way that reduces our carbon footprint. 

What it does:

Bruin Thrift connects UCLA students seeking to sell/give away their clothing, furniture, or other belongings. Through an explore feed, users are able to see the listings other students have posted that display a picture, price, contact information, and a description of the product. For users to post their own listing, they can navigate to the create a post page which prompts them to input a picture of the item, contact information, title, price, and caption. Students can find goods they are searching for at a cheaper price and can sell their items promoting the concept of sustainability through secondhand goods.

How we built it:

We created a web application with a MERN stack. MERN stands for MongoDB, Express, React, and NodeJS. We utilized React to build our frontend and used Express to handle http requests in the backend. When a user posts a review, the React frontend makes an http request which is received and interpreted by the backend. Express adds the post to a MongoDB database. Objects, such as the thrift posts, can be retrieved from the MongoDB database and displayed on the frontend for users. 

Challenges we ran into:

We had issues with recent updates to firebase, as well as environment differences between team members that slowed down our progress. Refocusing our goals, and taking time to help each other help us form good habits for our workflow.

Accomplishments that we're proud of:

In less than a day, we created an entire website that takes in user input and provides a user experience.

What we learned:

We learned the basics of user design and web development. Additionally, we learned many CSS design principles, bettered our understanding of React, and developed out teamwork skills.

What's next for Bruin Thrift:

We’d like to integrate the option to add images to posts, delete posts, and a messaging portal for sellers and buyers to remove the need for third-party messaging systems.

