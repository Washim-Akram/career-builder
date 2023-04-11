import React from 'react';
import GeneralBanner from '../GeneralBanner/GeneralBanner';

const Blog = () => {
    return (
        <div>
            <GeneralBanner>
                <h2 className='text-center font-bold text-4xl text-blue-400'>Welcome to our blogs!</h2>
            </GeneralBanner>

            <div className='my-container'>
                <article className='bg-gray-50 p-5 rounded-lg mb-8'>
                    <h3 className='text-2xl font-bold mb-2'>When should we use context API ?</h3>
                    <hr className='mb-3 border' />
                    <p className='text-lg font-medium text-justify'>Context API is an awesome technique to pass data to all the children or elements. We can pass data from parent component to child components via props, which is called "prop-drilling" in react.But, main problem with prop-drilling is its become complex when our application is too large and so many props. To solve this problem context API help us. In context API all data set to the root element and send via context. So, when any child need the data from any where, they can use it. Context API makes code more cleaner, readable and understandable.</p>
                </article>

                <article className='bg-gray-50 p-5 rounded-lg mb-8'>
                    <h3 className='text-2xl font-bold mb-2'>What is a custom hook ?</h3>
                    <hr className='mb-3 border' />
                    <p className='text-lg font-medium text-justify'>Custom React JS hooks are reusable functions that we can use to add special and unique functionality to our React applications. Its a convention to make a custom hook that name starts with the "use" word. Custom hooks make code clean, reuseable and more readable.</p>
                </article>

                <article className='bg-gray-50 p-5 rounded-lg mb-8'>
                    <h3 className='text-2xl font-bold mb-2'>What is useRef ?</h3>
                    <hr className='mb-3 border' />
                    <p className='text-lg font-medium text-justify'>The useRef() hook is a react hook that allows us to create a reference to the DOM element. useRef() takes an initial value as a parameter, like: useRef(initialValue). useRef() returns an object.</p>
                </article>

                <article className='bg-gray-50 p-5 rounded-lg'>
                    <h3 className='text-2xl font-bold mb-2'>What is useMemo ?</h3>
                    <hr className='mb-3 border' />
                    <p className='text-lg font-medium text-justify'>The useMemo() is a react hook, used in react that returns a memoized value.That means, in react, when the state and props are do not change, the component are does not re-render. It shows the same output. The useMemo() hook is used to improve performance in our react application.</p>
                </article>
            </div>
        </div>
    );
};

export default Blog;