import React from "react";
import {ContentText, CvDescriptionWrapper, Description, DescriptionLinks, ListWrapper, PaperClipIcon, TitleSectionCv} from "./CvDescription.styles";
import {pl} from "../../lang/pl";
import {CvDegreeDetails} from "./CvDegreeDetails/CvDegreeDetails.component";
import {ICvDescriptionProps} from "./CvDescription.types";
import {CvDescriptionDetails} from "./CvDescriptionDetails/CvDescriptionDetails.component";
import {NavLink} from "react-router-dom";
import {Clipboard, Paperclip} from "@styled-icons/boxicons-regular";

export const CvDescription: React.FC<ICvDescriptionProps> = ({
                                                                 ratingCourse,
                                                                 ratingActive,
                                                                 endProject,
                                                                 scrum,
                                                                 city,
                                                                 contract,
                                                                 freeWork,
                                                                 placeWork,
                                                                 salary,
                                                                 commercialExp,
                                                                 education,
                                                                 experience,
                                                                 courses,
                                                                 projectCourse,
                                                                 projectScrum,
                                                                 portfolio
                                                             }) => {

    return (
        <CvDescriptionWrapper>
            <TitleSectionCv>{pl.cvSectionRatings}</TitleSectionCv>
            <Description>
                <CvDegreeDetails title={pl.studentDescriptionCourseCompletion} degree={ratingCourse}/>
                <CvDegreeDetails title={pl.studentDescriptionCourseEngagement} degree={ratingActive}/>
                <CvDegreeDetails title={pl.studentDescriptionProjectDegree} degree={endProject}/>
                <CvDegreeDetails title={pl.studentDescriptionTeamProjectDegree} degree={scrum}/>
            </Description>

            <TitleSectionCv>{pl.cvSectionContract}</TitleSectionCv>
            <Description>
                <CvDescriptionDetails title={pl.studentDescriptionTypeWork} content={placeWork}/>
                <CvDescriptionDetails title={pl.studentDescriptionCity} content={city}/>
                <CvDescriptionDetails title={pl.studentDescriptionContract} content={contract}/>
                <CvDescriptionDetails title={pl.studentDescriptionSalary} content={`${salary} zł`}/>
                <CvDescriptionDetails title={pl.filterTitleFreeWork} content={freeWork ? 'Tak' : 'Nie'}/>
                <CvDescriptionDetails title={pl.cvSectionCommercial} content={commercialExp}/>
            </Description>

            <TitleSectionCv>{pl.cvSectionSchool}</TitleSectionCv>
            <Description>
                <ContentText>{education}</ContentText>
            </Description>

            <TitleSectionCv>{pl.cvSectionCourses}</TitleSectionCv>
            <Description>
                <ContentText>{courses}</ContentText>
            </Description>

            <TitleSectionCv>{pl.cvSectionExp}</TitleSectionCv>
            <Description>
                <ContentText>{experience}</ContentText>
            </Description>

            <TitleSectionCv>{pl.cvSectionPortfolio}</TitleSectionCv>
            <DescriptionLinks>
                {portfolio.map(item =>
                    <ListWrapper>
                        <li><PaperClipIcon size={20}/><a href={item} target="_blank">{item}</a></li>
                    </ListWrapper>
                )}
            </DescriptionLinks>

            <TitleSectionCv>{pl.cvSectionProjectScrum}</TitleSectionCv>
            <DescriptionLinks>
                {projectScrum.map(item =>
                    <ListWrapper>
                        <li><PaperClipIcon size={20}/><a href={item} target="_blank">{item}</a></li>
                    </ListWrapper>
                )}
            </DescriptionLinks>

            <TitleSectionCv>{pl.cvSectionProjectEnd}</TitleSectionCv>
            <DescriptionLinks>
                {projectCourse.map(item =>
                    <ListWrapper>
                        <li><PaperClipIcon size={20}/><a href={item} target="_blank">{item}</a></li>
                    </ListWrapper>
                )}
            </DescriptionLinks>

        </CvDescriptionWrapper>
    )
}