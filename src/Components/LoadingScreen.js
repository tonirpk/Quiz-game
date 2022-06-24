import React from "react";
import Skeleton from "@mui/material/Skeleton";

import CardWrapper from "../Helpers/CardWrapper";

const LoadingScreen = () => {
  return (
    <CardWrapper>
      <Skeleton width="40%" sx={{ m: "0 auto" }} />
      <div>
        <Skeleton />
        <Skeleton animation="wave" height={90} variant="text" />
      </div>
      <div>
        <Skeleton />
        <Skeleton animation="wave" height={90} variant="text" />
      </div>
      <div>
        <Skeleton />
        <Skeleton animation="wave" height={90} variant="text" />
      </div>
      <Skeleton animation="wave" variant="text" height={70} />
    </CardWrapper>
  );
};

export default LoadingScreen;
