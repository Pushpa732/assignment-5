**ANS No 1:**
-->The methods getElementById, getElementsByClassName, querySelector, and querySelectorAll are all used to select elements from the Document Object Model (DOM) in JavaScript, but they differ in their selection criteria, return types, and behavior.

1. getElementById(id):
Selection Criteria: Selects a single element based on its unique id attribute.
Return Type: Returns a single Element object if found, otherwise null.
Behavior: IDs are intended to be unique within an HTML document, so this method is optimized for retrieving a specific, singular element.
document.getElementById("header");

2.  getElementsByClassName(className):
Selection Criteria: Selects elements based on their class name.
Return Type: Returns a live HTMLCollection of elements. "Live" means that if the DOM changes (e.g., elements with the specified class are added or removed), the HTMLCollection will automatically update to reflect those changes.
Behavior: Used when you need to select multiple elements that share the same class.

3. querySelector(selector):
Selection Criteria: Selects the first element that matches a specified CSS selector. This can be an ID, a class, a tag name, or any combination of CSS selectors.
Return Type: Returns a single Element object if found, otherwise null.
Behavior: Provides a flexible way to select elements using the same syntax as CSS, but it only returns the first matching element. 

4. querySelectorAll(selector):
Selection Criteria: Selects all elements that match a specified CSS selector.
Return Type: Returns a static NodeList of elements. "Static" means that the NodeList is a snapshot of the DOM at the time of its creation and will not automatically update if the DOM changes.
Behavior: Offers the most versatile selection capabilities by allowing complex CSS selectors and returning all matching elements.


**Ans NO 2:**
--> Creating and inserting a new element into the Document Object Model (DOM) in JavaScript involves two main steps: creating the element and then attaching it to an existing element in the DOM.
1. Creating the Element:
The document.createElement() method is used to create a new HTML element node. This method takes a string representing the tag name of the element you want to create (e.g., "div", "p", "span").

in example : const newDiv = document.createElement("div"); // Creates a new <div> element
Once the element is created and configured, you need to attach it to an existing parent element within the DOM. Several methods can be used for this:
appendChild(): This method adds the new element as the last child of a specified parent element.
insertBefore(): This method inserts the new element before a specified reference child element within a parent.
prepend(): This method adds the new element as the first child of a specified parent element.

**ANs NO 3:**

-->Definition: Event bubbling is the process where an event starts from the target element and then bubbles up (propagates) to its parent, then to ancestor elements, until it reaches the document.

 Event Bubbling Works
1. Target Element:
An event is triggered on a specific element, known as the "target" element. 
2. Event Listener on Target:
The event handler attached directly to the target element is executed first. 
3. Propagation Upwards:
The event then "bubbles up" or propagates to the target element's parent, then its grandparent, and so on, through the DOM hierarchy. 
4. Ancestor Handlers:
If an event listener is attached to any of these ancestor elements, that handler will also be triggered. 
5. Reaching the Root:
This process continues until the event reaches the document element (or the root of the DOM), completing the bubbling phase. 

**ANS NO 4:**
-->Definition: Event delegation is a technique where you attach one event listener to a parent element instead of attaching it to multiple child elements.

It works because of event bubbling.
This is useful at,

Saves memory (fewer listeners).
Works for dynamically added elements.

**ANS NO 5:**
-->The preventDefault() and stopPropagation() methods in JavaScript event handling serve distinct purposes related to event behavior.

event.preventDefault():
This method prevents the default action associated with an event from occurring. For example:
Clicking a link (<a>) typically navigates to the href URL; preventDefault() stops this navigation.
Submitting a form (<form>) typically reloads the page or sends data; preventDefault() prevents this default form submission.
Right-clicking an element typically opens the browser's context menu; preventDefault() can suppress this menu.

event.stopPropagation():
This method prevents the event from propagating (bubbling or capturing) further up or down the DOM tree. When an event occurs on an element, it typically travels through the DOM hierarchy, triggering event listeners on parent or child elements. stopPropagation() stops this journey. For example:
If a button inside a div has a click handler, and the div also has a click handler, clicking the button would normally trigger both handlers due to event bubbling. stopPropagation() on the button's click event would prevent the div's click handler from being triggered.