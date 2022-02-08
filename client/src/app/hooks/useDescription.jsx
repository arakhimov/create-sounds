/* eslint-disable indent */
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../API";

const DescriptionContext = React.createContext();

export const useDescription = () => {
  return useContext(DescriptionContext);
};

export const DescriptionProvider = ({ children }) => {
  const [description, setDescription] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  async function getDescriptionById(id) {
    console.log("asd");
    try {
      return await api.descriptions.getDescriptionById(id).then((data) => {
        setDescription(data);
        return data;
      });
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }

  return (
    <DescriptionContext.Provider value={{ description, getDescriptionById }}>
      {/* {isLoading ? <Preloader /> : children} */}
      {children || isLoading}
    </DescriptionContext.Provider>
  );
};

DescriptionProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
