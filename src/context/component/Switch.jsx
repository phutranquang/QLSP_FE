import React, { useState } from "react";
import { Switch } from "antd";
import ChangeUIContext from "../share/context";

const SwitchComponent = () => {

    const {onChange} = useState(ChangeUIContext);
    return (
        <>
            <Switch defaultChecked onChange={onChange}/>
        </>
    )
}

export default React.memo(SwitchComponent)