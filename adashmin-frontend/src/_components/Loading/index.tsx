import "./loading.css";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "164px",
      }}
    >
      <span className="loader"></span>
      Aguarde um instante por favor 😁
    </div>
  );
};

export default Loading;
