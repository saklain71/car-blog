import React from 'react';

const Blogs = () => {
    return (
        <div>

            <div className="grid grid-cols-1">

                <div className="text-center mt-5">
                    <h1><b><u>What is Contex API</u></b></h1>
                    <p className="p-5">
                        In a react application, data is passed top-down like a parent to child through props. If we want to call any data from the parent components, the best way use props to pass data to the child. But this is kinda time-consuming. This is not a problem but kind of complex . Context is designed to share data that can be considered "global" for a tree of React components. Basically, we can create content with a default value by setting a variable of the context with uppercase. And wrap your child's context using Provider. use context hook doing it easy to load data in child components.
                    </p>
                </div>
                <div className="text-center mt-5">
                    <h1><b><u>In short about SEMANTIC tag</u></b></h1>
                    <p className="p-5">
                    One of the most important features of HTML5 is its semantics.Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages.Semantic Html elements are those that clearly describe their meaning in a human and machine readable way.Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.It’s better for Search Engine Optimization.It provides screen readers with information.As a semantic tag typically contains below information : .authorship information .copyright information .contact information .sitemap .back to top links .related documents.This is known as using semantic HTML.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;