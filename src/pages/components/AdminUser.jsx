import React, { useEffect, useState } from 'react';
import './AdminUser.css';
import Spinner from './Spinner';
// import { useNavigate } from 'react-router-dom';
const AdminUser = () => {
  const url = 'https://port-web-app.onrender.com/user-backend';
  const [apiData, setApiData] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    // navigate('/admin/login');

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
                <div className="card_btn">
                  <button className="delete_card">X</button>
                </div>
                <div className="card_val">
                  <p className="user_name">
                    <span style={{ color: 'green', fontweight: 'bold' }}>
                      Name :
                    </span>
                    {val.name}
                  </p>
                  <p className="user_email">
                    <span style={{ color: '#dbb800', fontweight: 'bold' }}>
                      Email :
                    </span>
                    {val.email}
                  </p>
                  <p className="user_mesg">
                    <span style={{ color: '#d53500', fontweight: 'bold' }}>
                      Msg :
                    </span>
                    <p className="user_test_msg">{val.message}</p>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
