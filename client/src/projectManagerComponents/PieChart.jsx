
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

const pieParams = { height: 200, margin: { right: 5 } };
const palette = ['red', 'blue', 'green'];

export default function PieColor() {
  return (
    <Stack className='PieChart' direction="row" width="100%" textAlign="center" spacing={1}>
      <Box flexGrow={1}>
        <Typography>Total Task</Typography>
        <PieChart
          series={[{ data: [{ value: 40 }, { value: 15 }, { value: 20 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Completed Task</Typography>
        <PieChart
          colors={palette}
          series={[{ data: [{ value: 10 }, { value: 45 }, { value: 20 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Pending Task</Typography>
        <PieChart
          series={[
            { data: [{ value: 10, color: 'orange' }, { value: 15 }, { value: 50 }] },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
  );
}