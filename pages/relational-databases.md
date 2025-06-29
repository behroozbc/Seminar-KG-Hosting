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

## Summarize
