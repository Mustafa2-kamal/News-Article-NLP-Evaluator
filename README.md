# News Article NLP Evaluator

## Project Description
In this project We built a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

We used an external api called MeaningCloud to interact with the NLP system. This tool helps us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

The goal of this project is to practice with:

- **Setting up Webpack**
- **Sass styles**
- **Webpack Loaders and Plugins**
- **Creating layouts and page design**
- **Service workers**
- **Using APIs and creating requests to external URLs**


## Get Up and Running

1- Fork this repo.

2- Clone the repo from your forked repo down to your computer:
```
git clone https://github.com/[your-user-name]/[your-forked-repo].git
 ```
    
3- `cd` into your new folder:
```
cd your-repo-name
 ```
    
4- Install dependencies:
```
 npm install
```

5- Environment Variables:
    The project requires some environment variables to function properly. Create a **.env** file in the root directory and add the following variable:
```
 API_KEY=your-meaningcloud-api-key
 ```

6- Running the Project:
- To run the project in development mode with live reloading:
```
npm run build-dev
```
This will start a development server at http://localhost:3000,  with Webpack's dev server.

- To create a production build: run
```
npm run build-prod
```
This will generate optimized files in the **dist** folder.

7- Start the Server:
   This app runs on localhost:8081, but you can of course edit that in server.js
```
npm start
```

8- The project uses Jest for unit testing. Tests are located in the __test__ folder.
   To run test:
```
npm test
```
