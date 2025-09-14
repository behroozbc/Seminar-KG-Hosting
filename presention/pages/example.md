---
layout: center
class: "text-center"
---

# Example
---

## German Tourism Knowledge Graph (GTKG) 

Tourism is one of the most critical sectors of the global economy. Due to its heterogeneous and fragmented nature, it provides one of the most suitable use cases for knowledge graphs.

- Integrates tourism data from 16 German states, including events, tours, and points of interest (POIs).

- It is a publicly accessible resource and uses a schema.org-based schema to describe the integrated data.

- It builds around standard semantic technologies like RDF(S), SPARQL, SHACL and widespread technologies like RML. 

- Mostly Creative Common license like CC-BY-SA

---
layout: figure
figureCaption:  An excerpt from the GTKG
figureFootnoteNumber: 1
figureUrl: ./تصویر صفحه_27-6-2025_8924_.jpeg
---

### GTKG summary

<Footnotes separator>
  <Footnote :number=1><a href="https://www.alphaxiv.org/abs/2404.09587" rel="noreferrer" target="_blank">German Tourism Knowledge Graph</a></Footnote>
</Footnotes>

---
layout: two-cols-header
---

### Storing

- Hosted in a GraphDB Enterprise instance with over 13 million statements.

- Data Loading in GraphDB:
    - RDF graphs can be uploaded via:
        - Graphical User Interface (GUI).
        - API.
        - SPARQL INSERT/INSERT DATA queries.

[comment]: <> (نمونه ها)
---

### Querying


- Provides a graphical interface and API for executing SPARQL 1.1 queries on RDF graphs.

- Queries run on the default graph (union of all named graphs in the repository) unless a named graph is specified.

- Use FROM `NAMED` or `GRAPH` keywords to specify a named graph, scoping triple patterns to the query's context.

---
layout: figure
figureCaption:  Query
figureUrl: ./query-example.jpeg
---

### Query Example
---
layout: center
class: "text-center"
---

### Visualization

<!--
- Offers three main visualizations: 
    - Class hierarchy
    - Class relationships
    - Visual graph.
-->
---
layout: figure-side
figureCaption:  shows schema:Thing as the largest circle, a top-level class in schema.org.
figureUrl: ./تصویر صفحه_30-6-2025_234128_.jpeg
---

#### Class hierarchy

- Displays a Venn-diagram-based view of classes in the RDF dataset.
- Each circle represents a class; smaller circles inside indicate subclasses.
- Circle size reflects the number of class instances.
- Useful for "visual debugging" to identify errors (e.g., stray classes from typos in class IRIs).

---
layout: figure-side
figureCaption:  indicates ~520K links from schema:Place to schema:GeoCoordinates via the schema:geo property.
figureUrl: ./تصویر صفحه_30-6-2025_234438_.jpeg
---

#### Class relationships

- Shows the number of links between instances of class pairs.
- Highlights highly connected class pairs, revealing key types in the knowledge graph.

---
layout: figure-side
figureCaption:  visualizes showing 1-hop connections by default.
figureUrl: ./تصویر صفحه_30-6-2025_234714_.jpeg
---

#### Visual graph

- Provides a graph-based view for a specific resource IRI or a subgraph from a custom SPARQL query.
- Displays incoming and outgoing edges for a selected node.
- Configurable and interactive, allowing users to expand additional nodes.
---

### Reasoning

<v-clicks depth="2">

- GraphDB Reasoner:
    - Based on W3C recommendations, infers new facts using forward chaining entailment rules.
    - Employs a materialization strategy, applying inference rules repeatedly to explicit statements until no new implicit statements are produced.
    - Inferred statements are generated at load time, leading to longer loading times but faster query execution.

- Reasoning Profiles:
    - Supports RDF(S), RDFS-Plus, and OWL2 profiles.
    - **OWL-Horst**: Non-W3C profile with restrictions on OWL RL for improved reasoning performance on large datasets.
    - **RDFS-Plus**: Non-W3C profile used in the GTKG, supports subsumption reasoning for types/properties and reasoning for inverse/transitive properties.

</v-clicks>
---

### Reasoning
<v-clicks>

- Virtual Named Graphs:
    - Two built-in named graphs:
        - Explicit Named Graph: Contains only explicitly loaded triples.
        - Implicit Named Graph: Contains only inferred triples.
    - Queries can specify whether to include only explicit statements or both explicit and implicit statements.
</v-clicks>


