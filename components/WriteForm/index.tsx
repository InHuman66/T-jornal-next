import React from 'react';
import {Button, Input, TextField} from "@material-ui/core";
import classes from "./WriteForm.module.scss";
import dynamic from "next/dynamic";
import {TextsmsOutlined as MessageIcon} from "@material-ui/icons";

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), { ssr: false })


type PropsType = {
    title?: string
}

export const WriteForm: React.FC<PropsType> = ({title}) => {
    return (
        <div>
            <Input classes={{root: classes.titleField}} placeholder={'Заголовок'}/>
            <div className={classes.editor_wrapper}>
                <Editor />
            </div>
            <Button style={{ height: 42 }} variant="contained" color="primary">
                <MessageIcon className="mr-10" />
                Опубликовать
            </Button>
        </div>
    )
}