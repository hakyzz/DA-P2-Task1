# Phase 2 - Web2

In this first task of phase 2 you'll create a webapp using NextJS and MongoDB. 

Fork this repository and push your code to your fork upon completion. Make a commit after completion of each section.



## 1. Creating a NextJS app

> Pre-requirement - you need to have  [nodejs](https://nodejs.org/en/) installed.

To create a basic nextjs app run:
```bash
npx create-next-app project
cd project
npm run dev
```
Familiarize yourself with the starter app and the file structure.

## 2. Modifying the app

Create a personal profile page to display your name, interest and past experiences. Think of it like a mini curriculum vitae(try not to include any info which you don't want to be public). You can go as wild as you like with the design.

At this point we recommend taking a look at [tailwindcss](https://tailwindcss.com/docs/guides/nextjs) to style your pages

## 3. Setting up MongoDB

Use the official tutorials to setup MongoDB

 - **[Install MongoDB locally](https://www.mongodb.com/docs/manual/installation/#std-label-tutorial-installation)**
 - **[Get Started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/)**

Use the following [guide](https://itnext.io/using-mongoose-with-next-js-11-b2a08ff2dd3c)[section 1-4] to connect your Next app to MongoDB 
Mongoose handles data associations, does schema validation, and is used to translate between objects in code and their representation in MongoDB.

## 4. Exploring APIs

See the following [doc](https://nextjs.org/docs/api-routes/introduction) to know how APIs are structured in NextJS

As a first step convert the data in your personal profile page to a JSON format.

Example:

    {
	    "name": “Joe”,
	    "interests": ["coding”, “working out”],
	    ...
    }
Create a API route say `/api/profile_data` which send this data to the frontend.

Modify the frontend created in #2 to use the API data to display the page. 
You can use [axios](https://github.com/axios/axios) to fetch the data from the API.

## 5. Sending data to the DB

Firstly create a schema to represent the data which we will be storing in the data. You will be storing the data sent by the `/api/profile_data` API in the DB.

Create a form in the frontend to modify/add data to the db. This will involve creation of new APIs to pass the data from the frontend to the backend and then to the DB.

Now modify the API created in #4 to use the data from the DB.



