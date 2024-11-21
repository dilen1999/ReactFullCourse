import User from "./User";

function App() {
  const userData = {
    name: "Kamal",
    age: 25,
    email: "kamal.@gmail.com",
    phoneNo: "0999838389",
    gender: "Male",
  };

  return (
    <div>
      <h1>Hello world</h1>
      <User
        // name={userData.name}
        // age={userData.age}
        // email={userData.email}
        // phone={userData.phone}
        // gender={userData.gender}
        {...userData}
      />
    </div>
  );
}

export default App;
