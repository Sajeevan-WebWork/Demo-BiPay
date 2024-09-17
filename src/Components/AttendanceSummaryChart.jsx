import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 12, label: 'Regular Days' },
  { value: 14, label: 'Early Days' },
  { value: 43, label: 'Late Days' },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme, fontSize }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: fontSize || 20, // Allow fontSize to be passed as a prop
}));

function PieCenterLabel({ children, fontSize }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2} fontSize={fontSize}>
      {children}
    </StyledText>
  );
}

const StyledContainer = styled('div')({
  borderRadius: '56px',
  overflow: 'hidden',
  width: size.width,
});

export default function PieChartWithCenterLabel() {
  return (
    <StyledContainer>
      <PieChart series={[{ data, innerRadius: 60 }]} {...size}>
        <PieCenterLabel fontSize={12}>Attendace Data</PieCenterLabel> {/* Pass fontSize as prop */}
      </PieChart>
    </StyledContainer>
  );
}
