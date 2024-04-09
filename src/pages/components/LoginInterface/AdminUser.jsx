import React, { useEffect, useState } from 'react';
import './AdminUser.css';
import Spinner from '../Loaders/Spinner';
import { ToastContainer, toast } from 'react-toastify';

const AdminUser = () => {
  const url = 'https://port-web-app.onrender.com/user-backend';
  const [apiData, setApiData] = useState([]);
  const [newapiData, setNewApiData] = useState(0);

  useEffect(() => {
    // need to change this function  to optimized performance
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
      // console.log(data);
      setNewApiData(0);
    };
    getDatas();
  }, [newapiData]);

  const toastOptions = {
    position: 'top-right',
    autoClose: 8000,
    pauseOnHover: true,
    theme: 'dark',
  };

  const operator = async (id) => {
    console.log(id);
    try {
      const res = await fetch(
        `https://port-web-app.onrender.com/delete-user/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        toast.success(data.message, toastOptions);
        setNewApiData(1);
        const updatedApiData = apiData.filter((user) => user.id !== id);
        setApiData(updatedApiData);
        toast.error(res.message, toastOptions);
      } else {
        // Handle error response
        const errorData = await res.json();
        toast.error(errorData.message, toastOptions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin__container">
      <ToastContainer />
      <div className="admin__card">
        {apiData ? (
          <div className="card__info">
            {apiData.map((val, key) => {
              return (
                <div key={key} className="data_values">
                  <div className="card_btn">
                    <button
                      className="delete_card"
                      onClick={() => operator(val._id)}
                    >
                      X
                    </button>
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
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default AdminUser;
