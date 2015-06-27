# A tutorial on doing file uploads in Hapi

### Why file uploads

Every website needs content, but not every website needs to create its own content. If you want your users to be able to share images, music or video with their friends and with the world, you have to crack file uploads.

### What we made

We have built a simple website using the Hapi framework for Node.js. It provides a form for the users that allows them to submit files to the server. The server then saves that in a 'pix' directory (though the files do not have to be pictures!).

To aid the rest of our FAC cohort, we have developed a repo that provides a tutorial on building the site.

### On Modules

Certain modules can help in the parsing of complicated input to the server -- in this case, the multipart form is the complex data. Some examples make use of the 'multiparty' node module to help with parsing it. We have chosen to abstain from doing so. There are three reasons why:
  * The first is that seeing if you can do something yourself is a good learning exercise. Even if you know you would use a module in production, it's worth having some idea how it works so that you can understand what's possible and what might be going on while it breaks. This leads to our second reason.
  * If you write all the code yourself, it's simpler to understand and debug in simple cases. There's a fairly fixed overhead in understanding the syntax and functionality of an external module. This is often a very good tradeoff, particularly if it's a module that you will be using frequently. In the case of a toy example, it would probably have been more trouble than it's worth.

  * Thirdly, Hapi has some parsing ability of its own by default. We're trying to understand Hapi and what it provides, so there's not much point overwriting that capability with an extra module. If we had followed the examples we found online, we may never have known about Hapi's native parsing abilities.

### The tutorial and how to use it

[The repo has different stages of the website on different branches](http://www.github.com/foundersandcoders/beam-me-up-hapi). After cloning the repo on your machine, start on the 0th branch by `git checkout 0` on the command line. You can then step through the readme, which provides you with some guidance on how to reach the next stage. If you get stuck or frustrated, you can always checkout to the next branch to see how we did it. Happy coding!

FAC 5
