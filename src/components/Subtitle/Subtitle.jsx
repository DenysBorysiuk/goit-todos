import { SubtitleText } from './Subtitle.styled';

export const Subtitle = ({ text, value, allTodos }) => {
  return (
    <SubtitleText>
      {text}: {value}/{allTodos}
    </SubtitleText>
  );
};
