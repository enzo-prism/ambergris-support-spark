
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RecurringInvestment: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to home page
    navigate("/");
  }, [navigate]);
  
  return null;
};

export default RecurringInvestment;
