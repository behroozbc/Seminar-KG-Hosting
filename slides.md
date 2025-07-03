---
theme: academic
layout: cover
class: text-white
coverAuthor: [behrooz bozorgchamy]
coverAuthorUrl: [https://www.behroozbc.ir]
coverBackgroundUrl: /logan-voss-d8AURrtQXmE-unsplash.jpg
coverBackgroundSource: unsplash
coverBackgroundSourceUrl: https://images.unsplash.com/photo-1738082956220-a1f20a8632ce?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=logan-voss-d8AURrtQXmE-unsplash.jpg&w=1920
hideInToc: true
themeConfig:
  paginationX: l
  paginationY: b
  paginationPagesDisabled: [1]
title: Knowledge Hosting
transition: fade
download: true
---

# Knowledge Hosting

<Pagination classNames="text-gray-300" />


---
layout: image-right
image: https://wordlift.io/blog/en/wp-content/uploads/sites/3/2016/11/google-knowledge-graph.png
---

<v-clicks >

## Why we need to host a KG(Knowledge graph)?

- It has many application. 

- We saw what is it benefits.


## What build KGs?


A set of nodes and edges between them that
 represent entities and their relationships
</v-clicks>
---

# What challenges we face to host a KG?

<v-clicks>

- Size
  - KGs have vast size.
  - might have billions of facts.
- Data model
  - A KG is technically a semantic network.
  - A directed or undirected graph consisting of vertices which represent concepts,
 and edges, which represent semantic relations between concepts.
 - Heterogeneity
   - KGs by nature have a flexible schema and the host have to support it.
- Velocity
  - KGs change rapidly
    - new knowledge is inferred through reasoning based on the given facts.
    - new sources may get integrated.
</v-clicks>


---

# What challenges we face to host a KG?
<v-clicks>


- Points of view
  - Different users or applications may need to interact with the same KG in distinct ways.
  - The hosting solution should allow the data to be viewed or processed differently depending on the use case.
    - Applying specific rules, filters, or inference logic to suit each scenario.
- Deployment
  - The hosting solution provides various Application Programming Interfaces (APIs) and query interfaces and supports different formats to enable a variety of applications.
</v-clicks>

---

# Knowledge Hosting Paradigms

<v-clicks depth="2">

- KG have a **graph data model** *logically*.

- It can host in other database paradigms.

- Every paradigm has it own benefits and disadvantages.
- Three Most most popular hosting paradigms for KGs
  - Relational databases
  - Document stores
  - Graph databases
</v-clicks>

---
src: ./pages/relational-databases.md
---

---
src: ./pages/document-model.md
---

---
src: ./pages/graph-databases.md
---

---
src: ./pages/example.md
---

---
src: ./pages/summary.md
---

---
src: ./pages/test.md
hide: true
---