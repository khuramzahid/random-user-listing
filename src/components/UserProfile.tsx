import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  email: string;
  login: {
    uuid: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const UserProfile: React.FC = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await axios.get(`https://randomuser.me/api/`, {
        params: {
          uuid,
          seed: 'abc',
        },
      });
      setUser(result.data.results[0]);
    };

    fetchUser();
  }, [uuid]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name.first} {user.name.last}</h1>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Cell: {user.cell}</p>
      <p>Location: {user.location.city}, {user.location.state}, {user.location.country}</p>
      <p>Nationality: {user.nat}</p>
      <p>Date of Birth: {new Date(user.dob.date).toLocaleDateString()}</p>
    </div>
  );
};

export default UserProfile;
