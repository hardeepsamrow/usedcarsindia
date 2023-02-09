/* eslint-disable react/display-name */
import { useRouter } from "next/router";
const withAuth = (WrappedComponent) => {
    return (props) => {
        if (typeof window !== "undefined") {
            const Router = useRouter();
            const accessToken = localStorage.getItem("Token");
            if (!accessToken) {
                Router.replace("/");
                return null;
            }
            return <WrappedComponent {...props} />;
        }
        return null;
    };
};

export default withAuth;