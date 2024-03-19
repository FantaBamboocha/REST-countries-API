import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";

import { searchByName } from "../../config";
import Button from "./Button";
import Info from "./Info/Info";

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  console.log(country);

  useEffect(() => {
    axios
      .get(searchByName(name))
      .then(({ data }) => setCountry(data[0]))
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBackOutline /> Back
      </Button>

      {country && <Info {...country} />}
    </div>
  );
};

export default Details;
