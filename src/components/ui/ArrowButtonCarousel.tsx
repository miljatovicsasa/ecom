import { colors } from '@/theme/theme';

const arrowStyle = {
  minWidth: '40px',
  height: '40px',
  color: colors.textPrimary,
  background: colors.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
  zIndex: 1,
  cursor: 'pointer',
};

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...arrowStyle, marginRight: '10px' }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyle, marginLeft: '10px' }}
      onClick={onClick}
    />
  );
}
