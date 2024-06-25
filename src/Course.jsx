export const Course = ({ course, img, color, bg }) => {
  return (
    <div style={{ backgroundColor: bg ? bg : "blue" }}>
      <img src={img} alt="" />
      <h1 style={{ color: color }}>{course}</h1>
    </div>
  );
};
