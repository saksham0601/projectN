# Design Document projectN

## Team Project Name and Info

#### Our project name:  

projectN

#### Our team’s name:  

MMM

#### Our team members:  

Yulia Bobkova  
Saksham Singh Sohal  
Santiago Daza  
Vladimir Zhelev  

#### Primary contact:  

Yulia Bobkova  
yulia.anna.bobkova@gmail.com

## Table of Contents

- #### Under maintenance 

## Design Overview

![level0](imgs/level0.png)

The above represents the DFD Level 0. In this, the most basic interaction.

Developers

* Our team

projectN

* This is our web app

User 
* The note taker

**Developer Links**

- updates, any bug fixes or major changes
- user profile, any setting changes, ribbon customizability, theme changes, typing mode changes, account settings
- output, user input goes into projectN and outputs to us, the developers
- all above is saved into the database


**User Links**

- formatting tools, user is given a set of text formatting tools to use 
- blank page, user is given a blank page to put their output onto
- settings, give the user customizability options for their account, ribbons, theme, view mode ect.

## Logical Design

Our approach primarily focuses on system decomposition, data flow diagrams, and the main system components. The central elements of our approach include system decomposition, data flow diagrams, linking system elements and interactions, and capturing functionality. This approach guides us through the subsystems during the decomposition phase. We subsequently create data flow diagrams to address specific aspects, ensuring that our design comprehensively encompasses all of the product's functionality and the necessary requirements for the initial version. Additionally, we have incorporated logical implementations for certain features, which would be beneficial in the later stages of the project.

### Decomposition

We have considered the following subsystem:

- #### Product Feature Subsystem:

Purpose: Handle the core features and functionalities of  the application.
Functionality: Implement and manage the key features outlined in the product overview, including note-taking, knowledge-testing, synchronization, offline access, search, indexing, and more.

- #### User Interface Subsystem:

Purpose: Manage the user interface and visual aspects of the application.

Functionality: Design, layout, and control the appearance and behavior of the app's user interface, including taskbars, themes, fonts, and user customization options.

Components: This subsystem can encompass various components responsible for rendering the user interface elements and ensuring a user-friendly and visually appealing experience.

- #### Cloud Integration Subsystem:

Purpose: Explore integration with cloud services for data storage and backup.

Functionality: Allow users to access their data from different devices.

- #### Search and indexing Subsystem:

Purpose: Provide quick retrieval of notes.

Functionality: Implement a search feature and indexing system for efficient content retrieval.

- #### Synchronization Subsystem:(optional)

Purpose: Enable syncing of data across multiple devices.
Functionality: Sync notes and quiz data between the web app and other platforms (iOS, Windows).

- #### Offline Accessibility Subsystem:

-Purpose: Ensure the app can be used without an internet connection.
Functionality: Enable users to access and edit their notes and quizzes offline.

- #### Note-Taking Subsystem:

Purpose: Handle the core note-taking functionality.

Functionality: Create, edit, format, and save notes. Implement the Markdown formatting.

- #### User Management Subsystem:

Purpose: Manage user accounts, authentication, and authorization.

Functionality: User registration, login, profile management, and permission control.

- #### Knowledge-Testing Subsystem:

Purpose: Manage knowledge-testing tools and quizzes.

Functionality: Create, edit, and take quizzes based on notes. Track and display quiz results.

![level1](imgs/level1.jpg)

The above represents the DFD Level 1. zooming into more detais;

### Inupt-output streams, cloud integration sub-system, User mangment sub-system

1. User -> Input -> Interpreter -> Project N -> Display ->User (User <--> Display)
2. User -> personal info -> server ( User <--> Server)
3. User -> feedbcak -> Developers (indirect interaction: User <--> Developers)

(The process between Interpreter and developer described in level 2 DFD)


![level2](imgs/level2.jpg)

This diagram explains the role of the interpreter based on the conditions that apply to the input!

Beginning of the processing data, analytical stage, prepare to explain the level 2.1 DFD diagram.

### Product Feature Subsystem, Note-Taking Subsystem, Inupt-output streams


![level_2-1](imgs/level_2-1.png)

RenderThis diagram provides in-depth details about data processing, serving as an extension of the Level 2 DFD. Data processing is organized around three chosen classes:

1. Page, 
2. Menus, 
3. Account.

From these classes, the application will be able to generate objects based on these classes!

Each of these objects will encompass distinct features and functionality in alignment with the specific requirements. Additionally, each feature is associated with performing actions to do what is required.

## Physical Design

For the most part, we are using Google standards for the physical design of the structure.

### Programming language(s) and any supporting tools to be used

- In the beginning phases of the projectN, Vanilla JavaScript will be used with a few external libraries, aiming to integrate the next.js framework as the project progresses.
- External libraries used for JS:
    - https://github.com/markedjs/marked
    - http://purl.eligrey.com/github/FileSaver.js
- HTML
- For the style we are using CSS with the extension Sassy CSS (SCSS).
- For icons we used Boxicons icon library(https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css)
- Selenium to automate the testing process.
- An external server to host. 

### Directory and File Naming Structure to be Used Within the Code Repository

According to Google Style, file names must be all lowercase and may include underscores (_) or dashes (-), but no additional punctuation.

### File Structure

The file structure contains mainly two folders, 01_documentation and 02_projectN. If any folder requires additional tools to assist its main purpose, a new folder is added within and given an appropriate name that explains its purpose, for example, images folder containing images called "imgs".

#### 01_documentation

This folder contains all necessary documentation regarding functionality, standards and other relevant information. 

#### 02_projectN

This folder contains the main application and its components. It is spilt into two folders, "01_scripts" and "02_css". It contains all the HTML files.

##### 01_scripts

The back-end is going to use a single folder called scripts in the projectN folder storing all the JavaScript files responsible for the functionality of projectN.

##### 02_styles

This folder is responsible for the entire front-end. It contains all the css style files and any external icons, formats or sytles used, and also contains any JavaScript files used for the front-end.

### Interface for all public services provided by the element:

All elements in the HTML documents are freely accessible by all front-end and back-end files by their respective IDs.

