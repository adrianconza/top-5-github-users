import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Header} from "../../components/Header";
import './index.css';

export const Person = () => {
    const {personId} = useParams();
    const [person, setPerson] = useState();
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.github.com/users/${personId}`);
            const result = await response.json();
            setPerson(result);
        })();
    }, [personId]);
    return (
        <div className="person">
            <Header goBack={true}/>
            <section>
                <img src={person?.avatar_url} alt="avatar_url"/>
                <div className="info">
                    <h1>{person?.name}</h1>
                    <span>{person?.location}</span>
                </div>
            </section>
        </div>
    );
}
