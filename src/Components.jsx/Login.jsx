import React from 'react';

export default function Login() {
  return (
    <>
      <div className="container_7">
        <form className="form_1">
          <table>
            <thead>
              <tr>
                <th colSpan="2">
                  <h1>CoNtAcT Us</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label>
                    <h2 className="shadow">Name</h2>
                  </label>
                </th>
                <td>
                  <input type="text" name="fname" placeholder="Enter Name" />
                </td>
              </tr>

              <tr>
                <th>
                  <label>
                    <h2 className="shadow">Phone Number</h2>
                  </label>
                </th>
                <td>
                  <input type="text" placeholder="Phone Number" />
                </td>
              </tr>

              <tr>
                <th>
                  <label>
                    <h2 className="shadow">Email</h2>
                  </label>
                </th>
                <td>
                  <input type="text" name="email" placeholder="Enter Email" />
                </td>
              </tr>

              <tr>
                <th>
                  <label>
                    <h2 className="shadow">Password</h2>
                  </label>
                </th>
                <td>
                  <input type="password" placeholder="Enter Password" />
                </td>
              </tr>

              <tr>
                <th>
                  <label>
                    <h2 className="shadow">Message</h2>
                  </label>
                </th>
                <td>
                  <textarea placeholder="Enter Message" cols={43} rows={8}/>
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <button id="btn">
                    <h4>Login</h4>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}
