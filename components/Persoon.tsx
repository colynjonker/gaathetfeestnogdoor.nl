import {AanmeldType, DrankKeuzeType} from "../types";
import {Card, CardContent, CardHeader, Collapse, Grid, IconButton, styled, Typography} from "@mui/material";
import React from "react";

export default function Persoon({data}:any) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <h3>Bezoekers</h3>
            <p className={"article-meta"}>Het verwachte aantal bezoekers bedraagt: <strong>{data && getAantal(data)}</strong> personen.</p>
            <p>Hieronder volgt de aanwezigheidslijst.</p>
            <div>
                <Grid
                    container
                    spacing={{xs: 2, md: 3, lg: 4}}
                    columns={{xs: 4, md: 8}}>
                {data ? data.map((persoon: AanmeldType, key: React.Key | null | undefined) => (
                    <Grid container
                        item
                          xs={4}
                          key={key}>
                    <Card
                        style={{

                        }}
                     >
                        <CardHeader title={persoon.naam}
                                    subheader={persoon.aantal == 1 ? 'geen aanhang' : ' met aanhang'}/>
                        {/*<CardContent>*/}
                        {/*    <ul>*/}


                        {/*    {persoon.drankkeuze.map((drank: DrankKeuzeType, key: any) => (*/}
                        {/*        <li>{drank.drank.naam}</li>*/}
                        {/*    ))}*/}
                        {/*    </ul>*/}
                        {/*</CardContent>*/}
                    </Card>
                    </Grid>
                )) : null}
                </Grid>
            </div>
        </div>
    )
}

function getAantal(data: any) {
    console.log(data);
    let count = 0;
    data.forEach((persoon:any) => {
        // @ts-ignore
        count += persoon.aantal;
    })
    return count;
}
