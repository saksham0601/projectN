# MMM Version Control

The objective of this document is to set the specifications for the version control that MMM is going to follow for project N. For this, Github is going to be used. 

## Git structure

Project N repository is going to have the following structure:

### Main branch:

This going to be the stable ready to go version of the product.

The versioning naming is going to be set by the significant of the update that is going to be made. This scheme is going to allow setting milestones for the version to change but still allow for minor changes to be realize before the major updates. 

1. Example: Project N v 1.0 -> Project N 1.1 -> Project 2.0 

Only one person is in charge to push the changes from Dev to the main branch. This person in charge of pushing is going to rotate every week.

### Dev branch

This branch is going to be the one is going to be forked to work on for the different features that are ion current development. This includes main features or experimental features.

## Preventing Conflicts when Pushing

To prevent conflicts when a team member is going to push from their own cloned repository the next steps are to be followed:

1. When ready to push sent a message through the main MM communication channel (Discord).
2. After finishing pushing, send a message on the same channel that you have finish pushing. 

Rules:

1. If there is a pushing message on the MMM communication channel you should not push until the "finish pushing" message is received.
2. When you send the push notification message, there is a spam of not more than 5 minutes to actually push and send the finished pushing message.