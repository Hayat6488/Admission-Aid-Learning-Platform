import React from 'react';
import Header from '../Shared/Header/Header';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <Header></Header>
            <h1>1. what is cors?</h1>
            <h5>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</h5>
            <hr />
            <h1>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
            <h5>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</h5>
            <h5>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</h5>
            <hr />
            <h1>3. How does the private route work?</h1>
            <h5>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</h5>
            <hr />
            <h1>4. What is Node? How does Node work?</h1>
            <h5>
                Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                Node.js basically works on two concept
            </h5>
            <h5>Asynchronous</h5>
            <h5>Non-blocking I/O</h5>
        </div>
    );
};

export default Blogs;