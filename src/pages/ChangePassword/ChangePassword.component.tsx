import React, {useState} from "react";
import {Input} from "../Login/Login.styles";
import {Form, InputBlock, InputTitle, Wrapper} from "./ChangePassword.styles";
import {pl} from "../../lang/pl";
import {Button} from "../../components/common/Button/Button.component";
import {LabelInfo} from "../../components/common/LabelInfo/LabelInfo.component";
import {handleChangePass} from "./ChangePassword.utils";
import {LoaderCSS} from "../../components/common/Loader/Loader.component";
import {useNavigate} from "react-router-dom";

export const ChangePassword = () => {

    const [changePass, setChangePass] = useState({
        oldPass: '',
        newPass: '',
        repeatNewPass: '',
    })

    const [labelActive, setLabelActive] = useState(false)
    const [message, setMessage] = useState('')
    const [load, setLoad] = useState(false)

    const navigate = useNavigate()

    return (
        <Wrapper>
            <Form>
                <InputTitle>{pl.changePassword}</InputTitle>
                <InputBlock>
                    <Input type="password" placeholder={pl.oldPass}
                           id="oldPass" value={changePass.oldPass}
                           onChange={e => setChangePass({...changePass, oldPass: e.target.value})}/>
                </InputBlock>
                <InputBlock>
                    <Input type="password" placeholder={pl.newPass}
                           id="oldPass" value={changePass.newPass}
                           onChange={e => setChangePass({...changePass, newPass: e.target.value})}/>
                </InputBlock>
                <InputBlock>
                    <Input type="password"
                           placeholder={pl.repeatNewPass}
                           id="oldPass"
                           value={changePass.repeatNewPass}
                           onChange={e => setChangePass({...changePass, repeatNewPass: e.target.value})}/>
                </InputBlock>
                {load ? <LoaderCSS/> : <Button big={false} text={pl.changePassword} handleClick={() => {
                    handleChangePass(changePass.oldPass, changePass.newPass, changePass.repeatNewPass, setMessage, setLabelActive, setLoad, navigate)
                }} id=''/>}
            </Form>
            <LabelInfo labelActive={labelActive} message={message}/>
        </Wrapper>
    )
}