import Shape from "../../../public/images/shape.jsx";

export default function Text() {
  return (
    <div className="text">
      <p className="main-text">
        Connection is
        <span className="env">
          {" "}
          evolving
          <Shape />
        </span>{" "}
        and so are we.
      </p>
      <span className="desc">
        The metaverse is the next evolution of social connection. Our company’s
        vision is to help bring the metaverse to life, so we are changing our
        name to reflect our commitment to this future.
      </span>
      <button className="main-btn">Discovery</button>
    </div>
  );
}
