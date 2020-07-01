# atlas-defi: Description
Atlas is a decentralized cryptocurrency loan platform for executing transfers without requiring large amounts of cryptocurrency as collateral from the borrower. Anonymous distributed nodes can decide which loan contracts suit their needs (based on interest, time of payouts, credibility of the borrower, etc.), and choose contracts based on which third-party verifier meets their criteria.
## Run Instructions for Client Application Local Setup
1. Clone the Atlas-Frontend Repo
2. Run ```npm install``` in the root of the project directory to install local dependencies
3. I
### Backend
1. Clone the Atlas-Backend Repo 
2. Install "ngrok" free local tunnelling service. In the install directory, run ``./ngrok authtoken {my auth token}`` after making an account and receiving your free project key.
3. Inside the root of the backend project, run ```npm install``` to install local dependencies.
4. Next, run ```node app.js``` to launch the Node/Express server.
5. 



## Run Instruction Overview

For an overview of what terminal tabs you need open and the associated run commands required run the project locally, refer to the below table.

| Terminal Location              |Run Commands                          |Result                         |
|----------------|-------------------------------|-----------------------------|
|atlas-frontend/web|`'npm start'`            |React frontend is launched on localhost:3000            |
|atlas-frontend          |`truffle compile` or `truffle test` or `truffle migrate`          |Compile, test, or migrate Solidity contracts   
|atlas-backend          |  `node app.js` | Express server is launched on localhost:8080
