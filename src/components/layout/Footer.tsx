import { Box } from '@mui/material';
import { colors } from '@/theme/theme';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.footer,
        color: colors.textSecondary,
        height: '90px',
        textAlign: 'center',
        p: 2,
        mt: '100px',
      }}
    >
      &copy; {new Date().getFullYear()} Tire Shop. All Rights Reserved.
    </Box>
  );
}
