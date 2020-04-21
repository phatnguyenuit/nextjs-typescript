import React, { memo, useState, useCallback } from 'react';
import { Box, Grid, Button } from '@material-ui/core';

export const CounterComponent: React.FC = () => {
  const [value, setValue] = useState(0);
  const increase = useCallback(() => {
    setValue((value) => value + 1);
  }, []);
  const decrease = useCallback(() => {
    setValue((value) => value - 1);
  }, []);

  return (
    <Box p={4} pl={0}>
      <Grid container alignItems="center" alignContent="stretch">
        <Grid item xs="auto">
          <Button variant="contained" color="secondary" onClick={decrease}>
            -
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Box textAlign="center">{value}</Box>
        </Grid>
        <Grid item xs="auto">
          <Button variant="contained" color="primary" onClick={increase}>
            +
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const Counter = memo(CounterComponent);
Counter.displayName = 'Counter';

export default Counter;
