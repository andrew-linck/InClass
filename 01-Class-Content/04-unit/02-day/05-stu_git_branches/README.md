# Git Branching

## Instructions

From your terminal, type the command `git branch` to see what branch you are on. It should say `master`.

You are able to switch branches by first creating a new branch by typing the command `git branch <BRANCH NAME>`.

Then switch to the newly created branch by typing the command `git checkout <BRANCH NAME>`.

Pro-tip: You can combine the branch creation and branch switching steps above by simply typing the command `git checkout -b <BRANCH NAME>`.

Every team member should make some kind of change (creating a file, deleting a file, editing a file) to a different file!

After making a change, get into the habit of doing a `git pull origin master` prior to staging, commiting, and pushing changes so that your new branch has all of the latest changes.

Finally, run `git add -A`, `git commit -m "MESSAGE"`, and `git push origin <BRANCH NAME>`.

Head over to the repository in a browser and open a Pull Request so that others members of your team can review your changes, and ultimately merge those changes.