import React from "react";
import { ActivityText, ActivityWrapper, Commentperson } from "./indexstyle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Divider } from "@mui/material";

const ActivityContainer = () => {
  return (
    <ActivityWrapper>
      <ActivityText>
        <h1>Activity</h1>
      </ActivityText>

      <Commentperson style={{ marginTop: "30px" }}>
        <AccountCircleIcon style={{ width: "38.713px", height: "38.713px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h6>James Anderson</h6>
          <p>
            Called “Books-API” with the JavaScript webhook and commented.
            “Books-API was readily available with proper documentation and
            reliability of a proper API. It was just a webhook away from
            application.”
          </p>
        </div>
      </Commentperson>
      <Divider sx={{ width: "219.61px", margin: "20px 25px 0px 30px" }} />
      <Commentperson style={{ marginTop: "30px" }}>
        <AccountCircleIcon style={{ width: "38.713px", height: "38.713px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h6>Vector Sam</h6>
          <p>
            Called “Books-API” with the JavaScript webhook and commented.
            “Books-API was readily available with proper documentation and
            reliability of a proper API. It was just a webhook away from
            application.”
          </p>
        </div>
      </Commentperson>
      <Divider sx={{ width: "219.61px", margin: "20px 25px 0px 30px" }} />
      <Commentperson style={{ marginTop: "30px" }}>
        <AccountCircleIcon style={{ width: "38.713px", height: "38.713px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h6>Nether Stone</h6>
          <p>
            Called “Books-API” with the JavaScript webhook and commented.
            “Books-API was readily available with proper documentation and
            reliability of a proper API. It was just a webhook away from
            application.”
          </p>
        </div>
      </Commentperson>
      <Divider sx={{ width: "219.61px", margin: "20px 25px 0px 30px" }} />
      <Commentperson style={{ marginTop: "30px" }}>
        <AccountCircleIcon style={{ width: "38.713px", height: "38.713px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h6>Jeff Sussex</h6>
          <p>
            Called “Books-API” with the JavaScript webhook and commented.
            “Books-API was readily available with proper documentation and
            reliability of a proper API. It was just a webhook away from
            application.”
          </p>
        </div>
      </Commentperson>
    </ActivityWrapper>
  );
};

export default ActivityContainer;
