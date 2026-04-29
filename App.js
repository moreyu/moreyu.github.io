console.log('App.js loading...');

const { Navbar, Hero, Capabilities, FeaturedArticles, BlogPosts, ParticleSystem, Interactions } = window;

function App() {
    React.useEffect(() => {
        console.log('App mounted');

        // Initialize particle system
        if (ParticleSystem) {
            ParticleSystem.init();
        }

        // Initialize interactions
        if (Interactions) {
            Interactions.init();
        }
    }, []);

    return (
        <div>
            <Navbar />
            <Hero />
            <Capabilities />
            <BlogPosts />
            <FeaturedArticles />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
