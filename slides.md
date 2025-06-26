---
# You can also start simply with 'default'
theme: academic
layout: cover
class: text-white
coverAuthor: [behrooz]
coverAuthorUrl: [https://www.behroozbc.ir]
coverBackgroundUrl: /presentation.jpg
coverBackgroundSource: unsplash
coverBackgroundSourceUrl: https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
hideInToc: true
themeConfig:
  paginationX: r
  paginationY: t
#   paginationPagesDisabled: [1]
title: Knowledge Hosting

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


a set of nodes and edges between them that
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
  - a directed or undirected graph consisting of vertices which represent concepts,
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
    - applying specific rules, filters, or inference logic to suit each scenario.
- Deployment
  - the hosting solution provides various Application Programming Interfaces (APIs) and query interfaces and supports different formats to enable a variety of applications.
</v-clicks>

---

# German Tourism Knowledge Graph (GTKG) 

Tourism is one of the most critical sectors of the global economy. Due to its heterogeneous and fragmented nature, it provides one of the most suitable use cases for knowledge graphs.

- 16 federal states of Germany 

- It is a publicly accessible resource and uses a schema.org-based schema to describe the integrated data.

- It builds around standard semantic technologies like RDF(S), SPARQL, SHACL and widespread technologies like RML. 

- Mostly Creative Common license like CC-BY-SA


---

# Knowledge Hosting Paradigms

<v-clicks depth="2">

- KG have a **graph data model** *logically*.

- It can host in other database paradigms.

- Every paradigm has it own benefits and disadvantages.
- Three Most most popular hosting paradigms for KGs
  -  relational databases
  - document stores
  - graph databases
</v-clicks>

---

# Relational Databases
---
layout: figure
figureCaption: Curated cover image for Slidev
figureFootnoteNumber: 1
figureUrl: https://picsum.photos/1920/1080
---

# figure

<Footnotes separator>
  <Footnote :number=1><a href="https://picsum.photos/" rel="noreferrer" target="_blank">Picsum</a></Footnote>
</Footnotes>

---
layout: figure-side
figureCaption: Curated cover image for Slidev
figureFootnoteNumber: 1
figureUrl: https://picsum.photos/1024/768
---

# figure-side

- Ensures figures are displayed nicely out of the box
- Allows placing the figure on the left or right
- Features an optional figure caption

<Footnotes separator>
  <Footnote :number=1><a href="https://picsum.photos/" rel="noreferrer" target="_blank">Picsum</a></Footnote>
</Footnotes>

---
layout: center
class: "text-center"
---

# Footnotes & Footnote

<span class="font-extralight">
  <q>Give credit where credit is due</q>
  <sup>1</sup>
</span>

<Footnotes separator>
  <Footnote :number=1>Smart person</Footnote>
</Footnotes>

---
layout: center
class: "text-center"
---

# Pagination

<span class="font-extralight">Enabled by default</span>

<img
  class="absolute transform rotate-z-180 -top-0.9 -right-21.5 w-36"
  src="/box.svg"
/>

<p class="absolute font-extralight right-14 transform rotate-8 top-4">Here!</p>

---
layout: index
indexEntries:
  - { title: "GitHub", uri: "https://github.com/alexanderdavide/slidev-theme-academic" }
  - { title: "npm", uri: "https://www.npmjs.com/package/slidev-theme-academic" }
  - { title: "Slidev", uri: "https://sli.dev" }
indexRedirectType: external
---

# index

`index` used as a list of references


---
layout: table-of-contents
hideInToc: false
---

# table-of-contents
---
layout: index
indexEntries:
  - { title: "Curated cover image for Slidev", uri: 4 }
  - { title: "Curated cover image for Slidev", uri: 5 }
---
