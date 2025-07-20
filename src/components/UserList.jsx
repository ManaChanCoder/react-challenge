import React from "react";

const UserList = (props) => {
  const { loading, error, user } = props;
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {loading ? <p className="text-2xl uppercase">Loading...</p> : null}
      <div className="">{error}</div>
      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 ? (
            user.map((value, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{value.name}</td>
                <td className="border px-4 py-2">{value.username}</td>
                <td className="border px-4 py-2">{value.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
