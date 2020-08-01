# FuriousIron-Frontend

FuriousIron-Frontend is a very simple search engine frontend. At the moment this is a completely 
private educational project and not fit for any purpose whatsoever.

## The Idea

It happens quite often, that I have to do some research in a code base of approximately 15m 
LOC. Such things can be e.g. searching the whole code base for the source code which is the
source / cause of a certain log message, or I want to see how other programmers are using a
special service. Sometimes you produce a certain file and, you must find out, who actually
reads / consumes that file, because you sometimes don't know all the details of a project involving
hundreds of people. Also new members of the teams do not have this kind of knowledge, and 
they need a way to get to these information too, so they can help their teams and themselves.

Having this whole code base on your computer and updating it is not an option - at least not for me, 
but sometimes you still have to access the whole code base, integration scripts and configuration files. 
So I started thinking about a search engine for source code, for such kind of projects. As time has
proven, the next code base tends to be larger than the one before and I wonder, when I will work
on a code base with 100m LOC on a regular basis.

I wonder how many people/developers around the world have the same wish, to be able to search 
or crawl private or commercial code basis.

## MVP

To later work on the search engine I would like to have a minimal viable product with the following
requirements:

* Query field __[done]__
* Use REST to find results __[done]__
* Presentation of result list (non paginated) __[done]__
* Provide link to detail view of source file __[done]__
* Using REST to retrieve source file __[done]__
* basic syntax highlighting __[done]__
* Search URL's can be bookmarked __[done]__
* Detail URL's can be bookmarked __[done]__

Simplicity is key. Because you can change a minimal product much faster and adapt that to your needs,
as your needs begin to grow. Because I prefer having a whole pipeline working, the goal is to not 
spend too much time on gold plating the code you are going to delete at the next iteration, but instead
having the whole pipeline running as soon as possible, even if it lacks features. 

I also like to defer unnecessary architectural decisions as long they do not need attention. So please
do not expect me to provide a full architecture, or a full grown idea. It will either evolve or die.

That said, please remember this is a private educational project.

## Constraints

The constraints are quite simple: Don't use a technology which is not necessary at the point in time, 
if there is a simpler solution/way. That helps to lower the technical was well as the cognitive complexity.

## What needs to be done next

* Usability
  * Indicate, that a search is still ongoing 
    - with more search terms, there is a major slow down (instead of a speedup), which should be addressed later (I have a solution in mind - different Frontend-Search Execution vs. Backend-Search Execution)
  * URLS of search results should be provided that way, that they can be opened in a new tab
  * display .xml-files
  * display .pomfiles
  * display METAINF.MFs
  
* Backend
  * caching of the query (until next index-creation or day) and its results should be implemented (frontend and backend)- allows smooth going forth and back in the results and allows pagination of results   
 
* (Indexer)
  * Indexing .xml files
  * Indexing .pom files (Indexer)
  
## Nice to have

I consider the search engine a byproduct for the real use-case. The search-engine should collect data about
the source-code the user is looking for and should enable further technologies to help the user programming,
refactoring or debugging.

So my focus is not the search engine as a product, but is the enabler for the more interesting technologies.

## Overview

![Overview](https://github.com/mindscan-de/FuriousIron-Frontend/raw/master/doc/Overview.png "Architectural Overview")

## Running

Run this SearchFrontend via `ng serve --proxy-config=proxy.conf.json` then visit http://localhost:4200

## Building

`ng build --base-href=/SearchBackend/frontend/`

## License

Usage is provided under the [MIT License](http://opensource.org/licenses/mit-license.php). See LICENSE for the full details.
