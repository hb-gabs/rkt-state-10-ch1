import { StyledButton, StyledLink } from "./styles";

export const Button = ({
    text = 'Click',
    icon: Icon,
    onClick = () => {},
    noBackground = false,
    noPadding = false,
    invert = false,
    isLink = false,
    to,
    ...rest
}) => {
    return (
        isLink ? (
            <StyledLink
                to={to}
                noBackground={noBackground}
                noPadding={noPadding}
                centralize={!Icon}
                {...rest}
            >
                {Icon && <Icon />}
                {text}
            </StyledLink>
        ) : (
            <StyledButton
                onClick={onClick}
                centralize={!Icon}
                noBackground={noBackground}
                invert={invert}
                {...rest}
            >
                {Icon && <Icon />}
                {text}
            </StyledButton>
        )
    );
}