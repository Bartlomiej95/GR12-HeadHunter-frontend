import React, {FormEvent, useState} from 'react';
import {InputWithUrl} from "../InputWithUrl/InputWithUrl";

interface Props {
    labelName: string;
    urlList: string[] | null;
}

export const InputUrlList = (props: Props) => {
    const [url, setUrl] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [myUrls, setMyUrls] = useState<string[]>([]);

    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        setIsClicked(true);
        console.log(isClicked)
    }

    function handleSave(e: FormEvent) {
        e.preventDefault();
        setMyUrls([
            ...myUrls,
            url
        ])

        console.log(myUrls)
        console.log('myUrls: ', myUrls)
    }

    return <>
        <p>{props.labelName}</p>
        {!props.urlList
            ? <>
                <button className="Button" onClick={handleClick}>Dodaj nowy adres z portfolio</button>
                {isClicked
                    ? <>
                        <input
                            type="text"
                            className="su-input su-input--border"
                            placeholder="adres z portfolio"
                            onChange={e => setUrl(e.target.value)}
                        />
                        <button className="Button" onClick={handleSave}>Zapisz</button>
                    </>
                    : null
                }
            </>
            : <>
                <ul>
                    {
                        [...props.urlList]
                            .map((oneUrl, index) => <InputWithUrl address={oneUrl} key={index}></InputWithUrl>)
                    }
                </ul>
            </>
        }
    </>
}
