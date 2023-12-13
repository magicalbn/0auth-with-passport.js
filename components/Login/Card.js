import Router from "next/router";
import React from "react";

const LoginCards = (props) => {
    const { logo, link, name } = props;

    return (
        <>
            <div
                className={"login__card " + name}
                onClick={() => Router.push(`${link}`)}
            >
                <img className="logo" src={logo} alt={name} />
                <p>
                    Sign in with <span>{name}</span>
                </p>
            </div>
        </>
    );
};

export default LoginCards;
