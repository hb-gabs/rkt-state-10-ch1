import { Button } from "../Button";
import { StyledMarker, StyledMarkerName } from "./styles";
import { RxCross2 } from 'react-icons/rx';
import { RiAddFill } from 'react-icons/ri';
import { useState } from "react";
import { Input } from "../Input";
import { useRef } from "react";

export const Marker = ({
    name,
    isEmpty = false,
    onChange = () => {},
    value = '',
    onAdd = () => {},
    onDelete = () => {},
}) => {
    return (
        <StyledMarker isEmpty={isEmpty}>
            {isEmpty ? (
                <Input
                    onChange={onChange}
                    value={value}
                    placeholder="Nova Marcador"
                />
            ) : (
                <StyledMarkerName>
                    {name}
                </StyledMarkerName>
            )}
            <Button
                text=""
                icon={isEmpty ? RiAddFill : RxCross2}
                noBackground   
                onClick={isEmpty ? onAdd : onDelete}
            />
        </StyledMarker>
    );
}