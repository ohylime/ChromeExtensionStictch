# Compass 2019 Hackathon 

###Compass Chrome MLS Extension

Today MLSs rule how agents create, search, and discovery listings in most of the US. Often the MLSs are antiquated, offer reduced functionality, and have a clunky user experience. Furthermore, data entered into the MLSs may take hours or days to reach Compass.  The goal of this proposal is to help agents deal with the MLS and their passage to Compass. The Compass Real state chrome plugin will give agents the capability to seamlessly import listings into Compass, search for compass listings form the MLS, and create listings in Compass and the MLS at the same time. The plugin will also allow Compass analysts to understand better how agents use and interact with MLSs.

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

3. Navigate to chrome://extensions/  in your chrome browser
 - Enable Developer Mode on left top corner tab
 - Click on Load Package
 - navigate to directory and select the build directory
 
 You should see the Compass MLS Extension installed in your extension tool bar!

## Built With

* [NodeJS]() 
* [React](https://maven.apache.org/) - Dependency Management
* [webext](https://github.com/tshaddix/webext-redux/wiki/Introduction) - Used to generate RSS Feeds

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Emily Ho** 
* **Mike Chen** 
* **Wen Ye** 


See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
