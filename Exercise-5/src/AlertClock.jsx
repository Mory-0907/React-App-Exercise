const AlertClock = ({ callback: onButtonClick, label="Alert Clock"}) => {
  return (
    <div>
      <button onClick={onButtonClick}>{label}</button>
    </div>
  );
};

export default AlertClock;
