import React, { FC } from 'react';
import styled from 'styled-components';

interface IPlaceSearchListItemProps {}

const PlaceSearchListItem: FC<IPlaceSearchListItemProps> = () => {
  return (
    <ListItem>
      <strong>맥도날드 양평SK점</strong>
      <span>940m</span>
    </ListItem>
  );
};

export default PlaceSearchListItem;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 28px;

  & + & {
    margin-top: 32px;
  }

  strong {
    font-size: ${({ theme }) => theme.fontSizes.headline};
    letter-spacing: 0.1em;
    max-width: calc(100% - 60px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.caption02};
    color: ${({ theme }) => theme.colors.darkgray};
    margin-left: 10px;
  }
`;