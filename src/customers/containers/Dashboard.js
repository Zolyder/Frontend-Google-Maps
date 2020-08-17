import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "../components/CardList";

const Dashboard = () => {
  const [customersByCity, setCustomersByCity] = useState([]);
  const [currentPagePagination, setCurrentPagePagination] = useState(1);
  const [totalCustomers, setTotalCustomers] = useState();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/customers/total-customers?quantityPerPage=${12}&indexPage=${currentPagePagination}`
        );

        const { dataPage, totalCustomersByCity } = response.data;

        setTotalCustomers(totalCustomersByCity);

        setCustomersByCity(dataPage);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCustomers();
  }, [currentPagePagination]);
  return (
    <CardList
      customersByCity={customersByCity}
      currentPagePagination={currentPagePagination}
      setCurrentPagePagination={setCurrentPagePagination}
      totalCustomers={totalCustomers}
    />
  );
};

export default Dashboard;
