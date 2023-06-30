import React, { useEffect, useState } from 'react';
import './AdminUser.css';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
const AdminUser = () => {
  const [apiData, setApiData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/admin/login');
    const url = 'https://port-web-app.onrender.com/user-backend';

    if (!apiData) {
      return <Spinner />;
    }

    const getDatas = async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      const data = await response.json();
      setApiData(data);
      console.log(data);
    };
    getDatas();
  }, []);
  return (
    <div className="admin__container">
      <div className="admin__card">
        <div className="card__info">
          {apiData.map((val, key) => {
            return (
              <div key={key} className="data_values">
                <p>
                  <span className="user_name">Name : </span>
                  {val.name}
                </p>
                <p>
                  <span className="user_email">Email : </span>
                  {val.email}
                </p>
                <p>
                  <span className="user_msg">Msg : </span>
                  {val.message}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
