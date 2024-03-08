import { styled } from '@mui/material';
import { Link as LinkComponent } from 'react-router-dom';

export const VisuallyHiddenInput = styled('input')({
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
})

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    border-radius: 2rem;
    padding: 1rem 2rem;
    &:hover {
        background-color: #f0f0f0;
    }
`

export const InputBox = styled('input')`
    border: none;
    outline: none;
    padding: 0 2rem;
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    background-color: rgba(220,200,220,0.6);
`

export const SearchField = styled('input')`
    padding: 1rem 1.5rem;
    width: 20vmax;
    border: none;
    outline: none;
    border-radius: 2rem;
    background-color: lightgrey;
    font-size: 1rem;
`

export const CurvedButton = styled('button')`
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
    border: none;
    outline: none;
    background-color: black;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
`