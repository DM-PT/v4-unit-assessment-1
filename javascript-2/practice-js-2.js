/*
    For this section of the skills check you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition= 'A set of processes that helps track our code and give us reference points.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition= 'GitHub is like an online storage center for us to reference code of ours and others, and is utilized in team projects because of this'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (What you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {
    description: "this initializes the project you are working on and enables you to use git commands on the project",
    code: 'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = {
    description: 'This is what we use to clone down a repository to our computer from git once we have forked it, not sure of all the possibilities of using it, but that is mostly what I have used it for',
    code: 'git clone'
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = {
    description: 'shows the status of the project, as in the changes made and what is ready to commit',
    code: 'git status'
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {
    description : 'this will add in the changes you have made to the current process, kind like save as, and commit adds the name of the save',
    code : 'git add (specify what or put . if everything)'
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {
    description : 'Kinda already gave an example, but this will be the label of the changes you have made to project right before you push it into github, this helps with tracking and referencing what you have been working on',
    code : `git commit -m "this is an example"`
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

let addRemote = {
    description : `quite honestly wasn't sure on the definition for this one, but looking it up I found that it is a way to "Manage the set of repositories whose branches you track", need to play around with this more`,
    code : 'git remote add origin'
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {
    description : 'this with send the committed code to github and make it the master copy, this can only be done after git add and commit',
    code : 'git push'
}
