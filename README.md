## Assignment submission by :- Prathamesh Tayade

Live link for the app : <https://jazzy-salamander-13c209.netlify.app/>

To run the app locally, follow these steps:

1\. Download the code folder to your local machine.

2\. Open the terminal and navigate to the project directory.

3\. Install the required dependencies using the command `npm install`.

4\. Start the development server by running the command `npm run dev`.

5\. Open your browser and navigate to `http://localhost:5173/` to view the app.

The app consists of two main components: Contacts page and Dashboard page consisting of a line chart and a map component. The line chart displays the number of COVID-19 cases over time, while the map displays the locations of countries with COVID-19 cases, along with the number of active, recovered, and deceased cases.The stats show the current world cases.

## APIs
The app uses the following APIs to fetch data:

- World wide data of cases: https://disease.sh/v3/covid-19/all

- Country Specific data of cases: https://disease.sh/v3/covid-19/countries

- Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all

The app is built with React, TypeScript, React Query , Redux for handling API calls and data management, Leaflet for the map component, and Recharts for the line chart component. Tailwind CSS is used for styling the app.

To update the chart with the latest data, simply refresh the page or wait for the React Query cache to expire and refetch the data from the API.
