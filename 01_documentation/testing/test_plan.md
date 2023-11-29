# ProjectN Test Plan

## Testing Techniques

    We will be using Selenium to act as a user and test various elements of our website. 

## Testing Infrastructure

    The test infrastructure to be used will be split into two parts; that which is within the scope the input window, and that which is outside.

    Test cases handling functionality outside the input window will simply follow a detailed path of user inputs and aim for the descriptions of the expected behaviour.
    
    Test cases having to do with the input window's functionality will be automated with the use of a separate file named test.md, which will include all possible recognizable formattings of our program.

## Test Cases

| Title       | Description                                                                              | Files Used       |
| ----------- | ---------------------------------------------------------------------------------------- | ---------------- |
| Open File   | User loads a separate file into the program                                              |  N/A             |
| Save File   | User saves a file in .md format successfully onto their system                           |  N/A             |
| Blank Page  | User is able to start from scratch + is provided a warning that unsaved work will be lost|  N/A             |
| Bold        | Bold formatting is successfully recognized                                               |  test.md         |
| Italics     | Italics formatting is successfully recognized                                            |  test.md         |
| Underline   | Underline formatting is successfully recognized                                          |  test.md         |
| Heading_1   | H1 formatting is successfully recognized                                                 |  test.md         |


