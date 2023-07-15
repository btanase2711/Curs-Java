import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

// de ce alegem sa facem un obiect in care sa definim constantele in cazul de fata?

function App() {
  const data = [
    {
      id: "T-2",
      status: "Todo",
      name: "Create a system design",
      dueDate: new Date(2023, 6, 12),
    },
    {
      id: "T-3",
      status: "InProgress",
      name: "Create a system design",
      dueDate: new Date(2023, 6, 12),
    },
    {
      id: "T-1",
      status: "Done",
      name: "Create a system design",
      dueDate: new Date(2023, 6, 12),
    },
  ];

  return (
    <div className="app-container">
      <TaskCard
        id={data[0].id}
        status={data[0].status}
        name={data[0].name}
        dueDate={data[0].dueDate}
      />
      <TaskCard
        id={data[1].id}
        status={data[1].status}
        name={data[1].name}
        dueDate={data[1].dueDate}
      />
      <TaskCard
        id={data[2].id}
        status={data[2].status}
        name={data[2].name}
        dueDate={data[2].dueDate}
      />
    </div>
  );
}

export default App;
