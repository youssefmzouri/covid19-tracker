## Introduction 
This project was only for React applications learning.

## Steps

### `First step: $ npm i`
To Install all the dependencies the project needs

### `Second step: $ npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Final step: $ npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your covid19-tracker is ready to be deployed!

## Important
Notice there ara a .env.example file.
This allows me to deploy the REACTAPP into a subfolder of my server.

`www.myServer.com/covid19-tracker`

If you want to deploy your app like me, only have to remove the string ".example" from the name of the file and edit the variable `PUBLIC_URL` with the name of your subfolder.
<br/><br/>
For more info: <br/> https://create-react-app.dev/docs/adding-custom-environment-variables/