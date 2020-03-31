import styled from 'styled-components'

export const FlexContHoriz = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const RecentCardStyle = styled.div`
    border-style: dotted;
    padding: 10px 5px;
`

export const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    width: 70vw;
    justify-content: center;
    background-color: #d61877;

    > div > img {
        height: 200px;
    }

    span {
        line-height: 222px;
        margin: 25px;
        font-size: 2em;
    }
`

export const StyledFilter = styled.div`
    display: flex;
    flex-direction: row;
    width: 72vw;
    height: 40px;
    justify-content: space-evenly;
    background-color: white;
    color: #282c34;
`