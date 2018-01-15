This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The Project when installed provides the user with a Trello Board
The Trello Board can perform the following Task:
*`Add Card`
*`Edit Card`
*`Delete Card`
*`Traverse Among Lists`(Todo In Progress and Done)
*`Persists Data` on page refresh

## Sending Feedback

We are always open to [your feedback](https://github.com/facebookincubator/create-react-app/issues).

## Folder Structure

After creation, your project should look like this:

```
trelloBoard/
  README.md
  node_modules/
  package.json
  app.js
  public/
    index.html
    favicon.ico
  src/
    actions/
      actionCreator.js
    components/
      __styles.js
      Lists.js
    containers/
      container.css
      HomePage.js
    reducers/
      combineReducerFile.js
      fetchApiData.js
    store/
      configureStore.js
```

For the project to build, **kindly perform the following tasks**:

* `npm install` To load all dependencies;
* `npm start` to start the project.
