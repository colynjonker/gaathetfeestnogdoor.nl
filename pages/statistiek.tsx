import Layout from "../components/Layout"
import {ReactElement, ReactNode} from "react";
import useSWR from "swr";
import Persoon from "../components/Persoon";
import Drankjes from "../components/Drankjes";
import {GetStaticProps} from "next";
import {getAanwezigData, getChartData} from "../lib/fallback";
import {fetcher} from "../lib/fetcher";
import {AanmeldType} from "../types";

type IChartData = {

}
interface IProps {
    chartData: IChartData,
    aanwezigen: AanmeldType[]
}

const Statistiek = ({chartData, aanwezigen}: IProps): ReactNode => {

    const {data}  = useSWR('/api/chart', fetcher);
    const {data: aandata}  = useSWR('/api/aanwezigen', fetcher);
    const d = data ? data : chartData;
    const a = aandata ? aandata: aanwezigen;
    if (!data) <div>Loading</div>;
    else console.log(data);

    if (!aandata) <div>Loading</div>;
    else console.log(aandata);
    return(
        <div className={"wrapper"}>
            <div className="content">
                <h1 className="news">Huidige statistieken</h1>
                <p className="article-meta">Nieuwsbericht | 22-12-2021 | 15:01</p>
                <div className={"ag-row"}>
                    <p>Deze pagina is bedoeld om meer inzicht te krijgen in het alcohol gebruik van ons genodigden.
                        Hieruit maken wij onze voorraad op en wij nemen ook jullie wensen zoveel mogelijk mee in de voorloop van het feest.
                        Hieronder dus enkele getallen die het feest kort maar krachtig samenvatten.
                    </p>
                    <h3>Favoriete drinken: </h3>
                    {data ? <Drankjes data={d}/> : null}

                    <hr />
                    {data ? <Persoon data={a}/> : null}
                </div>

            </div>
        </div>
    );
}

Statistiek.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title={"Statistieken"}>
            {page}
        </Layout>
    )

}

export default Statistiek;

export const getStaticProps: GetStaticProps = async () => {
    const chartData = await Promise.all([getChartData()])
    const aanwezigData = await(Promise.all([getAanwezigData()]))
    return {
        props: {
            chartData,
            aanwezigData
        },
        revalidate: 60, // In seconds
    }
}


