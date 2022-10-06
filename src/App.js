import BoxComponent from "./components/box";
import FormSection from "./components/form";

function App() {
  return (
    <>
      {/* why i did this? when using gutter in idk why it push the container out and make a scrollbar in the very bottom page */}
      {/* the point is it need container to wrap it up */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <BoxComponent />
        <FormSection />
      </div>
    </>
  );
}

export default App;
