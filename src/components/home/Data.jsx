const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home">Frank Kamgang  </h1>
      <h2>Visual Designer</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium molestias sapiente!</p>
      <button
        style={{display: "flex", 
  alignItems: "center",
  gap: "8px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  padding: "10px", 
  fontSize: "16px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s"}}
  
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zM10.59 15.41L7.17 12l1.41-1.41L10.59 13l5.83-5.83 1.41 1.41-7.24 7.24z"
            fill="white"
          />
        </svg>

        <span>Dis Bonjour!</span>
      </button>
    </div>
  );
};

export default Data;