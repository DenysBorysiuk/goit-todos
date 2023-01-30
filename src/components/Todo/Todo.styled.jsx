import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  border: solid 2px rgba(0, 41, 8, 0.6);
  border-radius: 5px;
  padding: 4px;
`;

export const TodoText = styled.p`
  color: rgba(0, 41, 8, 0.6);
`;

export const WrapTodo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  cursor: pointer;
  color: rgba(0, 41, 8, 0.6);

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  > span::after {
    content: '';
    display: inline-flex;
    border: 2px solid rgba(0, 41, 8, 0.6);
    border-radius: 3px;
    height: 14px;
    width: 14px;
    transition: color 500ms ease-out;
  }

  > input {
    cursor: pointer;
    opacity: 0;
    position: absolute;

    &:checked + span::after {
      content: '\\02714';
      justify-content: center;
      align-items: center;
      color: rgba(0, 41, 8, 0.6);
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: rgba(0, 41, 8, 0.6);
  cursor: pointer;
`;
