import { useState, useRef, useEffect, useLayoutEffect } from "react";

interface SEP01HooksRefCricketEx2Type {
  runs: number;
  balls: number;
}

const SEP01HooksRefCricketEx2 = () => {
  const [scoreboard, setScoreboard] = useState<SEP01HooksRefCricketEx2Type[]>(
    []
  );
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);
  const valueRef = useRef<HTMLSelectElement>(null);
  const displayRef = useRef<HTMLParagraphElement>(null);

  const scoreUpdate = () => {
    if (scoreboard.length >= 10) {
      alert("All Batsmen Are Out");
      valueRef.current!.value = "";
      return;
    }
    let val = valueRef.current!.value;
    if (val === "wd" || val === "nb") {
      setRuns(runs + 1);
    } else if (val === "out" && scoreboard.length < 10) {
      let score = { runs: runs, balls: balls };
      setScoreboard([...scoreboard, score]);
      setBalls(0);
      setRuns(0);
      valueRef.current!.value = "";
    } else {
      setRuns(runs + Number(val));
      setBalls(balls + 1);
      valueRef.current!.value = "";
    }
  };

  // useEffect Hook is calls after every render
  // In dependency array we can pass the state variable or props
  useEffect(() => {
    setTimeout(() => {
      if (displayRef.current) {
        displayRef.current.innerText = `Runs : ${runs} Balls : ${balls}`;
      }
    }, 1000);
  }, [runs, balls]);

  // useLayoutEffect Hook is calls before every render
  useLayoutEffect(() => {
    alert("Welcome My Cricket Component is Loading Now..!");
  }, []);

  // useEffect Hook is calls after every render
  useEffect(() => {
    return () => {
      alert("Bye My Cricket Component is Unloading Now..!");
    };
  },[]);

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: "#f0f2f5",
        color: "#333",
        display: "flex",
        justifyContent: "center",
        // Remove the first alignItems property
        paddingTop: "50px",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center", // This is the correct property to keep
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2c3e50", marginBottom: "15px" }}>
          Batting Runs :
        </h2>
        {/* Taking Value using Ref from Select */}
        <select
          ref={valueRef}
          onChange={scoreUpdate}
          style={{
            width: "100%",
            maxWidth: "300px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            transition: "border-color 0.3s ease",
            cursor: "pointer",
          }}
        >
          <option value="">Select Runs</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="wd">Wd Ball</option>
          <option value="nb">No Ball</option>
          <option value="out">Out</option>
        </select>
        <br />
        <br />
        <h3 style={{ color: "#2c3e50", marginBottom: "15px" }}>Scoreboard</h3>
        <br />
        {/* Putting Runs and Balls Using Ref */}
        <p
          ref={displayRef}
          style={{
            backgroundColor: "#ecf0f1",
            padding: "15px",
            borderRadius: "8px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            margin: "20px 0",
            color: "#34495e",
          }}
        ></p>
        <br />
        {scoreboard.length > 0 ? (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#3498db", color: "white" }}>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    textAlign: "left",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Batsman
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    textAlign: "left",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Runs
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    textAlign: "left",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {" "}
                  Balls
                </th>
              </tr>
            </thead>
            <tbody>
              {scoreboard.map((score, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                    }}
                  >
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "12px",
                        textAlign: "left",
                      }}
                    >{`Batsman ${index + 1}`}</td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "12px",
                        textAlign: "left",
                      }}
                    >
                      {score.runs}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "12px",
                        textAlign: "left",
                      }}
                    >
                      {score.balls}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h3 style={{ color: "#7f8c8d", fontStyle: "italic" }}>
            No Batsman Batted Yet ...!
          </h3>
        )}
      </div>
    </div>
  );
};

export default SEP01HooksRefCricketEx2;
