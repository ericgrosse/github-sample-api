To run the program, open command line and navigate to the folder's directory.
Type in "npm start" and hit enter
You should see a message "Starting up http server, serving ./ on port: 8000"
In your browser of choice, type in localhost:8000/app
This will redirect you to localhost:8000/app/#home, which is the homepage of the app.

The homepage allows you to search for github repositories. The validation is set up
such that you cannot even hit the submit button until a query is entered into the 
search field. The options "sort by", "order by" and "results per page" are pretty
self-explanatory and modify the parameters of your search.

Once you actually execute a query, you will see 3 additional fields: "filter results",
"limit results" and "sort by". These are used to refine the existing results you have
displayed on screen in real-time.

Each repository result that is returned includes links to contributors, languages,
stargazers, subscribers and tags. The most noteworthy of these is the tags link
since this allows us to further access commits (through "Commit URL") as well as trees
(through "Tree URL").

Aside from these buttons, the app provides hyperlinks that can be navigated to, although
these lead to external sites (such as github itself or the user's blog) instead of allowing
further navigation of the app.

Every page beyond the homepage includes a back button in the top-left corner. These function
as expected, except when you navigate to a link via a new tab, in which case clicking the
back button does nothing.

As a recommended test case, type angular into the search query since the first result
returned is the official angular repository, which contains lots of data to look through.