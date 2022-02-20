import {Button} from "../../components/Button";
import {Header} from "../../components/Header";
import './index.css';

export const Home = () => {
    return (
        <div className="home">
            <Header/>
            <section>
                <h1>Top 5 GitHub Users</h1>
                <span>Tap the username to see more information</span>
                <div className="users">
                    <Button person="GrahamCampbell"/>
                    <Button person="fabpot"/>
                    <Button person="weierophinney"/>
                    <Button person="rkh"/>
                    <Button person="josh"/>
                </div>
            </section>
        </div>
    );
}
