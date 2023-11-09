import Spinner from 'react-bootstrap/Spinner';
import { SpinnerContainer } from './Loader.styled';

function GrowExample() {  
    return (
        <>
            <SpinnerContainer>
                 <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="xl" />
            </SpinnerContainer>
        </>
    )
};

export default GrowExample;