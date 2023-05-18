# Calculator_App

I am currently learning full stack web development with node and express.

These are the steps I took to start a new project.

1. mkdir new folder
2. create .js file
3. set up a new NPM package using the command - `$ npm init`
4. make the entry point the (.js) file
5. install express using the command - ` $ npm install express`
6. Then I require express in my .js file using ```const express = require('express')

```
7. add the following code :
```

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World!')
})
app.listen(port, function() {
console.log(`listening on port ${port}`)
})

````
8. boot up the server using ```node filename.js ``` or ```nodemon filename.js```

9. ```npm install body-parser```


10. require ```const bodyParser = require('body-parser')```


````
