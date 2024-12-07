import { Box, Button } from "@mui/material";

import styles from "./style.module.css";

function Section1() {
  return (
    <Box
      className="test"
      sx={{
        // background: "grey",
        height: "110vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <img
        src="images/home/datim.png"
        alt=""
        style={{ width: "258px", height: "238px", marginBottom: "50px" }}
      />
      <img
        src="images/home/pattern1.png"
        alt=""
        style={{ marginBottom: "50px", left: "40px", position: "absolute" }}
      />
      <img
        src="images/home/pattern2.png"
        alt=""
        style={{
          marginBottom: "50px",
          right: "0px",
          bottom: "0",
          position: "absolute",
        }}
      />
      <h1 className={styles.red} style={{ marginBottom: "50px" }}>
        به باشگاه مشتریان "داتیس" خوش آمدید
      </h1>
      <Button variant="contained" size="large">
        ورود به باشگاه مشتریان
      </Button>
    </Box>
  );
}

export default Section1;
