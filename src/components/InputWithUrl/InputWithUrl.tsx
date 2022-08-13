import React from "react";

interface Props {
    address: string;
}

export const InputWithUrl = (props: Props) => {
    return <>
        <label>
            <input
                type="text"
                name={props.address}
                className="su-input su-input--border"
                value={props.address}
            />
        </label>
    </>
}
