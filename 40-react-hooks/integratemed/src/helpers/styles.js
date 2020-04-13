import styled from 'styled-components';

export const StyledNav = styled.div`
    display: flex; 
    justify-content: space-around;
    align-items: center;
    background-color: aliceblue;
    color: black;

    a {
        color: inherit;
        text-decoration: none;
        transition: .5s;
    }


    a:hover {
        color:#00A0C6; 
        text-decoration:none; 
        cursor:pointer;  
        font-size: 1.3em;
    }
`

export const StyledArticle = styled.div`

`

export const StyledSubmission = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
        margin-bottom: 15px;
        width: 80%;
    }
    .text-input {
        margin-left: 20px;
        width: 40%;
    }
`

export const StyledPage = styled.div`
    > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        > div {
            flex-basis: 45%
        }
    }

    ul {
        display: inline-block;
    }

    h3 {
        margin-top: 30px;
    }

    .clickable:hover {
        color:#00A0C6; 
        text-decoration:none; 
        cursor:pointer;  
    }

`

export const ImageHider = styled.div`
    background-color: darkgray;
    height: 200px;
    text-align: center;
    line-height: 200px;
    font-size: 2em;
`

export const StyledCard = styled.div`
    text-align: left;
    flex-basis: 28%;
    border-style: outset;
    padding: 12px;

    li { 
        width: fit-content;
    }
`

export const CardFlxContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`