import React, {useState} from "react";
import {Input} from "../Login/Login.styles";
import {Form, InputBlock, InputTitle, Wrapper} from "./ChangeEmail.styles";
import {pl} from "../../lang/pl";
import {Button} from "../../components/common/Button/Button.component";
import {LabelInfo} from "../../components/common/LabelInfo/LabelInfo.component";
import {handleChangeEmail} from "./ChangeEmail.utils";
import {LoaderCSS} from "../../components/common/Loader/Loader.component";
import {useNavigate} from "react-router-dom";

export const ChangeEmail = () => {

    const [changeEmail, setChangeEmail] = useState({
        newEmail: '',
        password: '',
    })

    const [labelActive, setLabelActive] = useState(false)
    const [message, setMessage] = useState('')
    const [load, setLoad] = useState(false)

    const navigate = useNavigate()

    return (
        <Wrapper>
            <Form>
                <InputTitle>{pl.changeEmail}</InputTitle>
                <InputBlock>
                    <Input type="text" placeholder={pl.newEmail}
                           id="oldPass" value={changeEmail.newEmail}
                           onChange={e => setChangeEmail({...changeEmail, newEmail: e.target.value})}/>
                </InputBlock>
                <InputBlock>
                    <Input type="password"
                           placeholder={pl.yourPassword}
                           id="oldPass"
                           value={changeEmail.password}
                           onChange={e => setChangeEmail({...changeEmail, password: e.target.value})}/>
                </InputBlock>
                {load ? <LoaderCSS/> : <Button big={false} text={pl.changeEmail} handleClick={() => {
                    handleChangeEmail(changeEmail.newEmail, changeEmail.password, setMessage, setLabelActive, setLoad, navigate)
                }} id=''/>}
            </Form>
            <LabelInfo labelActive={labelActive} message={message}/>
        </Wrapper>
    )
}