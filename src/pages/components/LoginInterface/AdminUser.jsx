import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Loaders/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import './AdminUser.css';
import { ServiceContext } from '../../../ServiceContext';

const AdminUser = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(0);
  const [newapiData, setNewApiData] = useState(0);
  const { uri } = useContext(ServiceContext);
  const url = `${uri}/${process.env.REACT_APP_ADMIN_QUERY}`;
  const navigate = useNavigate();

  useEffect(() => {
    // need to change this function  to optimized performance
    const userRes = localStorage.getItem(process.env.REACT_APP_QUERY_KEYS);

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
      setLoading(!loading);
      setNewApiData(0);
    };

    if (userRes === 'Admin User granted permissions') {
      setTimeout(() => {
        getDatas();
      }, 6000);
    } else {
      navigate('/login');
    }
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
        `${uri}/${process.env.REACT_APP_DELETE_PATH}/${id}`,
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
        {loading ? (
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
                    <p className="msgCreation">
                      <span style={{ color: '#ff4584', fontweight: 'bold' }}>
                        createdAt :
                      </span>
                      {val.createdAt}
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
