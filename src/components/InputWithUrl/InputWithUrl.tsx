import React, {FormEvent, useState} from "react";

interface Props {
    address: string;
    index: number;
}

export const InputWithUrl = (props: Props) => {
    const [studentPortfolioUrl, setStudentPortfolioUrl] = useState<string>('');

    const change = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setStudentPortfolioUrl(e.currentTarget.value);
    };

    return <>
        <label>
            <input
                type="url"
                name={`portfolio${props.index + 1}`}
                className="su-input su-input--border"
                defaultValue={props.address}
                onChange={change}
            />
        </label>
    </>
}
