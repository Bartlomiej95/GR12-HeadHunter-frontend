import styled from "styled-components";

export const StudentsList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  background-color: ${({theme}) => theme.color.studentBg};
  margin: 1.75rem 0`;