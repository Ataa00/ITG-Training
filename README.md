# ITG-Training
# Branch Description:

This branch aims to solve the tasks that my trainer provides me.  
For more information about each Task please enter the folder you want.
## Task: (checkout from main resolved):
I created this branch from CommonJS branch, which is wrong approach. I should created this branch from the main branch.  
To solve this issue, I used the following git command:  
```git revert <sha-commit>```  
To revert all commits that came from other branches. And keep the commits that came from the main branch.

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