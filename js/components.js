// Reusable Component Functions

function createElement(tag, attributes, ...children) {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    return element;
}

function appendToParent(parentSelector, element) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
        parent.appendChild(element);
    }
}

function removeElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.remove();
    }
}

// Add more reusable component functions as needed...