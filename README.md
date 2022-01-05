# interview-assignment

---

## Requirements

- For development, you will only need Node.js and a node global package, installed in your environement.
- IDE used is Visual Studio Code editor and must have Live Server extension installed to be able to run the raw html file(in terms of giving it a port number orthewise it will be blocked by CORS policy)

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.13.0

    $ npm --version
    8.1.0

###

---

- ## Getting Started
  $ git clone https://github.com/Moro-Afriyie/interview-assignment.git

##

---

## Install Dependencies for the backend

    $ cd backend (this is the only folder which had a package.json file in it)
    $ npm install

## Install Dependencies for the frontend in case you don't have live server extension installed on vscode

    $ cd frontend
    $ npm install http-server -g (this package is used to run the frontend files on localhost since i didn't use any frontend framework)

## Running the project

### Backend

    $ cd backend
    $ npm start
    $ Navigate to `http://localhost:5000`

### Frontend

    $ cd frontend
    $ http-server
    $ Navigate to `http://localhost:8080/`
