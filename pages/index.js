import Button from "../snippets/button";
import Icon from "../assets/svg/icon";

export default function Home() {

    return (
        <main className="m-5">
            <Button color="primary"
                    content="Log in"
                    icon={<Icon svg="academic" title="academic" />}/>
        </main>
    )
};
