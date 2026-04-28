// Simple test - check if components load
console.log('App.js loading...');
console.log('window.Motion:', window.Motion);
console.log('window.Navbar:', window.Navbar);
console.log('window.Hero:', window.Hero);
console.log('window.Capabilities:', window.Capabilities);
console.log('window.BlogPosts:', window.BlogPosts);

const { Navbar, Hero, Capabilities, BlogPosts } = window;

function App() {
    console.log('App rendering...');
    return (
        <div>
            <Navbar />
            <Hero />
            <Capabilities />
            <BlogPosts />
        </div>
    );
}

console.log('Creating React root...');
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Rendering App...');
root.render(<App />);
console.log('App rendered!');
