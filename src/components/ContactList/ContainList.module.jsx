import styled from 'styled-components';

export const Container = styled.div`
    border:none;
    margin-top: 25px;
`;
export const ContainList = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* border: 1px solid #000000; */
    padding: 20px;
    border-radius: 6px;
    list-style: none;
    background-color: rgb(120, 203, 235);
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, 
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, 
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;
export const ContainItem = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
`;
export const ContainText = styled.p`
    text-align: center;
    padding-right: 5px;
`;
export const BtnList = styled.button`
    cursor: pointer;
    width: 100px;
    font-weight: bold;
    color: #000000;
    border: 1px solid #000000;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;

    &:hover {
    background-color: rgb(245, 58, 52);
    color: rgb(255, 255, 255);
}
`;



// .list{
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     border: 1px solid #000000;
//     padding: 20px;
//     border-radius: 6px;
//     list-style: none;
//     background-color: #f1f5b1;
//     box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
// }

// .btn{
//     /* text-decoration: none; */
//     cursor: pointer;
//     width: 90px;
//     font-weight: bold;
//     color: #000000;
//     border: 1px solid #000000;
//     border-radius: 25px;
//     background: #ffffff;
//     cursor: pointer;
// }

// .btn:hover {
//     background-color: rgb(235, 181, 120);
//     color: rgb(255, 255, 255);
// }

// .Btn_list {
//     background: #267bef;
//     color: #FFFFFF;
//     border: none;
//     border-radius: 20px;
    
// }

// .item {
//     display: flex;
//     justify-content: space-between;
//     background-color: #FFFFFF;
//     border: 1px solid #000000;
//     padding: 10px;
//     border-radius: 10px;
//     margin-bottom: 5px;
    
// }