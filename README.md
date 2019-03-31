# FuriousIron-Frontend

FuriousIron-Frontend is a very simple search engine frontend. At the moment this is a completely 
private educational project and not fit for any purpose whatsoever.

## The Idea

It happens quite often, that I have to do some research in a codebase of approximately 15m 
loc. Such things can be e.g. searching the whole code base for the source code which is the
source / cause of a certain log message, or I want to see how other programmers are using a
special service. Sometimes you produce a certain file and, you must find out, who actually
reads that file in, because you sometimes don't know all the details of a project involving
hundereds of people. Also new members of the teams do not have this kind of knowledge, and 
they need a way to get to these information too, so they can help their teams and themselves.

Having this whole code base on your computer is not an option - at least not for me, but sometimes
you still have to have access to the whole code base, integration scripts and configuration files. 
So I started thinking about a search engine for source code, for such kind of projects. As time has
proven, the next code base tends to be bigger than the one before and I wonder, when I will work
on a code base with 100m loc on a regular basis.

I wonder how many people / developers around the world have the same wish, to be able to search 
or crawl private or commercial code basis.

## MVP

To later work on the search engine I would like to have a minimal viable product with the following
requirements:

* Query field
* Use REST to find results
* Presentation of result list (non paginated)
* Provide link to detail view of source file
* Using REST to retrieve source file
* basic syntax highlighting
* URL's which can be bookmarked

Simplicity is key. Because you can change a mimimal product much faster and adapt that to your needs,
as your needs begin to grow. Because I prefer having a whole pipeline working, the goal is to not 
spend too much time on gold plating the code you are going to delete at the next iteration, but instead
having the whole pipeline running as soon as possible, even if it lacks features. 

I also like to defer unneccecary architectural decisions as long they do not need attention. So please
do not expect me to provide a full architecture, or a full grown idea. It will either evolve or die.

That said, please remember this is a private educational project.
