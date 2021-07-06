import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" className="txtprogresbar">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    "& .MuiLinearProgress-root": {
      height: "15px",
      borderRadius: "10px",
    },
    width: "100%",
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: "#0E4160",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#107DA1",
    },
  },
});

export default function LinearWithValueLabel(props) {
  const { value } = props;
  const classes = useStyles();
  const [valor, setValor] = useState(0);
  useEffect(() => {
    setvalue(value);
  }, [value]);

  const setvalue = (value) => {
    setTimeout(() => {
      setValor(value);
    }, 500);
  };
  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={valor} />
    </div>
  );
}
