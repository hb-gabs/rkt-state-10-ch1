import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { StyledStar } from './styles';
import theme from '../../styles/theme';

export const Star = ({ active }) => {
    return (
        <StyledStar>
            {active ? (
                <AiFillStar style={{color: theme.colors.primary}} />
            ) : (
                <AiOutlineStar style={{color: theme.colors.primary}} />
            )}
        </StyledStar>
    );
}