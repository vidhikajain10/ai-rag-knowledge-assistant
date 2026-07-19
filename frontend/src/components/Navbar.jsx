export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">

        <div className="logo-circle">
          AI
        </div>

        <div>

          <h2>AI Knowledge Assistant</h2>

          <span>Retrieval Augmented Generation</span>

        </div>

      </div>

      <div className="status">

        <span className="dot"></span>

        Connected

      </div>
    </header>
  );
}