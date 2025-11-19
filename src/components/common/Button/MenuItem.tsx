import Box from '@mui/material/Box';

const MenuItem = ({
    icon,
    label,
    right,
    onClick,
    styled,
}: {
    icon: React.ReactNode;
    label: string;
    right?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    styled?: object;
}) => {
    return (
        <Box 
        onClick={onClick} 
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingY: '0.375rem',
            paddingX: '0.5rem',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            '&:hover': {
                backgroundColor: '#2a304a',
            },
        }}
        style={styled}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="text-gray-300">{icon}</span>
                <span className="text-sm">{label}</span>
            </Box>
            {right && <Box sx={{ color: 'gray' }}>{right}</Box>}
        </Box>
    );
};

export default MenuItem;