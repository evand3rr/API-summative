WEATHER WEB APP
Project Overview
This project entails the use of APIs and their integration so as to make a benefitting application to the community. The weather web app can be used to find out the weather conditions of any geographical location in the world in realtime, making it efficient and the information easily accessible. There were a bit of hindrances here and there, in regards to the Javascript writing and finding a suitable API, but I eventually pulled through.

The following technologies and tools were used to develop this application:

HTML: For structuring the application.

CSS: For designing the layout and styling.

JavaScript: For interactivity, API calls, and client-side logic.

The features of the application are;
Integrates live data from the API to enrich the user experience.

Displays user-friendly error messages in case of API failures or connectivity issues.

Manages sensitive API keys through a config.js file that is excluded from version control.

APIs Used
OpenWeather API

Provides real-time data such as weather updates for specific locations.

Includes current weather, forecasts, and historical data.

Setup and Installation
To set up and run the application locally, follow these steps:

git clone https://github.com/evand3rr/API-summative.git

Install Dependencies:This project requires no external libraries or package managers. Ensure you have a modern web browser installed.

Configure API Keys:

Create a file named config.js in the root of the project directory.

const API_KEY_1 = 'your_api_key_1';

Ensure the config.js file is added to the .gitignore to prevent accidental uploads.

Running the Application Locally
Open the index.html file in a web browser.

For a better development experience, use a live server (e.g., Live Server extension in Visual Studio Code).

Deploying to Web Servers
Deploying to Custom Web Servers
Compress all project files (index.html, styles.css, config.js, etc.) into a ZIP file or use an FTP client.

Upload the files to your web server

Configure the server to serve the index.html file as the main page.

Challenges and Solutions
1. Managing API Keys
Challenge: Avoid exposing sensitive API keys in public repositories.

Solution: The config.js file is excluded from version control by using a .gitignore file.

Acknowledgments
We acknowledge the contributions of the following resources and tools:

API Providers:

OpenWeatherAPI for reliable weather data.
