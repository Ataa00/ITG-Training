# ITG-Training

<<<<<<< HEAD
## Branch Description:

This branch aims to solve the tasks that my trainer provides me.  
For more information about each Task please enter the folder you want.

## Task2: Comments(checkout from main)

Here I reverted all commits except main branch.  
git revert <sha-of-commit>

# Task1: Git-Commands
---

## Task Description:

- Create a description for your Gitlab
- Rename master to main
- Create a new branch from main
- Edit your current practice work in the new branch to have a correct English
- Decorate README with the documentation of the idea(s) in detail behind your work for every folder in the new branch
- Create a PR for the new branch to main (we will cancel the PR later)
- Clear the contents of the main branch except for README.md/gitignore files
- Provide the commands for GIT for every point above

## Approach:
- First, I created a new branch called clear-contents-except-readMe-ignore to clear all unwanted files/folders except .gitignore and README.md.
- Secondly, I added the changes to staging index, commit these changes and pushed it to the remote branch.  
  Using the following command:
  ```
  git add .
  git commit 
  git push origin clear-contents-except-readMe-ignore
  ```