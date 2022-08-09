import styled from "styled-components";
import {Paperclip} from "@styled-icons/boxicons-regular";

export const CvDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 117.6rem;
`

export const TitleSectionCv = styled.p`
  padding: 1.4rem 2.6rem 1.3rem;
  font-size: ${({theme}) => theme.size.xlx};
  color: ${({theme}) => theme.color.textColor};
  background-color: ${({theme}) => theme.color.inputColor};`

export const Description = styled.div`
  display: flex;
  padding: 1.7rem 0 1.6rem 2.6rem;
  background-color: ${({theme}) => theme.color.bgDescription};
  margin-bottom: 1.2rem;
`

export const ContentText = styled.p`
  font-size: ${({theme}) => theme.size.l};
  color: ${({theme}) => theme.color.textColor};
  line-height: 2.7rem;`

export const ListWrapper = styled.ul`
  list-style: none`

export const DescriptionLinks = styled(Description)`
  flex-direction: column;

  li {
    font-size: ${({theme}) => theme.size.l};
    color: ${({theme}) => theme.color.linkColor}
  }
;`

export const PaperClipIcon = styled(Paperclip)`
  transform: rotate(-90deg);
  margin-right: 1.2rem;`