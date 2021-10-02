import React from 'react';
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../Comment";


type CommentObjType ={
    text: string
    id: number
    createdAt: string
    user :{
        fullname: string
        avatarUrl : string
    }
}

type PropsType = {
    items: CommentObjType[]
}

export const PostComments: React.FC<PropsType> = ({items}) => {
    return (
        <Paper elevation={0} className="mt-40 p-30">
           <div className="container">
               <Typography variant="h6" className="mb-20">
                   42 комментария
               </Typography>
               <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                   <Tab label="Популярные" />
                   <Tab label="По порядку" />
               </Tabs>
               <Divider />
               <div className="mb-20" />
               {items.map( obj => <Comment key={obj.id} user={obj.user} text={obj.text} createAt={obj.createdAt}/>)}
           </div>
        </Paper>
    )
}