# 2019 Christmas Present

Chrome extension where Stitch will follow you around in your chrome browser. If you get tired of him you can put him away or make him sit in the corner.

Created this chrome extension for friend who loves Stitch. 

<p align="center">
<img src="https://github.com/ohylime/StitchChromePet/blob/master/images/stitch-stomp.gif" width=175>
<img src="https://github.com/ohylime/StitchChromePet/blob/master/images/stitch-tantrum.gif" width=175>
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node version 8
- NPM
- Knowledge of JavaScript / React / Redux

Install NVM : https://github.com/nvm-sh/nvm

### Installing

A step by step series of examples that tell you how to get a development env running

1. Install node modules
    ```
    npm install
    ```

2. Build Extension

    ``` 
    npm start
    ```
    
    There will be a new `build` directory created.
    * Each time you make a change run this to make new build!
    
#### How to install in Chrome Browser

1. Navigate to chrome://extensions/  in your chrome browser
2. Enable Developer Mode on left top corner tab
3. Click on `Load Package`
4. Navigate to directory and select the `build` directory
5. Extension should Christmas Tree on Chrome Browser

## Built With

* [NodeJS](https://nodejs.org) 
* [React](http://reactjs.org/) - Dependency Management
* [webext](https://github.com/tshaddix/webext-redux/wiki/Introduction) - Useful Package to use React and Redux in Chrome Extension
* [GreenSock](https://greensock.com) For Animations

## Authors
* **Emily Ho** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Hat tip to anyone whose code/art was used
