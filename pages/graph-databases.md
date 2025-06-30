# Graph Databases

- This paradigm represents data and/or the schema as graphs.
- Many implementations support flexible schemas, with some offering data integrity features (e.g., constraints, identity, referential integrity)

- **Graph Data Model**:
    - **Nodes**: Represent entities, with metadata as key-value pairs and labels indicating roles (e.g., instance type).
    - **Edges**: Represent relationships, including direction, start/end nodes, a label for relationship type, and optional property value assertions.
- Many graph database implementations support hosting with flexible schemas to support heterogeneity and velocity.
---

## Types of Graph Databases for KGs

- Property graphs
- RDF triplestores

---

### Property graphs

- Graph models describing predicates connecting two entities.
- Nodes: Represent entities, holding key-value pair property assertions and labels indicating roles (e.g., instance type).
- Edges: Represent directed relationships between nodes, with a start/end node, a label for relationship type, and optional property assertions.

##### Property Graph Characteristics

- No current standard exists; development is primarily industry-driven.
- Neo4J: A widely adopted property graph implementation.
- Query Language: Graphs in Neo4J are queried using the Cypher language.

---

### RDF Triplestores

