import React from 'react';
import styled from 'styled-components';
import Checkbutton from './Checkbutton';
import PropTypes from 'prop-types';



const StyledCard = styled.div`
  
  max-width: 500px;
  margin: 50px auto 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Open Sans", sans-serif;
  background-color: #E2A1A1;
  border-radius: 10px;
  

  & * {
    box-sizing: border-box;
  }
  & h5{
    text-align: center;
  }
`;

const StyledContent = styled.div`
& h6{
  text-align: center;
}

`;

const ChecklistCard = ({id,title,Description}) => {
  return (
    <StyledCard>
          <h5 className="card-title">Checklist-title</h5>
              <StyledContent>
                <h6 className="card-subtitle"> Description</h6>
                  <p className="card-text">
                    quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
              </StyledContent>
              <Checkbutton/>
    </StyledCard>
  );
};

ChecklistCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,

}
export default ChecklistCard;

