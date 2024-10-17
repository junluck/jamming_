# Jammming
Jammming is a React web application that allows users to search for songs, create custom playlists, and save them directly to their Spotify account. The app uses the Spotify API for seamless integration with your Spotify account, allowing you to combine existing song playlists with new songs to create fresh playlists.


## Technologies Used
* React: Front-end library for building the user interface.
* JavaScript (ES6+): For component logic and state management.
* Spotify API: For fetching song data and saving playlists.
* CSS: For styling the application.
* Getting Started
* To get a local copy up and running, follow these steps:

## Prerequisites
* Node.js: Make sure you have Node.js installed on your machine. You can download it here.
* Spotify Developer Account: You need to create a Spotify Developer account and register your app to get the Client ID.

### Setup Instructions
#### Clone the Repository:

        git clone https://github.com/your-username/jammming.git
        cd jammming

### Install Dependencies:

        npm install

### Set Up Spotify API:

* Go to Spotify Developer Dashboard.

* Create a new app and note down your Client ID.

* Set the Redirect URI to http://localhost:3000/ in the Spotify Dashboard.

* Create a .env file in the root of your project and add:

        REACT_APP_SPOTIFY_CLIENT_ID=your-client-id
        
### Start the Development Server:

        npm start
        The app will run at http://localhost:3000/ by default.

## Usage
* Search: Type the name of a song or artist into the search bar to find songs.
* Add to Playlist: Click the + button to add a song to your playlist.
* Create Playlist: Enter a name for your playlist.
* Save to Spotify: Click Save to Spotify to save your playlist directly to your Spotify account.


## Contributing
1.Contributions are welcome! If you want to contribute to the project:
<br/>
2.Fork the repository.
3.Create a new branch for your feature or bugfix.
4.Commit your changes.
5.Push the branch to your forked repository.

