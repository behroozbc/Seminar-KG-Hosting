

# In the end
<Transform :scale="0.8">

|  Relational database      | Document database     | Graph database (triplestore) |
| ------------- | ------------- |---------------|
|  Fixed schema. | No fixed schema. | No constraining, rigid schema(still they can have ontologies).|
|  Schema adaptations require a change of the database schema. |  Documents in a collection can have different properties; adding properties possible without affecting already existing documents. | Allows to easily integrate data using different schemas (ontologies); adding properties does not affect existing graphs as in RDB.|
| Data are organized in different tables. | Documents are organized in collections. | Triples can be organized in named graphs. |
| JOINs required to combine data from different tables. | Allows embedding documents; JOINs required when using identifiers to link to other documents. | JOINs are required, but they are handled differently than relational databases. |
|  No native reasoning.|  No native reasoning. | Native logical reasoning.|
</Transform>

<!--

Challenges of Hosting Knowledge Graphs:

Data model complexity, size, heterogeneity, velocity of change, and diverse access modalities for different use cases.
Table 19.8 summarizes three hosting paradigms: relational databases, document stores, and graph databases.


Relational Databases:

Strengths: Ideal for tabular data with stable structures and transactional environments prioritizing data integrity.
Modeling Strategies: Statement tables, class-centric, or property-centric approaches with varying trade-offs.
Limitations: Rigid structure struggles with data model flexibility, heterogeneity, and velocity.
Virtual Knowledge Graphs: Built as a layer over relational databases using query rewriting; limited support for reasoning and querying.


Document Model Paradigm:

Structure: Stores instances as documents in collections, either as nested objects or referenced across collections.
Advantages: Schemaless, handles heterogeneity and velocity well, supports instant access for semantic annotations (e.g., web page injections).
Challenges: Nested objects are hard to update; referencing mimics relational databases, losing graph model benefits.


Graph Databases:

Advantages: Flexible schemas, native support for graph data models, handle large sizes, and contextualize knowledge for diverse use cases.
Types:
Property Graphs: Support flexible relationship descriptions.
RDF Triplestores: Most widespread for knowledge graphs, built on W3C standards (RDF, RDFS, OWL, SPARQL), offer native reasoning.


Example: German Tourism Knowledge Graph hosted in GraphDB, leveraging named graphs and RDF-Star for provenance and metadata.


Conclusion:

RDF triplestores are the preferred choice for knowledge graphs due to robust implementations, W3C standards, and native reasoning support.



-->