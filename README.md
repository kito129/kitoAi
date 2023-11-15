# kito.ai
    author: kito129
    date: 2023/08/01
    last update: 2023/10/26
    version: v2023.0.2

[Changelog](https://github.com/kito129/kitoAi/blob/main/changelog.md)

# Abstract

[Technology](./design/technology.md)


## FrontEnd 

### Node and all other tool versioning Installation

    nvm install 20.9.0
    nvm use 20.9.0

> * 20.9.0 (Currently using 64-bit executable)


#### Current Version

 ng version

        Angular CLI: 17.0.0
        Node: 20.9.0
        Package Manager: npm 10.1.0
        OS: win32 x64

        Angular:
        ...

        Package                      Version
        ------------------------------------------------------
        @angular-devkit/architect    0.1700.0 (cli-only)
        @angular-devkit/core         17.0.0 (cli-only)
        @angular-devkit/schematics   17.0.0 (cli-only)
        @schematics/angular          17.0.0 (cli-only)


### Angular Installation

[Sources](https://angular.io/guide/setup-local)


    npm install -g @angular/cli

create project

    ng new kitoAi --inline-template --inline-style --skip-tests --prefix kito

#### Angular Material UI

[Angular Material UI](https://material.angular.io/guide/getting-started)
    
        ng add @angular/material
        ng add @angular/cdk




set NODE_OPTIONS=--max_old_space_size=6096





## Postgres Installation

[Sources](https://www.postgresql.org/ftp/source/)



To properly install PostgreSQL on Ubuntu 20.04, you can follow these steps:

Step 1: Update the package index and package lists:


    sudo apt update

Step 2: Install PostgreSQL and its client tools:


    sudo apt install postgresql postgresql-contrib

Step 3: PostgreSQL should now be installed on your system. By default, PostgreSQL creates a new user called "postgres" to manage the database. To interact with PostgreSQL, you can switch to this user using the following command:

    sudo -i -u postgres

Step 4: Now that you are logged in as the "postgres" user, you can access the PostgreSQL interactive terminal (psql) using:

    psql

Step 5: To exit the PostgreSQL interactive terminal, type:

    \q
Step 6: If you want to create a new PostgreSQL user and database, you can do so using the following steps:

    # Create a new user (replace 'new_username' with your desired username):
    createuser --interactive --pwprompt new_username

    # Create a new database (replace 'new_dbname' with your desired database name and 'new_username' with the username you just created):
    createdb new_dbname --owner=new_username

Step 7: Once you have created a new user and database, you can connect to the database using psql:

    psql -d new_dbname -U new_username

That's it! You have now properly installed PostgreSQL on Ubuntu 20.04 and created a new user and database for use. You can interact with PostgreSQL using the "postgres" user or any other user you have created.


## PostreSQL Insert data and check
sudo -u postgres psql
Step 2: Insert data into the "employees" table:
Assuming you have the "employees" table with columns "id," "name," "age," and "salary," you can insert data into it using the following command:

    INSERT INTO projects (name, age, salary)
    VALUES ('John Doe', 30, 50000.00),
        ('Jane Smith', 28, 60000.50),
        ('Michael Johnson', 35, 75000.75);
In this example, we are inserting three rows into the "employees" table. Each row contains values for the "name," "age," and "salary" columns.

Step 3: Verify the data insertion:
To check if the data was inserted successfully, you can query the "employees" table:

    SELECT * FROM projects;


Example output:


    CREATE TABLE projects (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        importance DECIMAL(10, 2)
    );

Insert

    INSERT INTO projects (name, importance)
    VALUES ('00_unlisted', 6.0),
            ('01_polimi', 10.0),
            ('02_homeAutomation', 9.0),
            ('03_kito.ai', 8.0),
            ('04_tortuga', 3.0),
            ('05_fiverr', 4.0),
            ('06_blog', 1.0),
            ('07_UStrip', 6.0),
            ('08_finance', 7.0),
            ('09_wakeUp', 0.0),
            ('10_library', 1.0),
            ('11_backup', 7.0),
            ('12_manualWorkHome', 8.0),
            ('13_raspberryOs', 3.0),
            ('14_music', 5.0),
            ('15_videosProjects', 5.0),
            ('16_workstationDocs', 5.0),
            ('17_sisterWebsite', 0.0),
            ('18_vascaWebsite', 4.0),
            ('19_sport', 10.0);

# check connection port

    pg_lsclusters
    Ver Cluster Port Status Owner    Data directory              Log file
    14  main    5432 online postgres /var/lib/postgresql/14/main /var/log/postgresql/postgresql-14-main.log

# check instllation

with [TesSql](./testSQL.py) file you can check if the installation is correct, retriving all the table in the database and all the data in the tables.



# Fastify first install

- https://duncanlew.medium.com/build-a-node-js-server-with-fastify-and-typescript-a0f7225afddc
- https://github.com/duncanlew/demo-fastify-typescript



1. Start a project with required dependencies
We are going to set up a Fastify project from scratch. The first thing we need is a directory for our source code. Let’s create a new directory via our terminal:

    mkdir fastify-typescript
Afterwards, let’s navigate into our newly created directory:

    cd fastify-typescript
    mkdir src
    mkdir build
The next step is to initialize an npm project

    npm init -y
The -ymeans that we’re going to accept the defaults.

Finally, we’re going to install the required production and development dependencies for our project like this:

    npm install fastify
    npm install -D typescript @types/node ts-node
2. Set up the TypeScript compiler
TypeScript is our language of choice for developing the Fastify server. To get started, we’re going to initialize a TypeScript configuration file like this:

    npx tsc --init
The TypeScript compiler will create a tsconfig.json file with some defaults. Make sure to change the target value to es2017 or later. Doing this will prevent Fastify from throwing deprecation warnings later in the process. Also, make sure to add the rootDir and outDir to specify where the source code and compiled code should be placed. Your resulting tsconfig.json file should look like this:


3. Set up a simple Fastify server with ts-node
Let’s create an index.ts file in the src directory that contains a simple Fastify setup. We create a GET path for / which sends back a simple response. The contents of the file should look like this:


Our next step is to add the following line to the scripts section of package.json :


We use ts-node to run the TypeScript file directly without having to transpile it first to JavaScript. This prevents us from doing it in a two-step process. Our final step is to run our newly created command in the terminal:

    npm run start-ts
The Fastify server will start up and listen for a request at localhost:8080:


Fastify startup output
Finally, open up a browser and visit localhost:8080 to see the hello there output:


Fastify output in the browser
4. Set up Fastify server with transpilation
Using ts-node is a good alternative for quickly getting your application up and running with TypeScript for testing purposes. But if you’re going to use it in a production setting, it’s better not to rely on ts-node, but to actually transpile your code to JavaScript and run the transpiled file with node. This can be done by adding the following two lines to the scripts section in your package.json file:


Now you can run your transpiled TypeScript project like this:

    npm run build
    npm run start
The first command transpiles the TypeScript file in the src directory and stores the output in the build directory. The second command uses node to run the transpiled JavaScript files.

5. Integrate logging
Fastify supports logging right out of the box. However, this functionality is disabled by default. The logging can be enabled easily by passing the parameterlogging: true to the Fastify constructor. The benefit of using the integrated Fastify logger instead of the plain-old console.log() is because the Fastify logger adds extra information which makes it easier to track important information like server name and request IDs. This can make debugging errors and warnings in your Fastify server more easily when you have this extra tracking information.

Logging can be turned on in Fastify like this:

    const server = fastify({logger: true})
Afterwards, you can replace your console.log() statements with this Fastify statement:

    server.log.info('Incoming request at /');
If you run your application again with the logging turned on and the modified logging statements, your terminal output will look like this:


