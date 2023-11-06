import styled from 'styled-components';


export const FormPhonebook = styled.form`
    width: 200p;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    display: flex;
    flex-direction: column;
    background-color: #f1f5b1;
`;

export const FormBtn = styled.button`
 align-items: center;
    margin: 5px;
    border-radius: 20px;
`;

export const LabelName = styled.label`
 margin: 10px;
    border-radius: 5px;
    margin: auto;
`;

// .formBtn { 
//     margin-top: 10px;
//     margin-bottom: 10px;
//     cursor: pointer;
// }

// .input_style{
//     border-radius: 5px;
//     margin: auto;
//     margin-top: 10px;
   
// }

// .formBtn:hover {
//     background-color: rgb(235, 181, 120);
//     color: rgb(255, 255, 255);
// }