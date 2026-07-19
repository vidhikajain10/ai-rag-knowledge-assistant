import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadCard from "./components/UploadCard";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="page">

        <Hero />

        <div className="content">

          <UploadCard />

          <ChatWindow />

        </div>

      </main>
    </>
  );
}