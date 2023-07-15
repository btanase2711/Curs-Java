import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

// de ce am scos badge in afara taskcard si am facut-o componenta separata?

// Cum functioneaza cu props fara a fi declarate constatele in functia taskcard, ci declarate in fucntia App?

function TaskCard(props) {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge status={props.status} />
      </div>
      <div className="card-content">
        <p>{props.name}</p>
      </div>
      <div className="card-footer">
        <DateContainer date={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;
