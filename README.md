# tdubs-express-react-template
***

Full-stack template for an:
* express server protected by CORS and helmet
* DB and REST API functionality powered by knex and sqlite3
* a frontend served up with React and axios

![npm](https://img.shields.io/npm/v/tdubs-express-react-template?style=for-the-badge)
![npm](https://img.shields.io/npm/dm/tdubs-express-react-template?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/tdubs-express-react-template?style=for-the-badge)

## Installation
Use npm or yarn to install tdubs-express-react-template
```bash
npm i tdubs-express-react-template
```

## Usage

_You will want to change "category" with whatever relates to your project. Following are the files that will need updating ( I prefer using ctrl + F and selecting all in a file to replace ) :_
- src/knexfile.js (db name)
- src/category (dir name)
- src/category/category-middleware.js
- src/category/category-model.js
- src/category/category-router.js

```bash
# install all server dependencies
cd src
npm i

# initiate eslint 
npx eslint --init

? How would you like to use ESLint?
  To check syntax only
> To check syntax and find problems
  To check syntax, find problems, and enforce code style
  
? What type of modules does your project use?
  JavaScript modules (import/export)
> CommonJS (require/exports) 
  None of these
  
  # even though we will be using React
? Which framework does your project use?
  React
  Vue.js
> None of these

? Does your project use TypeScript?
> No
  Yes
  
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
> Browser
> Node

? What format do you want your config file to be in?
  JavaScript
  YAML
> JSON

# install all client dependencies
cd client
npm i

# initiate eslint for frontend
npx eslint --init

? How would you like to use ESLint?
  To check syntax only
> To check syntax and find problems
  To check syntax, find problems, and enforce code style
  
? What type of modules does your project use?
> JavaScript modules (import/export)
  CommonJS (require/exports) 
  None of these
  
? Which framework does your project use?
> React
  Vue.js
  None of these

? Does your project use TypeScript?
> No
  Yes
  
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
> Browser
  Node

? What format do you want your config file to be in?
  JavaScript
  YAML
> JSON

# The config that you've selected requires the following dependencies:
eslint-plugin-react@latest eslint@latest

? Would you like to install them now with npm?
  No
> Yes

# run server
cd src
npm run server

# run frontend
cd client
npm start

# frontend tests done with cypress
npm test
```

# _Don't forget to grab a taco after all of that hard work!_

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
