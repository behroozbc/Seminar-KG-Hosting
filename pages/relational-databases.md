# Relational Databases
[comment]: <> (من اینو بهتره خلاصه ترش بکنم. به این شکل که یه بخشی اش بره داخل اسلاید های اضافی)
- **Relational Model (Codd 1970<sup>1</sup>)**: Decouples logical data representation from physical implementation, Isolates data from hardware and application logic (program).

- **Structured Query Language (SQL)**: High-level declarative language reflecting relational algebra for querying relational databases.

- **Relational Model Storage**: Data stored as tuples in structures called relations (tables).

- **Relation Structure**:

  - **Header**: Finite set of attribute names (columns).

  - **Body**: Set of tuples (rows).
- **Example Relation**: Customer (*Customer_ID*, Tax_ID, Name, Address, City, State, Zip, Phone, Email, Sex).

[comment]: <> (عکس از یک جدوله)
- **Abstract Access Layer**: Provides applications with a way to access, store, and modify data.
<Footnotes separator>
  <Footnote :number=1><a href="https://en.wikipedia.org/wiki/Relational_model" rel="noreferrer" target="_blank">Codd</a></Footnote>
</Footnotes>

---

# Relational Databases 
## Operations

There are various operations that can be done on a relation.
- Join
- Projection  (ℿ)
- Selection (σ)
-  set union, set difference, and exist ...
---
layout: two-cols 
--- 

### Storing Knowledge Graphs 
- Large knowledge graphs may lead to large tables.

- Querying Challenge
  - Requires any type joins, potentially processing vast data.
    - A graph with 1M triples could involve 10<sup>12</sup> rows in a naïve implementation.



### Domain and Range Definitions (RDF Schema)

- Domain: Specifies classes to which properties apply.

- Range: Defines the type of value a property can take.

- **Challenge**: Integrity constraints can partially enforce domain/range in a closed-world setting, but full RDFS semantics must be handled by applications.
::right::
### Class and Property Hierarchies

- Representation requires multiple auxiliary tables and joins.

- Application must hardwire semantics for hierarchies.

- Inheritance Issue: Property inheritance between subclasses (e.g., range inheritance) is complex and must be managed by the database designer.

### Impact on Declarative Nature 

- **Application logic must hardwire semantics of modeling languages (e.g., RDFS), reducing the declarative nature and reusability of knowledge graphs.**



---

### Statement table

- A simple way.

#### How?:
- RDF triples representing the knowledge graph can directly be stored in this table without any change

#### Problems

-  The data are not normalized. 

- A growing number of triples result in inefficient self-joins
---

### Class-centric table 


- Creates one table per class type to store all property values for that class.

- Properties may appear in multiple tables if shared across classes.

### Table Structure:

- Each class in the knowledge graph is represented as a table.

- Properties of the class are represented as columns.

- Properties without value assertions in the knowledge graph may result in columns with NULL values, leading to sparse tables (many NULLs).

- For Queries use join with other classes(table). 

---

#### Drawbacks

1. Adding new properties and classes is cumbersome as the schema must be recompiled.

2.  the level of normalization is not enough to handle multivalued properties as they lead to repetitions of tuples for each value of a property.
  
    - a hotel has multiple descriptions, we would need to create another tuple for the same hotel with a different description but repetitive values for all other columns.
---

### Property-centric

-  This approach use one table per property

- Each table contains two columns
  - subject
  - object
- This approach easily allows multivalued properties.
- But, duplication of subjects is still necessary.

#### drawbacks

- Adding a new property requires the creation of a new table and, therefore, a recompilation of the schema.

- A common operation like retrieving properties defined on a single instance requires joins over a vast number of tables.
---

### Virtual RDF graphs

- This approach have been a popular way to convert relational databases to KG in recent years.

- Do not store a concrete knowledge graph in a relational database.

- Provide an ontology-based access layer over existing relational databases.

```mermaid
flowchart LR
SPARQL[SPARQL]
SQL[SQL]
RSP["SPARQL solution mappings"]
SPARQL-- converted  ---SQL -- Transform back ---RSP

```

---

#### How works?

```mermaid {scale: 0.5}
flowchart LR
start((Start))
sparqlQ(SPARQL Query)
db[(Database)]
rewriting("Rewriting")
rewritingQ("Rewriting Query")

ontology[Ontology]

unfolding(unFolding)

sqlQuery("SQL Query")

evaluation(Evaluation)
sqlR("SQL Result")
rT("Result Translation")
mapping[Mapping]
sparqlAn("SPAEQL Answer")
End((End))

ontology--> rewriting
mapping-->unfolding
db--> ontology
db --> evaluation
start--> sparqlQ --> rewriting -->  rewritingQ --> unfolding--> sqlQuery--> evaluation--> sqlR--> rT--> sparqlAn-->End
```

- Compiling the ontology into the mapping in an offline phase

- Exploiting the constraints over the data to strongly simplify the queries after the unfolding phase
- Planning query execution using a cost-based model


---

#### Advantages and Drawbacks

##### Advantages
- They do not require any preprocessing on a relational database management system (RDBMS).
- They allow ontology-based access via mappings and query rewriting (e.g., SPARQL to SQL).
- They provide a relatively cheap way to build a knowledge graph from relational databases.
- They provide a smooth integration in industrial standard software environments.

##### Drawbacks

- Many things can go wrong with query rewriting and unfolding (mappings need extra attention).
- Querying the schema is challenging (due to the underlying relational model).
- Typically, only limited querying and reasoning capabilities are provided.
---
hide: true
---

# Relational Databases

[comment]: <> (من اینو بهتره خلاصه ترش بکنم. به این شکل که یه بخشی اش بره داخل اسلاید های اضافی)

- **Relational Model (Codd 1970<sup>1</sup>)**: Decouples logical data representation from physical implementation.

- **Structured Query Language (SQL)**: High-level declarative language reflecting relational algebra for querying relational databases.

- **Separation**: Isolates data from hardware and application logic (program).



- **Data Storage**: Stored in relations (tables).



- **Operations**: Performed at the relational level, allowing simultaneous operations on multiple tuples.



- **Relational Algebra**: Formalizes operations using set-based operations.



- **Abstract Access Layer**: Provides applications with a way to access, store, and modify data.
<Footnotes separator>
  <Footnote :number=1><a href="https://en.wikipedia.org/wiki/Relational_model" rel="noreferrer" target="_blank">Codd</a></Footnote>
</Footnotes>

---

#### An Implementation

- **Ontop** 
- Virtual RDF graph framework (Xiao et al. 2020).
- Distributed under the Apache 2.0 license.
- Supports customized mapping language and R2RML (RDB to RDF Mapping Language).
- Handles a subset of SPARQL 1.1 with optimizations for Join, Union, and LeftJoin operations.
- Implements reasoning through query rewriting, supporting the OWL 2 QL profile.

[comment]: <> (عکسش رو بزارم با گیتهابش رو)


---

## Summarize

- **Data Model**: Relational model struggles with flexible schemas of knowledge graphs, where data and schema boundaries blur, unlike rigid, decoupled schemas in relational databases.



- **Heterogeneity**: Representing graph models requires numerous queries and costly joins, making it inefficient.



- **Velocity**: Inference generating new TBox knowledge may necessitate schema recompilation, an expensive operation.



- **Relationship Representation**: Modeling relationships like inheritance is complex.



- **Entailment Rules**: Implementing RDFS entailment rules is not straightforward and often requires application logic or external rules.