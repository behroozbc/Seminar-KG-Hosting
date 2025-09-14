# Document Model

<v-clicks depth="2">

- Stores data as nested key-value pairs, organized into documents, similar to tuples in relational databases.

- Gained popularity with big and streaming data due to flexible schema and easy scalability.

- Collections
    - Documents are grouped into collections, analogous to tables in relational databases.
    - Unlike tables, collections do not enforce a rigid schema.
    - Each document in a collection can have a unique structure and metadata.
- Ways to host KG
    - Nested objects
    - The adoption of document references
</v-clicks>
---

## Nested objects

<v-clicks>

- The native way of storing documents
- Everything about an instance is stored in one document.
- This makes it easier to access individual documents.
- **But**, the updates are problematic as a nested object appearing in many documents needs to be updated
</v-clicks>
---

### Example

````md magic-move {lines: true}
```ts {*|2-3|10-15|*}
{
  "id": "166417787",
  "@type": "Hotel",
  "description": "Das gemütliche familiär geführte Haus liegt ruhig, in Waldnähe, dennoch verkehrsgünstig.",
  "geo": {
    "latitude": "49.26178",
    "longitude": "7.1033"
  },
  "name": "Hotel-Restaurant La Fontana",
  "address": {
    "addressCountry": {
      "@type": "Country",
      "name": "DE"
    }
  }
}
```
````
<v-click at="2">

-  Each nested object without an id field represents a blank node.
</v-click>
---

## Document references

<v-clicks>

- Splits documents into conceptually cohesive collections.
- Stores references to objects instead of nesting them, avoiding update issues associated with nested objects.
- Requires application-level implementation of Join operations, reducing distinction from relational databases.
</v-clicks>
---

````md magic-move {lines:true}
```ts {*}
{
    "id": "166417787",
    "@type": "Hotel",
    "description": "Das gemütliche familiär geführte Haus liegt ruhig, in Waldnähe, dennoch verkehrsgünstig.",
    "geo": "...",
    "name": "Hotel-Restaurant La Fontana",
    "address": "-123"
},
{
    "id": "-123",
    "addressCountry": {
      "@type": "Country",
      "name": "DE"
    }
}
```
````
---

## Some Implementations

<v-clicks>

- Mongodb
- RocksDB
    - Open Source
    * Developed and maintained by Facebook.
- AllegroGraph
</v-clicks>
---

## Semantic Annotation vs. Knowledge Graph

<v-clicks>

- Semantic Annotation: Focuses on publishing machine-understandable annotations for web pages.
    - Efficiently achieved via one-to-one mapping between a JSON-LD document and its corresponding web page.
    - Document stores excel due to straightforward document-to-annotation correspondence.
- Knowledge Graph: Less suitable for document stores.
    - Challenges in leveraging graph data connectedness and supporting reasoning.
    - Querying and reasoning are more efficient when facts are grouped, rather than scattered across multiple documents.
</v-clicks>
---

## In the end

<v-clicks>

- Schemaless design with looser consistency checking, supporting heterogeneity and velocity.
- Allows instances to have varied metadata and multiple property values, avoiding null values or duplications seen in relational databases.
- Native JSON support enables **O(1)** access for retrieving instances in JSON-LD format, where each instance is a document.

</v-clicks>