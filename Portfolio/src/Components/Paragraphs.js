import "../Styles/paragraphs.css";

const Paragraphs = () => {
  return (
    <>
      <section className="paragraphs d-flex align-items-center flex-column">
        <h1
          className="text-justify text-center"
          style={{ fontSize: "50px", width: "auto-fit" }}
        >
          Welcome to my portfolio
        </h1>
        <p className="mt-5" style={{ fontSize: "20px", lineHeight: "1.8" }}>
          Explore a collection of diverse web projects built with{" "}
          <strong>HTML, CSS, JavaScript</strong>, and powered by the{" "}
          <strong>Bootstrap</strong> framework. This page is made
          developed using <strong>React.js</strong> with a native PHP back end. From visually
          engaging e-commerce platforms to practical utility applications, each
          project reflects my dedication to crafting seamless, responsive, and
          user-friendly web experiences.
        </p>
      </section>
    </>
  );
};

export default Paragraphs;
