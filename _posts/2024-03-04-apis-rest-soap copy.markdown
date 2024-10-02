---
layout: post
title: "APIs, REST & SOAP"
subtitle: "All humans need to REST, and I do hope most of us use SOAP"
date: 2024-03-04 16:08:00 +0300
categories: webdev
tags: [Webdev, API]
featured_image: /assets/images/api-cover.png
content-source: https://chat.openai.com/
tldr: When it comes to seamless data transmission, we can use APIs. This blog post will look into the fine lines that separate REST vs. SOAP architectures, as well as the core concepts of APIs, JSON & XML.
---

## APIs

First of all, a quick lecture on Application Programming Interfaces (APIs). The keyword for APIs is <b>Integration</b>. Websites, apps, and other systems often differ in their architecture, and how they communicate with one another, therefore we need standards and tools to effectively communicate and transmit data. Before the internet, older systems often worked simply on their own, i.e. offline, or with another in-house system by communicating via a wire, domain-specific protocols, language, and/or with a bunch of different types of standards, etc. So with the advent of the internet, we needed new tools and standards to effectively communicate and unify our scattered systems, hence the rise of APIs.

<b>Among others we use APIs because they:</b>

- Improve integration of systems
- Interoperability and cross-platform usages between different types of systems
- Streamlines and unifies development
- Improves efficiency, security, and scalability of the development and final products
- Development and end-product customization

The word, API, is an umbrella term for tools, definitions, standards, and protocols to create and control data transmission between disparate systems, often connected via different networks and systems over the internet. In simple terms: APIs are a unified way for different systems to communicate with one other. Having large-scale systems, that are hard to keep track of, maintain, and improve upon is the cause of not having modularity. APIs aid in this, as they can be thought of as jigsaw puzzles with many pieces that form a unified and finalized product. Some puzzle pieces are required, most can be left out, and not all pieces fit together properly. This is because the type of data and logic that each API piece (service) handles and responds to might differ. If some parts don't fit together, or you want to expand your puzzle you can just improve that one piece and not go and buy a new puzzle that might fit your needs.

It's often said that APIs are like the waiter/translator of the internet. APIs pass requests to and from the kitchen (server), to the diner (client). So when a Gen-Z diner wants a gluten-free poached egg, the waiter can correctly communicate the request to the Michelin star chef in the kitchen

{% include content-source.html image_path="/assets/images/api-waiter.png" alt_text="api-waiter" image_src="https://blog.openapihub.com/en-us/what-is-an-api-and-what-does-it-do/" %}

APIs can be: private, public, or a mixture of both, they can also be free, pay-per-request, or restricted behind a paywall, etc. Many businesses might have services and tools that need to communicate with one another to make operations more effective, Additionally, companies may offer public-facing APIs to facilitate easy integration with other services, thereby improving user experience. We use APIs to streamline and simplify the sharing of certain data between similar systems, products, and services. This in turn aids in the efficiency, security, and customization of systems and their data, both in transit and in-store. Most modern apps and services facilitate both private and public APIs to develop, maintain, and exchange their products.

<b>Private API</b>

- Instagram.com might build an internal API that gathers the user engagement data (likes, clicks, etc.) to be used by other internal services, like marketing, statistics, content moderation, etc.

<b>Public API</b>

- Example: A public weather service, like: https://openweathermap.org/, lets people access public weather data, like temperatures, past weather data, or forecasts, to use in their services, products, etc.

<hr />

## JSON vs. XML

Both JSON and XML are two data format types that we use when structuring, and exchanging data on the internet. We often find them in web services, especially with APIs.

### JSON (JavaScript Object Notation)

JSON is easy to understand and parse for both humans and machines. Due to its simplicity and smaller size, JSON tends to be faster in terms of both parsing and serialization. This efficiency is a key reason for its preference for web APIs and services that demand high performance. It's a type of JavaScript syntax, but it's not language-specific. It is represented by key-value pairs, and the use of curly braces {} to hold objects, and brackets [] to hold arrays. Keys are strings, and values can be: strings, numbers, objects, arrays, booleans, or null. JSON supports a great deal of data types, making it more suitable to both understand and implement with other tools, frameworks, and programming languages.

<b>JSON format:</b>

```json
{
  "employees": [
    {
      "id": "1",
      "name": "John Doe"
    },
    {
      "id": "2",
      "name": "Jane Smith"
    }
  ]
}
```

### XML (eXtensible Markup Language)

XML is a markup language, like HTML, we encode our data in XML. XML is a set of rules and guidelines for encoding in a format that is both human-readable and machine parsable. It does not display its data, it is used to store, structure, and transport the data. Displaying XML data is used with technologies like XSLT (Extensible Stylesheet Language Transformations). Like with HTML, XML uses a markup tags for its elements, each subset element is formed like a tree, allowing for a complex hierarchical structure. XML stores all its data in strings by default. Whilst not necessary, we can use schemas like XSD (XML Schema Definition), to define structure, provide data integrity, and validate the data. XML is often used with detailed structured and complex document formats such as SVGs, that require structure, annotations, metadata, etc. But it can also be used for other types of structures such as web APIs.

<b>XML format:</b>

```xml
<employees>
  <employee>
    <id>1</id>
    <name>John Doe</name>
  </employee>
  <employee>
    <id>2</id>
    <name>Jane Smith</name>
  </employee>
</employees>
```

JSON is often faster, and easier to work with on the web, but XML is more verbose, and often more detailed, allowing for more detailed solutions with namespaces and metadata, etc.

<hr />

## REST vs. SOAP

{% include content-source.html image_path="/assets/images/rest-vs-soap.png" alt_text="rest-vs-soap" image_src="https://blog.hubspot.com/website/rest-vs-soap" %}

So what are REST and SOAP? They are the two main types of web APIs used today, i.e. the web service communication between clients and servers. Web APIs enable interaction with websites, apps, and services over the internet, serving as a bridge between different software systems. They both have connections to the hypertext transfer protocol (HTTP), but that is about it. Both REST and SOAP have rules that are more-or-less industry standards, let's explore them.

### REST (Representational State Transfer)

REST, or RESTful APIs, represent an architectural style rather than a specific protocol for APIs. REST APIs use the HTTP protocol, and its methods like GET, POST, PUT, and DELETE to modify data between two web services. REST APIs therefore found and accessed via URLs or URIs. REST APIs mainly use JSON for the data transition, which is both lightweight and easy for both humans and machines to parse. The preference for JSON in REST APIs typically results in faster processing and lower bandwidth usage compared to SOAP's XML format, making REST more suitable for web applications requiring high performance and scalability. But RESTful APIs can use other format as well: XML, plaintext, HTML, YAML, etc.

REST APIs are stateless, meaning that each request from the client to the server needs to contain all the necessary information and data to facilitate the correct request. The state of the session is not on the server but resides on the client.

RESTful APIs are the most commonly found web APIs, it is easy to use and highly flexible, with their speed being a key reason for their widespread use. However, they do not inherently focus on security out of the box, but there are ways to secure the data, like with HTTPS, OAuth, JWT, etc.

<b>Advantages:</b>

- Flexible, fast, and easy-to-use
- Less of a learning curve
- Supports secure transmission such as HTTPS
- Can use a multitude of data formats
- Designed to be close to other similar web services and tools

<b>A curl REST API request:</b>

```bash
curl -X GET "http://example.com/api/cars/1" \
     -H "Accept: application/json"
```

### SOAP (Simple Object Access Protocol)

SOAP, as a protocol with strict standards, ensures security, availability, and data integrity, making it ideal for environments where these aspects are critical, despite its higher complexity and potential impact on performance. SOAP has built-in rules that increase its overall complexity and may affect load and operational times. However, these built-in standards and rules offer better security and reliability of the underlying data and its transition. SOAP relies on HTTP, TCP, or SMTP (email) for the transmission of the data, and the response from the server needs to be in XML. XML can be a bit more heavy compared to JSON data since XML can lead to larger message sizes and slower read times compared to JSON. SOAP systems are often found in legacy and private solutions.

SOAP supports stateful operations and emphasizes security, data integrity, and transactional reliability through standards like WS-Security, WE-ReliableMessaging, WSDL, etc. Using these standards one can get error-handling, and other nifty bits when using SOAP.

<b>Advantages:</b>

- Works with any transport protocol
- Standards, and strict guidelines
- Built-in error handling
- Many pre-built extensions: WS-Security, WSDL, etc.
- ACID (atomicity, consistency, isolation, and durability) compliance

<b>A XML SOAP request:</b>

```xml
POST /api/cars HTTP/1.1
Host: example.com
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://example.com/GetCar"

<?xml version="1.0"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:emp="http://example.com/employee">
   <soapenv:Header/>
   <soapenv:Body>
      <emp:GetCarRequest>
         <emp:EmployeeId>123</emp:EmployeeId>
      </emp:GetCarRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

### Use-cases

SOAP is commonly used in enterprise and critical systems where its comprehensive security features are required, while REST is favored for its flexibility and performance in web and mobile applications. Use REST when you need a lightweight, scalable, flexible, and performance-centric solution, such as with Internet-of-things, public high-traffic services, mobile apps, etc. Use SOAP when security, availability, and integrity of the data are key, such as: financial, healthcare, and/or other sensitive data transactions.

<hr />

## Conclusion

So now we’ve looked at APIs, REST, SOAP, JSON, XML, etc. I’d like to delve a bit deeper into APIs, and not just web-centric versions. APIs make up a large part of both the development and user side of the internet. We begin to move away from large single systems, into more interconnected modular systems, that we can tweak, add, and remove parts from. APIs are often seen as backend development tasks, and I’ve personally had the privilege of working with both private and public APIs. They are key to understanding and get misunderstood a lot of the time.

There are other technologies and standards out there like GraphQL, which is a query language for APIs, gRPC an open-source remote procedure call framework, WebSocket protocol for providing full-duplex communications over TCP connection, etc. I'd like to explore more in later blog posts. I hope this blog post might have given you a general knowledge of APIs. Thank you for reading!

{% include content-source.html image_path="/assets/images/waiter.gif" alt_text="waiter" image_src="https://giphy.com/gifs/spongebob-spongebob-squarepants-episode-1-3oKHW5ygEPHUNrb1SM" %}
