# Friends of Chichester Harbour

### A membership management system for the Friends of Chichester Harbour

## Challenge

The Friends of Chichester Harbour is a registered charity, formed in 1987 to sustain and improve the environment of the harbour for the benefit of both people and wildlife. It has a large and varied membership. The Friends' Treasurer, Richard Evans, approached us to help the Friends build a new membership management system.

The existing offline computer system required a lot of administrative effort by the charity's volunteer staff, and the Trustees were keen to find a way to manage and communicate with their members and to allow the members to manage their membership and payments online. 

Available off-the-shelf systems did not give them the flexibility they needed and, in particular, did not make it easy to manage both tech-savvy and technophobic members nor allow membership contributions to be easily combined with donations in a single transaction nor make it easy to import existing membership records.

### Solution

The development process began with a collaborative process of wireframing the screens for the new system. While the build started, the wireframes continued to go through several iterations, as Richard refined his ideas for how he wanted the system to work.

Our two-person developer team, Bes and Wil, took the opportunity to abstract out much of the functionality of the system into a series of reusable open source software components, including [bouncer](https://github.com/foundersandcoders/bouncer) for managing user authenitcation  and [beekeeper](https://github.com/foundersandcoders/beekeeper) for managing memberships. they also wrote an extensive suite of automated tests.

This approach made it relatively easy to adapt to a rapidly evolving specification, although it did mean that we only started seriously tackling the user interfaces several weeks into the project...





