# tdubs-fullstack-framework

***

Full-stack template for an:

* express server protected by CORS and helmet
* DB and REST API functionality powered by knex and sqlite3
* a frontend served up with React and axios

## Installation

Select "Use this template" and clone to your machine to continue

```bash
git clone <URL>
```

## Usage

_You will want to change "category" with whatever relates to your project. Following are the files that will need
updating ( I prefer using ctrl + F and selecting all in a file to replace ) :_

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

# install all client dependencies
cd client
npm i

# initiate eslint in client
npx eslint --init

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
