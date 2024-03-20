import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";

import { searchByName } from "../../config";
import Button from "./Button";
import Info from "./Info/Info";

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const [country, setCountry] = useState(null);
  const [previousPath, setPreviousPath] = useState(null);

  console.log(previousPath);

  useEffect(() => {
    axios
      .get(searchByName(name))
      .then(({ data }) => setCountry(data[0]))
      .catch((error) => console.log(error));

    setPreviousPath(location.state);
  }, [name, location.pathname]);

  const goToPreviousPage = () => {
    navigate(previousPath || "/");
  };

  return (
    <div>
      <Button onClick={goToPreviousPage}>
        <IoArrowBackOutline /> Back
      </Button>

      {country && <Info {...country} />}
    </div>
  );
};

export default Details;
