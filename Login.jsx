import { useState } from "react";

function userData() {
  return {
    username: "",
    password: "",
    session: false
  };
}

function Login() {
  const [data, setData] = useState(userData());

  function handleInputChange (event) {
    const name = event.target.name
    const value = event.target.value
    const checked = event.target.checked
    const type = event.target.type

    setData((d) => {
        return {
            ...d,
            [name]: type === 'checkbox' ? checked : value
        }
    })
  }

  return (
    <>
      <input name="username" value={data.username} onChange={handleInputChange}/>
      <input name="password" type="password" value={data.password} onChange={handleInputChange}/>
      <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange}/>

      <pre>
        {JSON.stringify(data , null, 2)}
      </pre>
    </>
  );
}

export default Login;
