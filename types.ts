export type DrankType = {
    id: string;
    naam: string;
}

export type AanmeldType = {
    id: string;
    naam: string;
    kostuum: boolean;
    aantal: number;
    extra: string;
    drankkeuze: DrankKeuzeType[];

}

export type DrankKeuzeType = {
    drank_id: string;
    aanwezige_id: string;
    aanwezige: AanmeldType;
    drank: DrankType;
}
