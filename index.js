const Box = (props) => {
  //  Write your code here.
  const { title, boxStyle } = props;
  return (
    <div className={boxStyle}>
      <p className="box-title">{title}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="boxes-container">
      <Box title="Small" boxStyle="small-box box" />
      <Box title="Medium" boxStyle="medium-box box" />
      <Box title="Large" boxStyle="large-box box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
