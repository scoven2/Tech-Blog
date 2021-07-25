# Tech-Blog

## Description
A blog that allows people to create accounts and create different posts. The posts have a title as well as text, and other users are able to comment on the current posts. Users are also able to edit post and comments, as well as delete them entirely.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [License](#license)


## Installation

* `npm init -y`
* `npm install` 

## Usage

In terminal run 
* `mysql -u root -p`

Enter your MySQL password. Then run:
* `source db/schema.sql`
* `quit`
* `npm run seed` 
* `npm start`

## Technologies

This application was made using:

![Javascript](https://img.shields.io/badge/-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)

![MySQL](https://img.shields.io/badge/-MySql-4479a1?style=for-the-badge&logo=mysql&logoColor=white)

![Insomnia](https://img.shields.io/badge/-Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)

![Heroku](https://img.shields.io/badge/-Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) 

With the following npm packages:
* `express.js` 
* `dotenv`
* `Sequelize`
* `bcrypt`
* `express-handlebars` 
* `express-session`
* `connect-session-sequelize`

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

