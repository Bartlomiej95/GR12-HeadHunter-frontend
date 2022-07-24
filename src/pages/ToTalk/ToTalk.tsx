import React, {useState} from "react";
import {Tools} from "../../components/Tools/Tools";
import {Student} from "../../components/Student/Student";
import {Pagination} from "../../components/Pagination/Pagination";
import {Filter} from "../../components/Filter/Filter";

export const ToTalk = () => {
    const [filter, setFilter] = useState<boolean>(false)
    return (
        <>
            <section>
                <div className="AvailableStudents">
                    <Tools filter={setFilter}/>
                    <hr/>
                    <div className="students">
                        <Student/>
                    </div>
                </div>
                <Pagination/>
            </section>
            {filter ? <Filter filter={setFilter}/> : null}
        </>
    )
}