import Footer from "./Footer";
import Page from "./Page";

function App() {
  return (
    <>
      <main>
        <Page />
        <div className="text">
          <h1>Simple booking</h1>

          <p>
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
