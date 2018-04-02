// Facade Pattern
// The facade pattern is used when we want to create an abstraction layer between what is shown publicly and what is implemented behind the curtain. It is used when an easier or simpler interface to an underlying object is desired.

// A great example of this pattern would be selectors from DOM manipulation libraries such as jQuery, Dojo, or D3. You might have noticed using these libraries that they have very powerful selector features; you can write in complex queries such as:

// jQuery(".parent .child div.span")
// It simplifies the selection features a lot, and even though it seems simple on the surface, there is an entire complex logic implemented under the hood in order for this to work.

// We also need to be aware of the performance-simplicity tradeoff. It is desirable to avoid extra complexity if it isn’t beneficial enough. In the case of the aforementioned libraries, the tradeoff was worth it, as they are all very successful libraries.