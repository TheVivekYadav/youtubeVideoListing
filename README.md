# YouTube Video 

## Description
This project fetches YouTube videos using the [FreeAPI YouTube API](https://api.freeapi.app) and displays them dynamically on a webpage. Users can view video thumbnails, titles, and channel names, and click on thumbnails to open videos on YouTube. The project also includes a search functionality to filter videos based on titles and channel names.

## Features
- Fetches a list of YouTube videos from FreeAPI.
- Displays video thumbnails, titles, and channel names.
- Allows users to click on a thumbnail to open the video on YouTube.
- Includes a search feature to filter videos dynamically.

## Technologies Used
- HTML
- CSS
- JavaScript
- Fetch API

## Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repository.git
   ```
2. Navigate to the project folder:
   ```sh
   cd your-repository
   ```
3. Open `index.html` in a web browser to view the application.


## How It Works
1. `getVideosDetail()` fetches video details from the API and extracts the relevant information.
2. `renderVideos(videos)` dynamically generates video cards and displays them on the webpage.
3. `loadVideos()` fetches and renders videos on page load.
4. The search bar listens for input and filters videos based on user queries.



