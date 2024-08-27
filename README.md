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

- `cd` into your new folder and run:
    ```
        cd your-repo-name
    ```
3- Install dependencies:
   ```npm install
   ```

4- Environment Variables:
    The project requires some environment variables to function properly. Create a **.env**file in the root directory and add the following variable:
    ```
    API_KEY=your-meaningcloud-api-key
    ```

5- Running the Project:
   ```
    Development Server : npm run build-dev
    Production Build : npm run build-prod
   ```

6- Start the Server:
- this app runs on localhost:8081, but you can of course edit that in server.js
    ```npm start
    ```

7- The project uses Jest for unit testing. Tests are located in the __tests__ folder.
  - To run tests:
    ```
    npm test
