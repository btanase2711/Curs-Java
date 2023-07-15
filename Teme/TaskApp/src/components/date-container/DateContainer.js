function DateContainer(props) {
  return (
    <div>
      <p>Due Date</p>
      <p>{props.date.toLocaleDateString()}</p>
    </div>
  );
}

export default DateContainer;
