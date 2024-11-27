## Brief

### Preparation

N/A

### Lesson Overview

We will spend the first part of the session learning about Agile and Agile methodologies. The next part will be focusing on one of the more popular Agile methodologies that is SCRUM.

---

### Self studies check-in

Q1: Describe the Waterfall Model.

Q2: Describe the Agile Model.

Q3: Describe the difference between Waterfall and Agile model.

---

## Part 1 - All Agile Methodologies

The most popular Agile Methodology is SCRUM, but it is not the only methodology.

### The Agile Manifesto

<img src="./assets/manifesto.png" />

1. Processes and Tools are not as agile as human beings.
1. Intuitive software is better than excessive documentation.
1. Collaboration ensures product development is aligned with end users' requirement.
1. When business change, the tech team must adapt.

---

### 12 Principles of Agile

<img src="./assets/12-principles.webp" />

The 12 principles applies to every agile methodologies.

### Activity - Research

Break out into groups of 3 and choose 2 among the following Agile Methodologies and research how each is conducted:
- Extreme Programming (XP)
- Crystal
- Dynamic Systems Development Method (DSDM)
- Lean Development
- Feature-Driven Development (FDD)
- Test Driven Development (TDD)
- Kanban

---

## Part 2 - SCRUM

SCRUM is one of the many Agile Methodologies, it focuses on the setting up a constant cadence of activities and artifacts that allow teams to deliver products at a constant pace.

<img src="./assets/scrum.webp" style="background-color:white;"/>

SCRUM Theory:
Empricism through:
1. Transparency - Giving visibility to processes 
1. Inspection - Timely checks of progress
1. Adaptation - Adjusting the process as needed

Scrum Values:
1. Courage - We admit we do not know everything 
1. Focus - focus on what is important
1. Commitment - dedicated to delivering quality software
1. Respect - create cross-functional, self-organizing teams
1. Openness - frequently inspecting through delivery

A Scrum team is composed of:
1. Product Owner - Manages the Product Backlog and optimizes the value of the Product
1. Scrum Master - Manages the Scrum process and removes impediments
1. Development Team - Manages itself and create increments based on Definition of Done

In SCRUM, there are four meetings:

1. *Sprint Planning* - Laying out the work to be performed for the sprint using previous measures of a team's velocity. (4 to 8 hours)
1. *Daily Scrum* - Inspect progress toward the Sprint Goal. (15 mins)
1. *Sprint Review* - Inspect the outcome of the Sprint. (1 to 4 hours)
1. *Sprint Retrospective* - Plan ways to increase quality and effectiveness. (1 to 3 hours)

Source: https://www.scrum.org/resources/what-is-scrum

### Activity - Research
What are the use of each Scrum artifacts:
1. Product Backlog
1. Sprint Backlog
1. Product Increment

---

## Part 3 - Managing Tasks

### Class Activity - What are agile user stories?

|Action|Duration|Outcome|
|----|--------|-------|
|Learners self Reading for this [link](https://www.atlassian.com/agile/project-management/user-stories).|10 mins|Learners have a brief understanding of what agile user stories are.
|Instructor facilitate students to answer three questions by getting students to type in chat.|20 mins|Summarizes and highlight the good inputs from student.|

Three Questions:
1. What are user stories?
1. Why user stories?
1. Think and provide an example of a user story.

A user story is an statement of a software feature written from the perspective of the end user. Its purpose is to describe how a software feature will provide value to the customer. User stories are often expressed as "persona / role + need + purpose.": `As a ____, I want to ____, so that _____`

---

## Part 4 - User story creation and Behavior Driven Development

### Activity: Choose a Scenario and create at least 10 user stories for your chosen scenario
1. eCommerce website
2. eBanking website
3. eLearning platform
4. Booking management platform (Hotel, Flights)
5. Social media (Facebook, Twitter/X, Instagram, etc.)
6. Video/Music streaming service (Youtube, Spotify)
7. Govtech website

Remember the format of a user story: `As a ____, I want to ____, so that _____`

After creating the user stories, acceptance criteria for each story must be created. Acceptance criteria are defined as the conditions that must be satisfied for a product, user story, or increment of work to be accepted. 

Example:
**Given** user enter correct username admin123 And incorrect password password123:

**When** user press “Login” button

**Then** an error message should display “Login failed, please try again.”

Typically it follows the format: Given - When - Then. This allows for developers to simulate the flow and behavior of the end users which is the basis for BDD or Behavior-Driven Development. It is when an application and designed around the behavior a user expects to experience when interacting with it.

### Story points

After the user stories and acceptance criteria have been written and discussed with the team, they will be prioritized and give story points. A story point describes the complexity of user stories.

Typically, stories are given the following points:
- 1 point - least complexity
- 3 point - moderate complexity
- 5 point - high complexity
- 8 point - story is too huge to complete within a sprint and it should be broken down into several user stories.

>Why not man hours? Two developers will give two different set of man hours based on their experiences and familiarity of the project. Both developers should agree upon the level of complexity of user stories. Therefore, using user stories avoid dispute over the actual effort needed to finish the task

Another factor to consider is how can we achieve deadline predictability?
- Velocity is the number of story points cleared per sprint
- Over several sprints, we should know the average velocity and use that for deadline predictability
- Manpower x story points cleared = business estimation
