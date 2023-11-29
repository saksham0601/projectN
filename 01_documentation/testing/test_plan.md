# ProjectN Test Plan

## Testing Techniques

We will be using Selenium to act as a user and test various elements of our website. It has pre-written scripts and libraries that we will make use of to comprehensively test different website elements using their unique IDs. It will also help keep the testing and product functionality up to the required standards. Some of the features we'll be testing will be:

- Different web elements
- Formatting buttons
- Support for different browsers
- Support for different operating systems
- Input of external files onto the website
- Exporting files
- Linking of different pages
- Retrieving user's old saved files(storage) 

## Testing Infrastructure

The test infrastructure to be used will be split into two parts; that which is within the scope of the input window, and that which concerns every other functionality.

Test cases handling functionality outside the input window will simply follow a detailed path of user inputs and aim for the descriptions of the expected behaviour. For this we will be using Selenium.
    
Test cases having to do with the input window's functionality will be tested with the use of a separate files, which will include all possible recognizable formattings of our program. We are going to have test.md as our sample text in markdown format and make sure it behaves the way we expect it to on our webapp. We have a pdf called expected.pdf showing how the final result should be like. The test cases will also handle out of scope input; incorrect input; not accepted file formats. 

## Test Cases

| Title         | Description                                                                                        | Files Used            |
| ------------- | -------------------------------------------------------------------------------------------------- | --------------------- |
| Open File     | User loads a separate file into the program + is provided a warning that unsaved work will be lost | test.md               |
| Save File     | User saves a file in .md format successfully onto their system                                     | test.md               |
| Blank Page    | User is able to start from scratch + is provided a warning that unsaved work will be lost          | N/A                   |
| Linking              | User is able to switch between different modes that are linked together                                                                                                   | N/A                      |
| External file | User is able to import accepted file formats from their computer onto the webpage                  | N/A                   |
| Formatting    | Formatting is successfully recognized                                                              | test.md & expected.pdf |


### Testing Case 1

The user opens the app to the main screen. We are testing file management.

#### Case 1.1

The user loads a file from their computer.

Expected behaviours:

- If incorrect file format: do not open and display error message.
- If correct file format: display file.

#### Case 1.2

The user creates a new file.

Expected behaviours:

- Create a blank page.
- Blank pages allows to write.
- Displays every element of the blank page display correctly.

#### Case 1.3

The user creates a new file, writes on it, saves the file, closes the app and tries to open the file again from recents.

Expected behaviour:

- The file loads correctly with the most recent changes made by the user.

#### Case 1.4

The user imports a plain text file that is not a .md file.

Expected behaviour:

- The file just loads the text file as it is with its contents.

#### Case 1.5

The user imports a type of file that is not supported.

Expected behaviour:

- The user gets an error message saying "Selected file not supported.".
- The user is asked to choose another file from their computer.

#### Case 1.4

The user tries to save a file with the correct format

Expected behaviour:

- The file is correctly saved in the chosen directory.
- the user can access the file in their computer.

### Testing Case 2

The user creates a document, writes on the it in markdown format. 

#### Case 2.1

The user writes standard markdown.

Expected behaviour:

- The text is rendered correctly.

#### Case 2.2

The user writes in extended markdown.

Expected behaviour:

- The text is rendered correctly.

### Testing Case 3

Testing linking of different pages

#### Case 3.1

The user tries to change between different writing modes

Expected behaviour:

- The correct mode is opened.

#### Case 3.2

The user wants to go back to the home screen

Expected behaviour:

- The user is asked to save any unsaved work.
- The user is taken to the home page(landing page).
- The recent file that the user was working on is shown under recent files.
