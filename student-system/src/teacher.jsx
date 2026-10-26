function Teacher(props) {
  return (
    <div>
      <h1>Teacher Page</h1>
      <p>
        Name: {props.name}
      </p>
      <p>
        <S>Subject: {props.subject}</S>
      </p>
      <p>
        <S>School: {props.school}</S>
      </p>
    </div>
  );
}
export default Teacher;