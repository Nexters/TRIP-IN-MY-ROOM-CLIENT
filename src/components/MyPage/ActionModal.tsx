import React, { FC } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import FeatureIcon from '@/components/FeatureIcon';

interface ActionModalProps {
  isOpen: boolean;
  handleModalClose: () => void;
  bodyText: string[];
  buttonText: string;
  actionFunction: () => void;
}

const ActionModal: FC<ActionModalProps> = ({
  isOpen,
  handleModalClose,
  bodyText,
  buttonText,
  actionFunction,
}) => {
  return (
    <Wrapper>
      <StyledModal
        isOpen={isOpen}
        onRequestClose={handleModalClose}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={false}
      >
        {bodyText.map((text, i) => (
          <BodyText key={i}>{text}</BodyText>
        ))}
        <ButtonWrapper>
          <NoButtonWrapper
            onClick={handleModalClose}
            onKeyPress={handleModalClose}
            role="button"
            tabIndex={0}
          >
            <NoButton>아니요</NoButton>
            <LineWrapper>
              <FeatureIcon name={'line'} />
            </LineWrapper>
          </NoButtonWrapper>
          <YesButton onClick={actionFunction}>{buttonText}</YesButton>
        </ButtonWrapper>
      </StyledModal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  text-align: center;
`;

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 32px 30px 24px 30px;
  margin: 0 auto;
  max-width: 418.56px;
  width: 87.2%;
  outline: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white2};
  color: ${({ theme }) => theme.colors.darkbrown};

  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: red;
  }
`;

const BodyText = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.headline};
  line-height: 28px;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  button {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    outline: none;
  }
`;

const NoButtonWrapper = styled.div`
  cursor: pointer;
  outline: none;
`;

const LineWrapper = styled.div`
  display: inline;
  position: absolute;
  margin-top: 13px;
  margin-left: -42px;
`;

const NoButton = styled.button`
  color: ${({ theme }) => theme.colors.darkbrown};
`;

const YesButton = styled.button`
  color: ${({ theme }) => theme.colors.darkgray};
`;

export default ActionModal;