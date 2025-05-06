Final Project ReadMe
Code is a language. Code is a tool. Code is a way to build something.
I set out to complete my coding objectives, but beyond that, I was determined to learn how to create something that 4 months ago, I thought would be impossible for me to do.

Something that I’ve struggled a lot with this semester is feeling original. I am an artist- originality is such a core component to who I am and how I study. I am really afraid of plagiarism, especially when I work hard to learn and grow from everything I study. At the beginning of the course, I struggled a lot with this. I was so scared of plagiarism, I now realize I was sabotaging my code with what I thought was “originality”- but really was just language errors!

Coding is a language- and similarly to learning Japanese, the best way to learn right now is to repeat and output. You do not learn a language by copy, pasting, and calling it a night. That’s not how you learn anything. But, by correctly mirroring these phrases repeatedly, you understand how they work, where they work, and when they work! Then you begin to see that not using pascal case and adding strange original names isn’t adding originality to your code- it’s adding errors! A huge part of my growth in this course has been realizing that code is a shared language, not a super genius furiously typing 1 and 0 in magical patterns until an app is made. I don’t have to be afraid of using and learning from resources - but I think this puts more importance than ever on thoroughly citing sources and my process. I am just here to learn, and shouldn’t put the pressure of immaculate conception on myself. I will include all referenced codes and sources at the bottom of the screen.

I reached out to have a meeting with our teaching assistant, and she said that following a tutorial to build off of is a great way to start. I have had an idea since the beginning of class, and am excited to be able to make it a reality!

I want to be able to gain practice in creating a more advanced project while creatively utilizing the functions I have learned to code in p5.js.

THE BEGINNING

Let’s start by building a functional game, then I can add my ideas into it.

For my game I know: I want the player to go from score 541 (million years ago) to 0 (million years ago.

I WANT the player to be able to win the game, or restart.

I WANT
When the point value is between: 
541 and 252 - display text Paleozoic Era (541-252 mya)
252 and 66 - display text Mesozoic Era (252-66 mya)
66 and 0 points - display text Cenozoic Era (66-0 mya)

I WANT:
WASD controls, press space for reset. Press R to return to menu

I WANT:
The player to win the game and have text saying “YOU WON! Welcome to the age of mammals!!”


STUDY UP - BUILD THE GAME PLAN

For this project, I began by following the tutorial “Code Doodle Jump in Javascript” 
by Kenny Yip Coding on YouTube.
 I liked the functionality of Kenny’s code, so I figured this would be a good place to start and build from. I skimmed his tutorial and code, and vaguely got an idea of where I would be starting. Kenny Yip’s Coding project was made for regular Javascript not p5.js! As I code along with his tutorial, I will use p5.js conventions to get it working in p5.js.

Before watching this tutorial thoroughly, I consulted chat GPT to LEARN how to make a game plan and incorporate my ideas. 
I think that using chat GPT to help LEARN to code is one of Chat GPT’s most useful purposes. It understands code pretty well, being code itself. I will never copy and paste- but boy howdy does this help me keep from being completely lost.

I then made a Frankenstein’s blueprint to study off of to see what something functional would possibly look like. I copy and pasted on a different the blueprint example file from chat gpt into Kenny’s code to see if I could make something work, then took notes so I can model my own code off of the existing project it as I write the code for my assignment project file. I wanted to know what might be POSSIBLE, so I can learn from there. I’m an artist not a coder- yet. Baby steps. Sometimes seeing the big picture helps! I scrapped together a plagiarized blue circle blueprint, and my idea seemed feasible!

I asked chat GPT about how to adding a win condition. Looking at it reminded me that I’ve done this before! * I can reference module 10 for this!

I know that text will be pretty easy to display between the scores with if and else if statements, and chat GPT agreed! * I can also reference module 11 for this as this is pretty much the same as what we did for class!

I found a guide to uploading images, and it is also loosely covered In Kenny’s tutorial.

With these resources gathered I geared up to starting my coding journey.


I took notes on what I might think about incorporating as I watched Kenny’s tutorial.

From the get go, I knew I wanted this game to function differently from Kenny’s tutorial.

I don’t know how to add images in p5.js, so now it’s time to learn! Looks like it really is as easy as drag, drop, and reference!

LET’S START - Work blog

The first step is to navigate and understand the setup I am following.  

Because this tutorial creates its own HTML page, im going to deviate here. P5.js already has this setup made for me, so I will listen and observe, but ultimately disregard and just begin coding in the game. First we need to create our dimensions of the game.

I’m following Kenny’s lead but using the canvas and presets p5.js already has for me. I want to make my canvas 400 by 600, and will keep this in mind when I quickly make some background images for it. I’ll call my canvas board so I can follow along.

It’s time to sketch up some quick assets for my project!

I will be deviating immediately by not needing a left or right image- one trilobite is fine. I also will not be using images for platforms. Rectangles will work great!

Background image

Step 1- I’ve set up my first background image, and have figured out just how much P5.js has set up for me. Pretty nifty!

I don’t have to put my background int the css because I can add it to the canvas in the sketch.

Birth of the Trilobite

As I follow along, because of simplicity, there are several steps I can neglect! My character is just a simple trilobite, no flipping needed. I typed out the doodle area, but just put him at x and y coordinated that center him a little below half of the bottom of the screen.

P5.js has kindly reminded me to complete this in the setup area! I’m typing in the coordinates and color to create a little green rectangle.. but nothing is showing up! What gives? 

I ran my code through Chat GPT to get advice on what I’m doing wrong. It says I need to make a preload function! That sounds helpful- but I don’t know how to do that yet! This nice tutorial by StackUp helped me figure it out!

I used the preload function tutorial from StackUp to add my trilobite! I can’t believe it worked so easily! I can put my background image in there too, and that makes sense to me. I’ll do that too.

I think this catches me up to Kenny as he’s coding in his doodler!
I won’t have to add this in, since im coding in p5.js!

Begin Adding Physics- Key movement!

New territory for me! But, this part we’ve started practicing in class. I have added movement, but not with velocity before! It also seems that he is typing up quite a different style than me- but fortunately, I can reference some old homework here!

I want my trilobite/doodler to move with WASD Keys, just like my circle did in past homework. I’ll reference back what I did in homework 11 here as I follow along. It looks like the “event code” we referenced in the past was “keyIsDown” - I’ll see if I can plug that in here, but instead of x -= 10 using the referenced velocity.

Hmmm…. It my doodler isn’t moving! Probably because I didn’t declare my velocity variable! Let’s remember where we put functions: underneath the draw so we can call on them. Lets also declare our velocity at 0, since we only want it to move when we press the keys!

His 4 velocity seems to shoot out doodler into the void a little fast- let’s slow down for a velocity of 2. Because I’m coding in p5.js I don’t have to do all of the canvas clearing code. It’s so convenient!

Now let’s keep him trapped within the screen’s width! He uses board width- but I know its the same as 400, so I’m going to be sticking to that.

Platforms
Time to add platforms!

Now, Kenny the overachiever is going to have his platforms 
Oh boy! We’re making an array! Good thing I practiced this on the extra credit homework! Lets pull up module 14

I want my platforms to just be gray rectangles. Keep it simple! I’ll get tricky with my points later.

So, I’ve begun writing the array for the platform. I’ve written my first platforms dimensions and used .push to reference it back to our function. I don’t really understand how to use the .push function, so I looked up another YouTube video. Push is used to “push” your data up to the array! Neato!

 I’ll write this function in the draw area. Then copy Kenny as he places the array, then instead of putting in an image I’ll fill some grey rectangles.

Now, we want more platforms in our array! Time for the kind of copy and pasting that I can get behind! We want to add variety to our array by changing the x and y values of out platform shapes.

Time to absolutely lose my mind trying to find a lost bracket for a full 15 minutes :)
 Now we have a platform! woohoo! With a copy, paste, and change in the Y value, now we have 2! Excellent.

Physics Part II - Y axis time - not defying gravity

The gravity and velocity functions are new to me, but they are pretty self explanatory.
Here we will create variables that allow our trilobite to have speed and gravity of the y axis.
We add the Y axis and Gravity variables, and add our y velocity to our function. 
We now have a flying trilobite! We have to add the gravity to our doodler’s function to get it to return. Jumping trilobite!
Collision Time

Another new function! Let’s learn about collisions. To start, I couldn’t understand what the guy in my tutorial was calling these! I typed the code into chat GPT and asked me if it could explain what it was. Then I looked up a video on it!

What we are going to implement is called Axis Aligned Bounding Box collision!
I watched this video by TekLectic that did a great job of helping me understand what was going on!

I’ll be using a function that uses the coordinates within shapes to determine the location of the shape on the x y axises! Pretty dang neat!

Here, all shapes will be simplified to A (doodler) or B (my rectangles!) and then we can notice when these two coordinates intersect!

This video game examples and I’ll briefly reiterate them for proof of learning:
So Box A has coordinates around it’s edges:
A.X (the furthest “left” on the box) + A.Width! Doesn’t that make sense?
A.Y (Furthest below coordinate the shape occupies) + A.Height! Thats a shape!

We also have the same for B box. Then these coordinates overlap, Boom! A collision is detected!

For a collision to be detected…
(A.X + A.Width) >= B.X - they have to be lined up
Also
(A.X) <= B.X + B.Width has to be true,
AND
A.Y + A. Height >= B.Y - they have to be intersecting again 
AND
A.Y <= B.Y+ B.Height.

If there is a collision, all of these statements will be true! If the shapes aren’t touching, these statements are false.
 It’s just defining and acknowledging to overlapping coordinates! 
That’s so cool!!!

Sketching this out helped me understand, and the diagram in the video helped to!

Now with this in mind, we want the Y coordinate of our Trilobite to collide with the height coordinate of out boxes when the trilobite lands on it! 

So we need to write a function to interpret this idea.

Lets create collision!

return a.x < b.x + b.width && 
^ A box top left corner isnt touching B's top right corner - no (overshoot)
    a.x + a.width > b.x && 
^ A box is within B box’s x boundaries (No undershoot)
    a.y < b.y + b.height &&
^ A box is within B box’s Y boundaries (not overshot)
    a.y + a.height > b.y;
^ A box is within B Box’s Y boundaries (Not undershot!)

What happens when these boundaries are violated and collision is detected?
We want our doodler to jump! So we need to have some Y velocity.

We want our platform to detect the collision of the doodler and platform, and then trigger a repetition of our repeat velocity on the y axis.

Thats a doodle jump!!

But, this is just jumping when we collide at all with our B box. 

Because this is a game of jumps, we can just edit this so our collision only increases velocity when our Y axis value is increasing, or going down!

So now our trilobite will increase in y velocity if collision is detected, AND && velocityY >= 0!

Multiply the platforms

Now we want a bunch of random platforms to appear!
So, we want to use a loop to create platforms for our array.
We’re going to keep our starting platform (I centered mine) and add more for our trilobite to jump on.

Here we want to create about 0-6 platforms, at random x positions within our screen, 
 We can do that with a loop.  

for (let i=0; i < 6; i++){
    let randomX = Math.floor (Math.random() *boardWidth* 3/4); (0-1)

We start at I=0, but if I is less than 6, I++: i will add another I!

Math.random gives generates a random number, and the floor ensures it’ll be a whole number.
 
By looping this, we now can generate 6 platforms past our starting platform!

Follow the platforms upwards!
I am 35 minutes into the Kenny tutorial!

Now we want to keep these platforms comin’.

How does this work? We can create the illusion that our trilobite is jumping UP by moving the platforms down! When a platform is detected exceeding the Y boundaries of our canvas, we can trigger another platform to generate! At the top of our height! That’s pretty slick!

I think we can do this with some IF statements - I was right!

So we already have an IF statement to check if our doodler is colliding with our platforms.
Now, we’re going to add an if statement to move the platforms down based on the doodler’s location on canvas!

SO, when the doodler’s y axis location is greater than 3/4th of the screen, all of the generated platforms will also move positively on the y axis at the consistent universal rate of initialVelocity.

Im thinking of it like this:

If doodler is moving down, and the doodler’s location is less than 3/4 of the board height (remember, up is negative!)  THEN WE WANT the platforms to also move down! (positively)

If velocity.y is < 0 AND doodler.y < 3/4 of screen, platform.y -= initial velocity!

New Platform generation
Okay, so 6 platforms is a little thin. Let’s create more!
We can do this with another loop. It seems complex- but because we have out arrays set up we can call them here to influence all our platforms at once!

We are going to use a While loop here! We reviewed Loops in homework 11, so I looked back and refreshed my knowledge. 
The while function will execute an action WHILE the value of data is within the set parameters. 

When the items in our platform array values exceed the height of the canvas, then we want something to happen! We also want that something to be new platforms being generated.

For this, we can use the .shift, which is just a function that is used with arrays to remove and return items in arrays! We can use it to replace the platforms with new platforms as they cycle through the while loop!

While the tutorial’s example worked, p5.js reminded me to define my platform!
Easy- I can just reference our random platform definition to create a new function! We also want these new platforms to appear at the top, so we can just change the y value to 0! Bingo! New platforms!

Scoring and Points part 1 - Score Blueprint

To create our score, we want to make a function that tracks and our movement in the Y axis and prints it onto the screen. I will follow along with the tutorial, and then use these concepts to incorporate my desires into the code.

We know we want the code to track y axis movement, and in increments of whole numbers.

We’ll create a variable for the score and draw a function that’ll count the “updatescore” too!

Then we’ll put in the text we want to display, referencing the p5.js guide for parameters because it’s always fun to be correct the first time.

Now we have text that’ll show up in the corner of our screen! But it’s just increasing in value endlessly. Let’s correlate it to our y value!

We know that if our y velocity is negative (going up!) we can use this to create a statement. But its a jumping game- our velocity will go up and down!

That’s where maxScore factors in! This will be the most points we’ve reached with velocity and it wont fluctuate with our position!

This is the example for the function. 
 
I want to update score. Our score will equal a whole number. If our trilobite goes up, so will our score. If our score goes up, our max score will increase. If our score is less than our max score, our score will continue to reflect the max score!

function updateScore () {
      let points= Math.floor (20*Math.random());
      if (velocityY < 0) {
        maxScore += points;
        if (score < maxScore) {
          score = maxScore}
Doesn’t that make sense! Cool!
I edited my number multiplier from 50 to 2 so that my trilobite will gain points more slowly.

Game Over! (And reset)

I want my game to be over if my doodler falls off the platforms and off the canvas boundaries.
So, I will add a gameOver variable, and connect it to the position of my doodler! If is as simple as an if statement. We’ll go into our doodler setup and add an if statement.

If, the doodler y coordinate is beyond the canvas height, then that means we fell off the screen- so run game over!

Now that’s great- but we cant read minds. Lets have game over trigger some text letting us know!

We’ll add it in next to where we included the score text! We’ll also include the text “press Space to restart.”

Now to set that up.

A reset is just causing the positions of the things we drew to go back to positions we already had them at. We can create this by setting up the space bar to send our shapes back to their original positions. Doing this in p5.js greatly differs from regular javascript I guess, because I’m just going to write a function that does this and call it with resetGame ( );. When key 32 is down, it’ll call our reset function.

We want to set up another keypress triggered action.
Where we put our key movements

Changing the game - Points

In our game, we are aiming to travel through time to the different eras, represented by our accumulation of points!

In this case, we want our beginning points to equal 541, and our points to decrease this number. We know that we can start by editing our point variable 541.

Now for our scoring, we want out points to go down!

Adding A WIN

We want to Add a win state when the points reaches to zero! So, just like the game over screen, we want to trigger a text to show up on the screen when we reach a score of 0.

So I know to add a second game over text, this time saying you won. We also want it to display instead of the Game over text. We can do this with an else If statement!

If the score is 0 and game is one, game won will display! If else, it will show game over.

Changing with the times - Background

To reflect my trilobite’s brave journey through time, I want to have 2 main things that will change with the score- text above the game reflecting the value of points, and the correlating background image.

To do this, I can create changes with simple if statements! This should be pretty simple after all of the hard work of getting this running!

I want to add a text box next to our points that says MYA (Millions of Years ago)! Easy!

Now I want to write a simple if else chain to change my background image. I’m going to preload my background images, and differentiate them so they are all a unique background to call upon! Upon trial and error there are a few things to pay important attention to - making sure that images are always layers in chronological last to first appearance! Just like always, the lowest gets read first!

Changing with the times - Message

I should be able to do almost the same thing here to Change my time period as well!

Up by my score, I would like to have a text area that changes along with the backgrounds to reflect the time period. I Can code this similarly to the Background image if, else set up!

I added a series of if else statements- I can’t believe it! It’s actually working!!!

Now, lets add some color and learn how to add a font- similar to how we added in our images!
I watched Jason Erdreich’s video on this and was able to successfully import a nice pixel font from google!

Adding Splash Page - unaccomplished.

Jason Erdreich’s video on programming a retro game was am excellent tutorial for making my splash screen! However, I was unable to complete it in time. I gave up and deleted the code. I will have to accept my project as is.

Uploading

I watched Nick Hwang’s tutorial on uploading a p5.js file to my GitHub repository. By following it, I was able to make a live page loaded and worked with all of my uploaded files!

References

Doodle Jump Game  reference tutorial

Kenny Yip Coding - Youtube
Code Doodlejump in Javascript
https://github.com/ImKennyYip/doodle-jump

Also slightly referenced:

TechHeadOnline 
How to make doodlejump game in javascript and p5 play

How to use a background image:

Claes Jonson p5.js tutorial page
https://editor.p5js.org/claesjohnson/sketches/QTNArizfo

Loading images into a p5js sketch - Stack Up

Pushing an array with push ( ) 
DailycodeBuffer 
Javascript push () array function | Js Buffer

Understanding Collision Detection
Bounding Box Collision Detection - Teklectic

Uploading custom font

 Jason Erdreich
Making a splash screen (unaccomplished)
