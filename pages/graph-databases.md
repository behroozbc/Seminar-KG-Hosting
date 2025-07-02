# Graph Databases

<v-clicks>

- This paradigm represents data and/or the schema as graphs.
- Many implementations support flexible schemas, with some offering data integrity features (e.g., constraints, identity, referential integrity)

- **Graph Data Model**:
    - **Nodes**: Represent entities, with metadata as key-value pairs and labels indicating roles (e.g., instance type).
    - **Edges**: Represent relationships, including direction, start/end nodes, a label for relationship type, and optional property value assertions.
- Many graph database implementations support hosting with flexible schemas to support heterogeneity and velocity.
</v-clicks>
---
layout: center
class: "text-center"
---

## Types of Graph Databases for KGs

<!-- - Property graphs
- RDF triplestores -->

---
layout: two-cols
---

### Property graphs
<v-clicks>

- Graph models describing predicates connecting two entities.
- Nodes: Represent entities, holding key-value pair property assertions and labels indicating roles (e.g., instance type).
- Edges: Represent directed relationships between nodes, with a start/end node, a label for relationship type, and optional property assertions.
</v-clicks>

::right::
<v-click>

##### Property Graph Characteristics
</v-click>

<v-clicks>

- No current standard exists; development is primarily industry-driven.
- Neo4J: A widely adopted property graph implementation.
- Query Language: Graphs in Neo4J are queried using the Cypher language.
</v-clicks>

---

### RDF Triplestores

<v-clicks>

- Optimized for RDF triple structure: `<subject><predicate><object>`.
- Often called triplestores, following the RDF data model.
- Support reasoning with RDFS and OWL2 via built-in reasoners.
- Use SPARQL 1.1 as the query language; many provide APIs for data retrieval and manipulation.
- Backend implementations vary (e.g., relational databases, document stores), but recent ones natively support RDF graph structure.
- Offer flexible schema, often blurring the line between schema and data for querying.

</v-clicks>
---
layout: two-cols 
---

<v-click> 

#### Standards and Scalability

 </v-click>
<v-clicks>


- Built on W3C standards (RDF, RDFS, OWL, SPARQL), facilitating vendor migration and tooling development.
- Can scale to trillions of triples for knowledge graphs.
</v-clicks>
::right::

<v-click>

#### Comparison with Property Graphs
</v-click>
<v-clicks>

- **Triplestores**: Native reasoning support via ontology languages; cumbersome to make statements about statements due to RDF model limitations.
- **Property Graphs**: Natively support statements about relationships but lack built-in reasoning.
- **Extensions**: Named Graphs and RDF-Star allow adding metadata (e.g., temporal/spatial validity, provenance) to triples.
</v-clicks>

--- 

#### Bridging Graph Models

<v-clicks>

- Efforts to combine RDF and property graph capabilities:
    - Neo4J Neosemantics Plugin: Supports RDF(S), OWL, SKOS, and SPARQL for property graphs.
    - AnzoGraph: Supports both RDF and property graph data models.
- Ongoing standardization for property graphs and general graph databases.


</v-clicks>