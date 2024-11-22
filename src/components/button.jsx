const TimerButton = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Timer logic
  React.useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  return (
    <div className="timer-button">
      {!isRecording ? (
        <button
          className="record-btn"
          onClick={() => setIsRecording(true)}
        />
      ) : (
        <div className="stop-overlay" onClick={() => setIsRecording(false)}>
          <span>{seconds}s</span>
        </div>
      )}
    </div>
  );
};

export default TimerButton;
