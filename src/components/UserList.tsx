import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  email: string;
  nat: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [gender, setGender] = useState<string | undefined>(localStorage.getItem('gender') || '');
  const [search, setSearch] = useState<string>(localStorage.getItem('search') || '');
  const [page, setPage] = useState<number>(1);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get(`https://randomuser.me/api/`, {
        params: {
          results: 10,
          page,
          gender: gender || undefined,
          seed: 'abc',
        },
      });
      setUsers(result.data.results);
    };

    fetchUsers();
  }, [page, gender]);

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
    localStorage.setItem('gender', e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    localStorage.setItem('search', e.target.value);
  };

  const filteredUsers = users.filter(user =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>User List</h1>
      <input type="text" value={search} onChange={handleSearchChange} placeholder="Search..." />
      <select value={gender} onChange={handleGenderChange}>
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.login.uuid}>
            <Link to={`/profile/${user.login.uuid}`}>
              {user.name.first} {user.name.last}
            </Link>
          </li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default UserList;
