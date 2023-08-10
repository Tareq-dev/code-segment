import { useTheme } from '@mui/material/styles';

import { Box } from '@mui/material';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <Box
  component="img"
  sx={{
    height: 100,
    width: 100,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  }}
  alt="code-segment"
  src="/assets/logos/codeSegment.png"
/>
    
  );
};
