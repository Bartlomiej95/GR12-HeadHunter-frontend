import React, {ChangeEvent, FormEvent, useState} from 'react';
import {InputWithUrl} from "../InputWithUrl/InputWithUrl";


interface Props {
    labelName: string;
    urlList: string[] | null;
    studentPortfolio: string[] | null;
    childToParent: (elem: string) => void;
}

export const InputUrlList = (props: Props) => {
    const [url, setUrl] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleAddPortfolioBtn = (e: FormEvent) => {
        e.preventDefault();
        setIsClicked(true);
        console.log('clicked add portfolio btn')

    };

    const handleSave = (e: FormEvent) => {
        e.preventDefault();
        props.childToParent(url)
    };

    const handleAddNewPortfolio = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUrl(e.target.value);
        console.log(url)
    };

    return <>
        <p>{props.labelName}</p>
        {!props.urlList
            ? <>
                <button className="Button" onClick={handleAddPortfolioBtn}>Dodaj nowy adres z portfolio</button>
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
                            .map((oneUrl, index) => <InputWithUrl address={oneUrl} index={index} key={index}/>)
                    }
                    <button className="Button" onClick={handleAddPortfolioBtn}>Dodaj kolejne portfolio</button>
                    {isClicked
                        ? <>
                            <input
                                type="url"
                                className="su-input su-input--border"
                                placeholder="adres z portfolio"
                                onChange={handleAddNewPortfolio}
                            />
                            <button className="Button" onClick={handleSave}>Zapisz</button>
                        </>
                        : null
                    }

                </ul>
            </>
        }
    </>
}
