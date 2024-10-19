import FeedbackWidgetDetail from "@/components/WidgetDetail";

function App() {
  return (
    <>
      <div>
        <FeedbackWidgetDetail
          projectId={2}
          allowedRoutes={["/", "/dashboard"]}
          displayAfter={2}
        />
      </div>
    </>
  );
}

export default App;
