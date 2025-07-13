import React, { useEffect, useState } from 'react';

const UserExplorer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-teal-600 text-xl mt-12">🔄 Loading users...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-600 text-xl mt-12">
        ❌ Error loading users: {error}
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-12 bg-slate-50 border border-slate-200 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-center text-teal-700 mb-8">
        👥 User Explorer
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg border border-slate-200 shadow hover:shadow-md transition-all p-5"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              👤 {user.name}
            </h3>
            <p className="text-slate-600 mb-1">
              📧 <span className="font-medium">{user.email}</span>
            </p>
            <p className="text-slate-600">
              🏢 <span className="font-medium">{user.company.name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserExplorer;
