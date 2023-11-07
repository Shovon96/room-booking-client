import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="text-5xl font-extrabold text-center">
                <img src="https://media.discordapp.net/attachments/1163919577130999870/1171524193196724254/image.png?ex=655cfded&is=654a88ed&hm=9614ba44924a6c2bf70e3276a08e89d891c1eca9b8799c4df4114ebc57994fac&=&width=592&height=423" alt="" />
                <Link to='/' className="btn btn-primary">Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;