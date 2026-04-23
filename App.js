const { Navbar, Hero, Capabilities } = window;

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Capabilities />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
