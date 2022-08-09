import styled from "styled-components";
import {AvatarBlock} from "../common/Avatar/Avatar.styles";
import {Github} from "@styled-icons/boxicons-logos";
import {ChevronLeft, Envelope, Phone} from "@styled-icons/boxicons-solid";


export const CvBioWrapper = styled.div`
  position: relative;
  max-height: 71.8rem;
  padding: 3rem 2.4rem 2.3rem;
  background-color: ${({theme}) => theme.color.inputColor};`

export const AvatarCv = styled(AvatarBlock)`
  width: 15rem;
  height: 15rem;
  margin: 0 auto;`;

export const AvatarImage = styled.img`
  width: 100%;`

export const CvName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.2rem;`

export const UserName = styled.h4`
  font-size: ${({theme}) => theme.size.xxxl};
  color: ${({theme}) => theme.color.textColor};
  line-height: 3.9rem;`;

export const GitHubWrapper = styled.div`
  display: flex;
  column-gap: .905rem;
  align-items: center;

  a {
    font-size: ${({theme}) => theme.size.l};
    font-weight: ${({theme}) => theme.weight.bold};
  }`;

export const GitHubIcon = styled(Github)`
  color: ${({theme}) => theme.color.linkColor};`

export const CvContact = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .8rem;
  padding-top: 1.9rem;`

export const CvPhone = styled.p`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;
  font-size: ${({theme}) => theme.size.l};
  color: ${({theme}) => theme.color.textColor};`

export const PhoneIcon = styled(Phone)`
  color: ${({theme}) => theme.color.filterIcon};`

export const CvMail = styled(CvPhone)``

export const EnvelopeIcon = styled(Envelope)`
  color: ${({theme}) => theme.color.filterIcon};`

export const CvBioContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.8rem`

export const CvLabel = styled.p`
  font-size: ${({theme}) => theme.size.l};
  line-height: 2.7rem;
  font-weight: ${({theme}) => theme.weight.bold};
  color: ${({theme}) => theme.color.filterIcon};`

export const BioDescription = styled.p`
  font-size: ${({theme}) => theme.size.l};
  line-height: 2.7rem;
  color: ${({theme}) => theme.color.textColor};`

export const CvButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.4rem;
  padding-top: 3rem;`;

export const BackToTalk = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: -10.5rem;
  line-height: 2.7rem;
  color: ${({theme}) => theme.color.textColor};
  font-size: ${({theme}) => theme.size.l};
  width: 8rem;
  cursor: pointer;
`

export const ChevronLeftIcon = styled(ChevronLeft)`
  color: ${({theme}) => theme.color.filterIcon};`