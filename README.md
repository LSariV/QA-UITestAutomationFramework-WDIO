# QA-UITestAutomationFramework-WDIO
WebdriverIO is JS based UI Test automation  framework used by Testing team.
WebdriverIO Automation with Mocha BDD
Features:
Use Page Object Model for managing your test cases
Mocha + Chai for testing
Interactive report with Allure
Babel as compiler
Prettier.io as code formatter
Integration for browser stack for cross browser testing
Integration for Appium to test  web applications in mobiles (To-DO)
Integrated with Slack to send notifications 
Provides dot , spec and Allure reports 
Screenshots on failed tests
Video recording of the test cases integrated with Allure reports 
Ability to organize the test suites
Rerun the failed tests
Different types of logs integrated
Ability to Intercept the AJAX calls (to-do)
REPL Interface 
Image Comparison(to-do)
Various configuration files to reduce complexity …..

Getting started :
This repository contains a collection of sample webdriverIO (v5x) projects and libraries that demonstrate how to use the tool and develop automation script using the Mocha BDD framework. It support ES6 (via babel-register) 

Quick start:
clone the git repo and run npm i to install all the dependencies mentioned ion the package.json 

Run the test:
npm run test 
This will trigger the default test mentioned in wdio config.json > spec []

npm run suites --smoke
to run the smoke suite mentioned in parent config file or specific config file as per the data in package.json

Please read the deatailed documentation from this confluence page https://bitbucket.org/TestAutomation-WDIO/webdriver-v5-ui/src/master/

All the upadtes to the framework will be updates in the confluence page.

Thankyou!
