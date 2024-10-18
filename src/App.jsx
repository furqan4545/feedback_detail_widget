import FeedbackWidgetDetail from "@/components/WidgetDetail";

function App() {
  return (
    <>
      <div>
        <FeedbackWidgetDetail
          allowedRoutes={["/", "/dashboard"]}
          displayAfter={2}
        />
      </div>
    </>
  );
}

export default App;
