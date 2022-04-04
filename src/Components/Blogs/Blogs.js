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


                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;