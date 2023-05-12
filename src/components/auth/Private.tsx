import { Login } from "./Login"
import { ProfileProps } from "./Profile";


type PrivateProps = {
    isLogin : boolean;
    component: React.ComponentType<ProfileProps> // here how to only allow react component that have cerati props
}

// capital letter so react can render it
export const Private = ({isLogin, component :Component} : PrivateProps) => {
    if(isLogin){
        return <Component email="zidanputrarahman153@gmail.com" name="Zidan Putra Rahman" />
    }else {
        return <Login />
    }
}

