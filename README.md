# Project Title
- COVID vaccine registration system Frontend
## Setup

Clone the repository:
   ```bash
   git clone https://github.com/tarikulIslamNahid/covid-frontend.git 
   ```
Navigate to the project directory:
   ```bash
   cd covid-frontend
   ```
NPM:
   ```bash
   npm install
   ```
OR YARN:
   ```bash
   yarn install
   ```

Setup Project:
   ```bash
   # create a .env file

   # setup the url's
    APP_API_URL= 'http://127.0.0.1:8000/' # your backend project url
    APP_URL= 'http://localhost:3000' # your frontend project url
   ```
Run Project:
   ```bash
   yarn dev
   ```
   or
   ```bash
   npm run dev
   ```

## Note about how i optimise the performance
- Use eager loading to load related data in a single query
- Add indexes to fields that are frequently queried,

## Additional Information
- for backend repo visit: https://github.com/tarikulIslamNahid/covid-api.git 
