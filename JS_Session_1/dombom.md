# Document Object Model
# Definition:
- The DOM is a programming interface for web documents. It represents the **structure of a web page as a tree of objects.** Each element in the HTML document (like paragraphs, headings, images, etc.) is represented as a node in this tree, and JavaScript can interact with these nodes to change the content, structure, and style of the web page.
# How It Works:
When a web page is loaded, the browser parses the HTML and creates a DOM tree. This tree structure allows JavaScript to access and manipulate elements on the page using various methods (e.g., getElementById, querySelector, etc.).

# Browser Object Model (BOM)
# Definition:

The BOM is a collection of objects provided by the browser that allows JavaScript to interact with the browser itself, beyond just the content of the web page. **The BOM includes objects like window, navigator, screen, history, and location.**
# Key BOM Objects:

- window: Represents the browser window or tab. It's the global object in the browser, meaning all global variables and functions are properties of the window object.
- navigator: Provides information about the browser (e.g., user-agent, platform).
- screen: Provides information about the user’s screen (e.g., screen width, height).
- history: Allows access to the browser’s session history (e.g., back, forward).
- location: Provides information about the current URL and allows navigation to different URLs.


  # Difference Between DOM and BOM
## Scope:

- DOM: Deals with the structure and content of the web page. It represents the HTML document as a tree of nodes.
- BOM: Encompasses the browser as a whole, allowing JavaScript to interact with the browser environment outside of the document, such as managing the browser history or accessing information about the browser window.
Purpose:

- DOM: Focuses on manipulating the content and structure of a web page (e.g., changing text, adding elements, handling user interactions).
- BOM: Focuses on interacting with the browser itself (e.g., controlling the window size, navigating between pages, or obtaining browser details).

# Summary
DOM is all about the document's content and structure, enabling you to manipulate HTML and CSS through JavaScript.
BOM is about the browser environment, allowing you to interact with the browser itself beyond the document.