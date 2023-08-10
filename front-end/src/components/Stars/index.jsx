import { Star } from "../Star";
import { StyledStarsContent } from "./styles";

export const Stars = ({ rating, ...rest }) => {
    return (
        <StyledStarsContent {...rest}>
            <Star active={rating > 0}/>
            <Star active={rating > 1}/>
            <Star active={rating > 2}/>
            <Star active={rating > 3}/>
            <Star active={rating > 4}/>
        </StyledStarsContent>
    );
}