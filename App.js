const { Navbar, Hero, Capabilities, BlogPosts } = window;

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Capabilities />
            <BlogPosts />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
