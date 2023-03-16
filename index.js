const Box = (props) => {
  const { className, text } = props;
  return <div className={className}>{text}</div>;
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="con">
      <Box className="small" text="Small" />
      <Box className="medium" text="Medium" />
      <Box className="large" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
