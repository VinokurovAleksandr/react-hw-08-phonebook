import styled from 'styled-components';


export const Container = styled.div`
    /* display: flex; */
    /* align-items: center; */
    margin-right: 10px;
` ;

export const Avatar = styled.img`
 margin-right: 4px
` ;

export const Name = styled.span`
    font-weight: 700,
    /* margin-ri: 12px, */
` ;

export const Btn = styled.button`
    /* padding: 12px, */
    border-radius: 10px;
    cursor: pointer;
    background-color: rgb(130, 203, 235);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-weight: 500;

    &:hover {
        background-color: white;
    }
    
` ;