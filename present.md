## Kellen

LadyBird Inventory

I partnered with Jim Petersen and we created an inventory management system for my wifes hair salon that we called LadyBird Inventory. In Austin Ladybird Johnson is still held in high regard so we named the system after her.  We have a half dozen or so items loaded into the database already.  As you can see the initial page has four tabs and pressing on a tab will display the desired page.  

Lets demonstrate CRUD and then we'll go into some of the more interesting things that we did.  

Press Create
and enter in

Item        7735-0224

Name        Aveda Grooming Clay

Description 6.6 oz  clay

Price       9.95

Vendor      2577

Cat         Grooming

Qty         22

Reord_Qty   25

It may take a while for Heroku to respond just hang tight.  

When I realize we have 21 bottles we can go in and update in the same way.

Click the update and enter in the following data:  While you do this Jim will jump in and explain that we would have liked to make entering all the data again unnecessary but we spent a lot of time writing routes for the reporting and the entire vendor system so we didn't have time.

Item        7735-0224

Name        Aveda Grooming Clay

Description 6.6 oz  clay

Price       9.95

Vendor      2577

Cat         Grooming

Qty         21

Reord_Qty   25

And now I'll delete the Aveda Grooming Clay as the final part of CRUD

Remember it takes a moment for Heroku to do its thing so go slow....

Finally we added a reorder report that will send a list of all items where the number on hand is less than the optimal reorder quantity.

Pass the conversation to Jim

## Jim

The backend is php using models and controllers.  I really enjoyed creating other routes that we needed and to puzzle together the right combination to send a request to do a table join for a report or retrieve only one record for an update. If we briefly look at line 138 of the model lbinventory.php you can see the select we used to join the inventory table and the vendor table.

Technically we took the opportunity to use functional stateless components and we started with ternary operators but we went with a switch & case method to display the screens.  

## Kellen talks without a password

I love functional stateless components.  I like them so much I had functional stateless component tatooed on my ass this week.  This is how they work...

you've got to write something here.....


If you listen to jim he is all about the ternary operator and we started with that and it was good but not great.  We found we could use this switch and case system (starting on line 130 in app.js ) to render the screens to try and create a smoother approach.
When a user presses on of the buttons we change the value of a state variable to either create, update or reorder.  The switch evaluates the value of the state variable and then sets a variable $screen to a series of jsx commands.  So sandwiched between our header and footer is one variable (around line 227) and that displays all of our screens.

## Jim's comments
  Wins - great teammates two teams in a row... I thought my last team was great and so was working with Kellen.  We became friends early on and it was just easy.  We're both pretty direct and that helped us move forward.

  Losses - I still made numerous unforced errors.  I hope not to make these errors in the future.  

  I like working on teams like I've had.  Teams work best when everyone expresses themselves freely and everyone works really hard.

  Best Tool... I'm still a big fan of inspect source debugger... it helped me find several data errors.

## Kellen's comments  
