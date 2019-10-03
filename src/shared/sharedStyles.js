import styled from 'styled-components';


export const LoginDiv = styled.div`
    position: absolute;
    right: 0;
    margin-right: 50px;
    border: 2px solid #fff;
    padding: 5px;
    color: #fff;
    border-radius: 5px;

    &:hover {
        color: purple;
        border: 2px solid purple;
        cursor: pointer;
    }
`

export const ModalHeader = styled.h2`

`

export const FormForm = styled.form`
    min-width: 300px;
`

export const ModalBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ModalRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const Button = styled.button`
    width: fit-content;
    padding: 10px;
    color: #fff;
    background-color: #3987d6;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
    outline: none;
    cursor: pointer;
`